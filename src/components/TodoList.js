import React, { useState,useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import RocketLaunchTwoToneIcon from '@mui/icons-material/RocketLaunchTwoTone';
import NightsStayIcon from '@mui/icons-material/NightsStay';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    updatedTodos.sort((a,b)=>(parseInt(a.time.replace(":","")) > parseInt( b.time.replace(":",""))) ? 1: -1)
    console.log(updatedTodos)
    setTodos(updatedTodos);
  };
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
    setTheme('dark');
    }
    else {setTheme('light');
  }
}
useEffect(() => {
  document.body.className = theme;
  }, [theme]);

const styleForPaper = {
  width: '40px',
  height: '40px',
  alignItems:'right',
  color:'#9a0cff'
};


  return (
    
    <div className={`App ${theme}`}>
    <br />
    <NightsStayIcon className='icon' onClick={toggleTheme} style={styleForPaper}/>
      <h1>TaskMate <RocketLaunchTwoToneIcon/></h1>
      <h3>What's the Plan for Today?</h3>
      <br />
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      </div>
  );
}

export default TodoList;
