 import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';

function App() {
  const[showAddTask, setShowAddTask ] = useState(false);
  const[tasks, setTasks] = useState([
    {
    id: 1,
    text:'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
    },
    {
      id: 2,
      text:'exercise',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
      },
      {
        id: 3,
        text:'exercise',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
        },
  ])

  // Delete Task

  const deleteTask = (id) => {
    setTasks(previousState => tasks.filter((task) => task.id !== id ))
  }

  // Toggle reminder
  // if task id in current iteration is === to id passed in
  // then spread  across all tasks property and values but 
  // change reminder

  const toggleReminder = (id) =>{
    console.log(id)
    setTasks( tasks.map((task) => task.id === id 
    ?{...task, reminder: !task.reminder}: task

    ))
  }


  // AddTask to UI
   
  const addTask = (task) =>{
    console.log(task)
    // give me random id 
    const id = Math.floor(Math.random() * 10000 ) + 1
     
    // newtask is an object with id and copy all the task
    const newTask = {id, ...task}
    setTasks(previousState => [...tasks, newTask])
  }


 

  return (
    <>
      <div className='container'>
        < Header  onAdd={()=> setShowAddTask( !showAddTask )} showAdd={showAddTask}/>
        {showAddTask &&    <AddTask onAdd={addTask} />}


        {tasks.length > 0 ? 
        (<Tasks  tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>)
         :
         ('No Tasks To Show')}
      </div>
    </>
  )
}

export default App
