import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import './App.css';

import { Task } from './models/task';

import TaskInput from './components/TaskInput';
import TaskTable from './components/TaskTable';


export default function App() {

  const [tasks, setTasks] = useState([]);

  function onTaskCreate(name) {
    // create task

    const task = new Task(
      new Date().getTime(),
      name,
      false,
    )

    setTasks([...tasks, task]);


    //add task to tasks state


  }

  function onTaskCompleteToggle(taskId) {
    // toggle task completed state
    const taskToToggle = tasks.find((task)=> task.id === taskId);
    taskToToggle.complete = !taskToToggle.complete;

    // update the tasks state with new updates state
    setTasks(tasks.map((task)=> {
      return task.id === taskId ? taskToToggle : task;
    }));
  }

  function onTaskRemove(taskId) {
    // filter the tasks to keep

    // update the tasks state
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <div className= 'container my-4'>
      <div className='card card-body text-center'>
        <h1> Task List</h1>
        <hr></hr>
        <p>Our simple task list</p>
        <TaskInput onTaskCreate={onTaskCreate}/>

        <TaskTable
          onTaskCompleteToggle={onTaskCompleteToggle}
          onTaskRemove={onTaskRemove}
          tasks={tasks} />
      </div>
    </div>
  );
}
