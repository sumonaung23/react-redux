import React from 'react';
import PostsList from './lesson-2/features/posts/PostsList';
import AddPostForm from './lesson-2/features/posts/AddPostForm';

import './App.css';

function App() {
  return (
    <main className="app">
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
