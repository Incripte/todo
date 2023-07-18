import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md';
import NewTodo from './components/NewTodo';

import './App.css';

const App = () => {

  const [todos, setTodos] = useState([]);
  const onNewTodo = () => {
    setTodos([
        ...todos,
        {
            id: new Date().getTime(),
            title: value,
            checked: false,
        }
        ]);
  }

  const onRemove = (todo) => {
  setTodos(todos.filter((obj) => obj.id !== todo.id));
}

const onToggle = (todo) => {
  setTodos(todos.map((obj) => (obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj))
  )
};

  return(
    <section id="app" className="container">
      <header>
        <h1 className="title">todo</h1>
      </header>
      <section className="main">
        <NewTodo onNewTodo={onNewTodo} />
          <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id.toString()}>
              <span
                className= {['todo', todo.checked ? 'checked' : ""].join(' ')}
                onClick={() => onToggle(todo)}
                onKeyPress={() => onToggle(todo)}
                role='button'
                tabIndex={0}>
                  {todo.title}
              </span>
              <button
                className="remove"
                type="button"
                onClick={() => onRemove(todo)}>
               <MdDelete size={28} />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
    );
};

export default App;
