
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

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
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    );
  }
}
