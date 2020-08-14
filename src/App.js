import React from 'react';
import { AppContainer } from './component/Container.js'
import './App.css';
import { Todo } from './component/Todo.js';
import { useSelector } from 'react-redux'

function App() {
  const todos = useSelector(state => state.todos)
  console.log(todos)
  return (
    <AppContainer>
      {todos.length === 0 ?
        todos.map(item => <Todo title={item.title} body={item.body} />) : null}
    </AppContainer>
  );
}

export default App;