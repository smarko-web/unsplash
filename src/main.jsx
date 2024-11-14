import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ContextWrapper } from './appContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextWrapper>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </ContextWrapper>
);
