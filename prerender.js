
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// Pages to pre-render
const routesToPrerender = [
  '/',
  '/news/1',
  '/news/2',
  '/news/3'
]

// Set environment variables for prerendering
process.env.VITE_STRAPI_API_URL = process.env.VITE_STRAPI_API_URL || 'http://localhost:1337'

async function prerender() {
  // Read the production build files
  const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8')
  const { render } = await import('./dist/server/entry-server.js')

  // For each route, render the HTML
  routesToPrerender.forEach(async (url) => {
    const { html: appHtml, dehydratedState } = await render(url)
    
    const html = template
      .replace(`<div id="root"></div>`, `<div id="root" data-ssr="true">${appHtml}</div>`)
      .replace(
        '</head>',
        `<script>window.__REACT_QUERY_STATE__ = ${dehydratedState};</script></head>`
      )

    // Write to file
    const filePath = `dist/client${url === '/' ? '/index' : url}.html`
    fs.mkdirSync(path.dirname(toAbsolute(filePath)), { recursive: true })
    fs.writeFileSync(toAbsolute(filePath), html)
    
    console.log('pre-rendered:', filePath)
  })
}

prerender()
