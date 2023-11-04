import React from 'react';
import PostsList from './lesson-2/features/posts/PostsList';
import AddPostForm from './lesson-2/features/posts/AddPostForm';
import SinglePostPage from './lesson-2/features/posts/SinglePostPage';
import EditPostForm from './lesson-2/features/posts/EditPostFrom';
import Layout from './lesson-2/components/Layout';
import UsersList from './lesson-2/features/users/usersList';
import UserPage from './lesson-2/features/users/UserPage';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path='edit/:postId' element={<EditPostForm />} />
        </Route>

        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />

      </Route>
    </Routes>
  );
}

export default App;
