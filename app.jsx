import React, { useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState('');

  const handlePost = () => {
    if (text.trim()) {
      setPosts([{ id: Date.now(), content: text }, ...posts]);
      setText('');
    }
  };

  return (
    <div className="App">
      <h1>Facebook Clone</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
      />
      <button onClick={handlePost}>Post</button>
      <div>
        {posts.map(post => (
          <div key={post.id} className="post">
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
