import React, { useState, useCallback } from 'react';
import './App.css';
import List from './List';
import Form from './Form';

const App = () => {
  const [showForm, setShowForm] = useState(true)
  const hideForn = useCallback(() => setShowForm( showForm => !showForm ), [])
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React dispatcher sample
        </p>
      </header>
      <h1>To do list</h1>
      <p>
        {
          showForm && <Form/>
        }
      </p>
      <button onClick={hideForn}>Remove form</button>
      <List/>
    </div>
  );
}

export default App;
