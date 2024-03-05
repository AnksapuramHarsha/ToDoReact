import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header';
import Form from './Components/Form';
import ToDoList from './Components/ToDoList';

function App() {
  // const [count, setCount] = useState(0)
  const [input,setInput]=useState("");
  const [toDoList,setToDoList]=useState([]);

  return (
    <>
      <Header/>
      <Form input={input} setInput={setInput} toDoList={toDoList}  setToDoList={setToDoList}/>
      <ToDoList toDoList={toDoList}  setToDoList={setToDoList}/>
    </>
  )
}

export default App
