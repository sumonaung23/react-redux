import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './lesson-2/app/store';
import { Provider } from 'react-redux';
import { fetchPosts } from './lesson-2/features/posts/postSlice';
import { fetchUsers } from './lesson-2/features/users/usersSlice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';

store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


/* ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
); */
