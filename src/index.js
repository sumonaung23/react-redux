import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './lesson-4/app/store';
import { Provider } from 'react-redux';
import { extendedApiSlice } from './lesson-4/features/posts/postsSlice';
import { fetchUsers } from './lesson-4/features/users/usersSlice'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './lesson-3/features/api/apiSlice'; */

import App from './App';

store.dispatch(extendedApiSlice.endpoints.getPosts.initiate());
store.dispatch(fetchUsers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

/* ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <ApiProvider api={apiSlice}>
        <App />
      </ApiProvider>
    </React.StrictMode>
  ) */


