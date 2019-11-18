import React from 'react';
import './App.css';

function App() {
  return (
    <form>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required></input>
        <label for="description">Short description</label>
        <input type="text" id="description" name="description" required></input>
        <label for="task">Task3</label>
        <textarea id="task" name="tak" required></textarea>
        <button type="submit">Submit</button>
    </form>
  );
}

export default App;
