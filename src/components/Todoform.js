import React,{useState} from 'react'


export const Todoform = ({addTodo}) => {
    const [value,setvalue] = useState("")
    const handleSubmit= (e)=>{
        e.preventDefault();
        addTodo(value)
        setvalue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e)=>setvalue(e.target.value)} className='todo-input' placeholder='What is the task today?'></input>
        <button type='submit' className='todo-btn'>Add task</button>
    </form>
  )
}
