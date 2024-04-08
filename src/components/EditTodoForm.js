import React,{useState} from 'react'


export const EditTodoform = ({editTodo, task}) => {
    const [value,setvalue] = useState(task.task)
    const handleSubmit= (e)=>{
        e.preventDefault();
        editTodo(value,task.id)
        
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e)=>setvalue(e.target.value)} className='todo-input' placeholder='update task'></input>
        <button type='submit' className='todo-btn'>Add updated task</button>
    </form>
  )
}
