import { useState, type FormEvent } from "react"
import type { Task } from "../types/type-task"

const useTask = () => {
    const [tasks,setTasks] = useState<Task[]>([])

    const [addTask,setAddTask] = useState<string>("")

    const submitTask = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const newTask:Task ={
            id:Date.now(),
      text:addTask,
      isCompleted:false
    }
    setTasks(prev =>[...prev,newTask])
    setAddTask("")
  }

  const deleteTask = (id:number)=>{
    setTasks(tasks.filter((task)=>task.id !==id))
  }

  const toggleTask = (id:number)=>{

    setTasks(prev => prev.map(c=>
      c.id === id ? {...c, isCompleted: !c.isCompleted} : c
    ))
  }
  return {tasks, addTask,setAddTask, submitTask, deleteTask, toggleTask,}
}

export default useTask