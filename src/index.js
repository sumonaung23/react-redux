import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './lesson-3/features/api/apiSlice';

import App from './App';

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <ApiProvider api={apiSlice}>
        <App />
      </ApiProvider>
    </React.StrictMode>
  )


