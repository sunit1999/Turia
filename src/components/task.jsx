import React, { useState } from 'react';
import './task.css';

const TaskBox = () => {

  const [task, setTask] = useState('Enter a task');

  const handleChange = e => {
    const { value } = e.target;
    setTask(value);
  }
  
  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskname"
          value={task}
          onChange={handleChange}
        />
      </form>
    </div>
   );
}

export default TaskBox;