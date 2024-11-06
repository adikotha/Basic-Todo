import { useState } from "react";

export default function Form({task,tasks,setTask,setTasks}){
    const handleChange = (event) => {
        setTask(event.target.value);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        const newTask = { content: task };
        setTasks([...tasks, newTask]);
        setTask("");
      };
    return (
        <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter your task here"
          className="task-input"
        />
        <button type="submit" className="add-btn">+</button>
      </form>
    )
}