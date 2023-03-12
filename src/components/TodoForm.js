import React, { useState, useEffect, useRef } from 'react';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  const [time,setTime] = useState();

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleTime = (e)=>{
    setTime(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      time: time
    });
    setInput('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your Task'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
            required
            autoComplete='off'

          />
          <br />

          <input
            type='time'
            value={time}
            placeholder='Add time'
            onChange={handleTime}
            name='time'
            className='todo-input edit'
            required
            autoComplete='off'
        /><br/><br/>
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a Task"
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
            required
            autoComplete='off'

            
          />
          <br/>
          <input
            type='time'
            value={time}
            onChange={handleTime}
            name='time'
            className='todo-input'
            required
            autoComplete='off'

          />
          <br/>
          <br/>
          <button onClick={handleSubmit} className='todo-button'>
          Add todo   <AccessTimeTwoToneIcon/>
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
