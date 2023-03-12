import React, { useState} from 'react';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  

  const [time,setTime] = useState();
  const [description,setDescription] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleTime = (e)=>{
    setTime(e.target.value);
  }

  const handleDescription = (e)=>{
    setDescription(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      time: time,
      description: description
    });
    setInput('');
    setTime('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <div>
          <input
            placeholder='Update your Task'
            value={input}
            onChange={handleChange}
            name='text'
           
            className='todo-input edit'
            required
            autoComplete='off'

          />
          <br />
          <input
            type="text"
            placeholder='Update Task Description'
            value={description}
            onChange={handleDescription}
            name='description'
            className='todo-input edit'
            required
            autoComplete='off'

          />

          <input
            type='time'
            value={time}
            placeholder='Add time'
            onChange={handleTime}
            name='time'
            className='todo-input edit'
            required
            autoComplete='off'
        /><br/>
        <br/>


          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </div>
      ) : (
        <div>
          <input
            placeholder="Add a Task"
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
           
            required
            autoComplete='off'

            
          />
          <br/>
          <input
            type='text'
            placeholder='Enter Task Description'
            value={description}
            onChange={handleDescription}
            name='description'
            className='todo-input'
            required
            autoComplete='off'

          />
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
        </div>
      )}
    </form>
  );
}

export default TodoForm;
