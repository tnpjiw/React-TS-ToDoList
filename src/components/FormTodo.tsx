import TaskList from "./TaskList"
import { useState, type FormEvent } from "react"
import type { Task } from "../types/type-task"


const FormTodo = () => {
  const [addTask,setAddTask] = useState<string>("")

  const [tasks,setTasks] = useState<Task[]>([
    
  ])

  const submitTask = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    const newTask:Task ={
      id:Date.now(),
      text:addTask,
      isCompleted:false
    }
    setTasks([...tasks,newTask])
    setAddTask("")
  }

  const deleteTask = (id:number)=>{
    const updateTask = tasks.filter((task)=>task.id !==id)
    setTasks(updateTask)
  }

  const toggleTask = (id:number)=>{

    setTasks(prev => prev.map(c=>
      c.id === id ? {...c, isCompleted: !c.isCompleted} : c
    ))
  }

  return (
    <div className="flex flex-col gap-5 items-center mt-20">
      <h1 className="text-2xl font-bold text-blue-400 select-none">To Do List</h1>

          <form action="" className="flex" onSubmit={submitTask}>
            <input type="text" className="p-2 outline-0 border border-gray-400 rounded-l-full w-md" value={addTask} onChange={((e)=>setAddTask(e.target.value))}/>
            <button className="bg-blue-400 hover:bg-blue-500 rounded-r-full p-2 px-4 text-white select-none disabled:bg-gray-400" disabled={!addTask.trim()}>Add</button>
          </form>
        
          <ul className="flex flex-col gap-3 w-md">
            {tasks.map((task)=>(
              <TaskList key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleTask}/>
            ))}
          </ul>
    </div>
  )
}

export default FormTodo