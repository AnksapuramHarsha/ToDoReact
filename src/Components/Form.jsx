// import React from 'react'
import {v4 as uuidv4} from "uuid";


// eslint-disable-next-line react/prop-types
const Form = ({input,setInput,toDoList,setToDoList}) => {
const handleToDoList=(e)=>{
    e.preventDefault();
    
    setToDoList([...toDoList,{
        id:uuidv4(),
        title:input,

    },
])
    
}
  return (
    <div>
        <form onClick={handleToDoList}>
            <input type="text" placeholder="Enter text" value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
            <button type="submit">click me</button>
            
        </form>
        
    </div>
  )
}

export default Form