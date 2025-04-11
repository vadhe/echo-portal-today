
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { 
  QueryClient, 
  QueryClientProvider,
  dehydrate
} from '@tanstack/react-query';

export function render(url: string, context: Record<string, any> = {}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // Don't retry on the server
        retry: false,
        // Don't refetch on the server
        refetchOnWindowFocus: false,
        staleTime: Infinity,
      },
    }
  });
  
  // Prefetch important queries here if needed
  // await queryClient.prefetchQuery({
  //   queryKey: ['news'],
  //   queryFn: fetchAllNews,
  // });
  
  const html = renderToString(
    <QueryClientProvider client={queryClient}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </QueryClientProvider>
  );
  
  // Get the query state to pass to the client
  const dehydratedState = JSON.stringify(dehydrate(queryClient));
  
  return {
    html,
    context,
    dehydratedState
  };
}
