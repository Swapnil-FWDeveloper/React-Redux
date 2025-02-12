
import React from 'react';
import ReactDOM from 'react-dom';
function App() {
  const items = ["React", "JavaScript", "CSS"];
  return (
    <div>
      <h1>My List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));