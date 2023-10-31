import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './lesson-2/app/store';
import { Provider } from 'react-redux';
import { fetchUsers } from './lesson-2/features/users/usersSlice';

import App from './App';

store.dispatch(fetchUsers());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

