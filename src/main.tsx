
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { 
  QueryClient, 
  QueryClientProvider,
  Hydrate
} from '@tanstack/react-query';

// Get the dehydrated state from the server
const dehydratedState = window.__REACT_QUERY_STATE__;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
    },
  },
});

// Client-side rendering
const rootElement = document.getElementById('root');

if (rootElement) {
  if (rootElement.innerHTML === '' || !rootElement.hasAttribute('data-ssr')) {
    // No SSR, do normal render
    createRoot(rootElement).render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    );
  } else {
    // Hydrate if we have SSR content
    hydrateRoot(
      rootElement,
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Hydrate>
      </QueryClientProvider>
    );
  }
}
