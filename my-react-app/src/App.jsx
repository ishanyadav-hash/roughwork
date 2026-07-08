import { useState } from 'react'  

function App() {
  const [task,setTask]=useState("")
  const [todo,setTodo]=useState([])
  const [edit,setEdit]=useState("")
  const [editId,setEditId]=useState(null)
  function addTask(){
    if (task.trim()==="") return;
    setTodo([...todo,{id:Date.now(),text:task,completed: false}])
    setTask("")
  }

  function delTask(id){
    const newArr =todo.filter((t)=>t.id!==id)
    setTodo(newArr);
  }
  function toggleTodo(id){
    const arr=todo.map((t)=>id===t.id? {...t,completed:!t.completed} : t )
    setTodo(arr)
  }
  function saveTodo() {
  const arr = todo.map((t) =>
    t.id === editId
      ? { ...t, text: edit }
      : t
  );

  setTodo(arr);
  setEditId(null);
  setEdit("");
}
  return (
    <>
    <h1>My Todo App</h1>

    <input type='text' placeholder='Enter text here' value={task} onChange={(e)=>setTask(e.target.value)}/>
    
    <h3>You typed: {task}</h3>
    
    <button onClick={addTask}>Add</button>
    {todo.length===0? "No todos yet": todo.map((t,id)=>(
      <ul key={t.id}>
        <li>{editId===t.id? (<input
    value={edit}
    onChange={(e) => setEdit(e.target.value)}/>):(t.text)}</li><input type='checkbox' checked={t.completed} onChange={()=>{toggleTodo(t.id)}}/>
        <button onClick={()=>delTask(t.id)}>Delete</button>
        {editId === t.id ? (
  <button onClick={saveTodo}>Save</button>) : (
  <button
    onClick={() => {
      setEditId(t.id);
      setEdit(t.text);
    }}>
    Edit
  </button>
)}
      </ul>
    ))} 
    </>
  )
}

export default App
