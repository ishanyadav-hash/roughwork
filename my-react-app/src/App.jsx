import { useState,useEffect } from 'react'  

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
    <div className='min-h-screen bg-gray-200 flex justify-center items-center'>
    <div className='w-full max-w-lg bg-white rounded-xl shadow-lg p-6'>
    <h1 className='text-3xl text-center font-bold mb-6'>My Todo App</h1>
    <h4 className='text-center mb-2'>Enter your task</h4>
    <div className='flex mb-6 gap-3'>
    <input className='flex-1 border rounded-xl px-4 py-2' type='text' placeholder='Enter text here' value={task} onChange={(e)=>setTask(e.target.value)}/>
    <button className='bg-blue-500 text-white rounded-lg hover:bg-blue-600 px-5' onClick={addTask}>Add</button>
    </div>
    {todo.length===0? (<h3 className='text-center'>No work</h3>): todo.map((t,id)=>(
      <ul className='flex justify-between items-center border rounded-lg p-3 mb-3' key={t.id}>
        <div className='flex items-center gap-3'>
        <input type='checkbox' checked={t.completed} onChange={()=>{toggleTodo(t.id)}}/>
        
        <li>{editId===t.id? (<input className='border rounded-xl'
        value={edit}
        onChange={(e) => setEdit(e.target.value)}/>):(<span className={t.completed ? "line-through text-gray-400" : ""}>{t.text}</span>)}</li>
        </div>
        <div className='flex gap-2'>
        {editId === t.id ? (
          <button className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600' onClick={saveTodo}>Save</button>) : (
          <button className='bg-yellow-500 text-white rounded px-3 py-1 hover:bg-yellow-600'
          onClick={() => {
            setEditId(t.id);
            setEdit(t.text);
            }}>
              Edit
              </button>
            )}
        <button className='bg-red-500 text-white rounded hover:bg-red-600 px-3 py-1' onClick={()=>delTask(t.id)}>Delete</button>
        </div>
      </ul>
    ))}
    </div>
    </div>
    </>
  )
}

export default App
