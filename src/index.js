import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './lesson-2/app/store';
import { Provider } from 'react-redux';
import { fetchPosts } from './lesson-2/features/posts/postSlice';
import { fetchUsers } from './lesson-2/features/users/usersSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';

store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<App />}/>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

