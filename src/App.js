import "./Style.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import AddTask from "./Components/AddTask";
import Tasks from "./Components/Tasks";
import EmptyTask from "./Components/EmptyTask";
import About from "./Components/About";
import Footer from "./Components/Footer";
import axios from "axios";

function App() {
  
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  const url = "https://proactiff.herokuapp.com/api/tasks/";

  useEffect(() => {
    fetchTasks()
  }, [])
  
  const fetchTasks = async () => {
    const res = await axios.get(url);
    const data = res.data;
    setTasks(data);
  }

  const fetchTask = async (id) => {
    if(id){
      const res = await axios.get(`${url}${id}/`);
      return res.data
    }
  }

 const addTask = async (task) => {
    const res  = await axios.post(url, task);
    const data = res.data;
    setTasks([...tasks, data]);

  }
  

  const deleteTask = async (id) => {
    const res = await axios.delete(`${url}${id}/`);
    if(res.status === 204){
      setTasks(tasks.filter((task) => task.id !== id));
    }
  }

  const toggleReminder = async (id) => {
    const task = await fetchTask(id)
    const updatedTask = {...task, reminder: !task.reminder}
    const res = await axios.put(`${url}${id}/`, updatedTask);
    const data = res.data;
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder:data.reminder} : task
      )
    )
  }

  const toggleAddBtn = () => {
    setShowAddTask(!showAddTask)
  }
 
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <>
            <Header title="Proactiff" onShow={toggleAddBtn} toggleShow={showAddTask}/>
            {showAddTask && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ? (
              <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>)
              : (<EmptyTask/>)
              }
            <Footer/>
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
          <Header title="About Proactiff"/>
          <About/>
          <Footer/>
          </>
        }
      />
    </Routes>
  );
}

export default App;