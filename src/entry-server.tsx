
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function render(url: string, context: Record<string, any> = {}) {
  const queryClient = new QueryClient();
  
  const html = renderToString(
    <QueryClientProvider client={queryClient}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </QueryClientProvider>
  );
  
  // Get the query state to pass to the client
  const dehydratedState = JSON.stringify(queryClient.getQueryCache().getAll().map(query => ({
    queryKey: query.queryKey,
    data: query.state.data
  })));
  
  return {
    html,
    context,
    dehydratedState
  };
}
