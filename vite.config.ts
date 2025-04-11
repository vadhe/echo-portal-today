
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssr: {
    format: 'esm',
    noExternal: ['react-router-dom'],
  },
  // Define environment variables that will be available in the client
  define: {
    'import.meta.env.VITE_STRAPI_API_URL': JSON.stringify(process.env.VITE_STRAPI_API_URL || 'http://localhost:1337'),
  },
}));
