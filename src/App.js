import React from 'react';
import PostsList from './lesson-2/features/posts/PostsList';
import AddPostForm from './lesson-2/features/posts/AddPostForm';
import SinglePostPage from './lesson-2/features/posts/SinglePostPage';
import EditPostForm from './lesson-2/features/posts/EditPostFrom';
import Layout from './lesson-2/components/Layout';
import { Routes, Route } from 'react-router-dom';

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

      </Route>
    </Routes>
  );
}

export default App;
