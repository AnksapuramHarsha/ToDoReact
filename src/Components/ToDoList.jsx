/* eslint-disable react/prop-types */
// import React from 'react'

// eslint-disable-next-line react/prop-types
const ToDoList = ({toDoList, setToDoList}) => {
    const handleDelete=(id)=>{
        setToDoList(toDoList.filter((todo)=>
            todo.id!=id
))
    }
  return (
    <div>
        {
            toDoList.map((item)=>(
                <li key={item.id}>
                    <input type="text" value={item.title}
                    onChange={(e)=>e.preventDefault()}
                />
                <button onClick={()=>handleDelete(item.id)}>delete</button>
                <button>edit</button>
                </li>
            ))
        }
    </div>
  )
}

export default ToDoList