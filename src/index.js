import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './lesson-4/app/store';
import { Provider } from 'react-redux';
import { extendedApiSlice } from './lesson-4/features/posts/postsSlice';
import { usersApiSlice } from './lesson-4/features/users/usersSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

store.dispatch(extendedApiSlice.endpoints.getPosts.initiate());
store.dispatch(usersApiSlice.endpoints.getUsers.initiate());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);