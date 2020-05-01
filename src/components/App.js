import React from 'react';
import InputBar from './InputBar/InputBar';
import Todos from './Todos/Todos';
import ResetButton from './ResetButton/ResetButton';

const App = () => (
  <div>
    <h1>Kevin's Todo App</h1>
    <InputBar />
    <Todos />
    <ResetButton />
  </div>
);

export default App;
