import React from 'react';
import { Temperature } from './components/TempComponent/Temperature';
import { TodoList } from './components/TodoComponent/TodoList';
import { NewsBoard } from './components/NewsComponent/NewsBoard';
import './App.css';

function App() {

  return (
    <div className="App">
      <NewsBoard />
      <TodoList />
      <Temperature />
    </div>
  );
}

export default App;