import { useState } from "react";
import Deletebutton from "./Deletebutton";
import Footer from "./Footer";
import Complete from "./Complete";

export default function Tasks() {
  const [task, setTask] = useState({name:"",done:false});
  const [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
    setTask({name:event.target.value,done:false});
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = { content: task.name };
    setTasks([...tasks, newTask]);
    setTask({name:"",done:false});
  };
  const handleMarkComplete = (taskToComplete) => {
    const updatedTasks = tasks.map((task) =>
      task.content === taskToComplete.content ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          value={task.name}
          onChange={handleChange}
          placeholder="Enter your task here"
          className="task-input"
        />
        <button type="submit" className="add-btn">+</button>
      </form>

      <div className="todo-list">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <h1 key={index} className="todoitem"><Complete task={task} setTask={setTask} onMarkComplete={handleMarkComplete}/><Deletebutton task={task} tasks={tasks} setTasks={setTasks}/></h1>
          ))
        ) : (
          <p className="no-tasks-message">No To Do Available Yet!!</p>
        )}
      </div>
      <footer><Footer tasks={tasks}task={task}/></footer>
    </div>
  );
}