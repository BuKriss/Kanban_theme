import React, { useState } from 'react';
import TaskColumn from '../TaskColumn';
import TaskForm from '../TaskForm';

const taskStatuses = ['todo' , 'progress', 'done'];

const initialTasks = [
  {id: 1, title: 'Task 1', status: 'todo', priority: 1},
  {id: 2, title: 'Task 2', status: 'progress', priority: 2},
  {id: 3, title: 'Task 3', status: 'done', priority: 3},
  {id: 4, title: 'Task 4', status: 'todo', priority: 4},
  {id: 5, title: 'Task 5', status: 'progress', priority: 5},
  {id: 6, title: 'Task 6', status: 'done', priority: 6},
]

const TaskBoard = () => {
    const [tasks, setTasks] = useState(initialTasks);
  
    const onStatusChange = (id, newStatus) => {
      setTasks(tasks.map((task) => (task.id === id) ? {...task, status: newStatus} : task));
    };
  
    const onCreateTask = (task) => {
      setTasks([...tasks, {...task, id: Math.random(), status: 'todo'}])
    };
  
    return (
      <div className="container">
        <TaskForm onSubmit={onCreateTask} />
  
        <div className='row'>
          {taskStatuses.map((status) => (
            <TaskColumn 
            key={status} 
            status={status}
            tasks={tasks} 
            statuses={taskStatuses}
            onStatusChange={onStatusChange}
          />
        ))}
      </div>

    </div>
    );
  }
  
  export default TaskBoard;