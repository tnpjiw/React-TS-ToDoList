import { useEffect, useState, type FormEvent } from "react"
import type { Task } from "../types/type-task"

const useTask = () => {
    const [tasks,setTasks] = useState<Task[]>(()=>{
      const savedTasks = localStorage.getItem("todoitems")
      return savedTasks ? JSON.parse(savedTasks) : []
    })

    const [addTask,setAddTask] = useState<string>("")

    useEffect (() => {
      localStorage.setItem("todoitems",JSON.stringify(tasks))
    },[tasks])

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
    setTasks(prev => prev.filter((task)=>task.id !==id))
  }

  const toggleTask = (id:number)=>{

    setTasks(prev => prev.map(c=>
      c.id === id ? {...c, isCompleted: !c.isCompleted} : c
    ))
  }

  const clearCompleted = ()=>{
    setTasks(prev => prev.filter(task => !task.isCompleted))
  }

  const [filter,setFilter] = useState<"all" | "inprogress" | "complete">("all")
  
    const filterTasks = tasks.filter(task=>
      filter === "all"
      ? true 
      : filter === "complete"
      ? task.isCompleted
      : !task.isCompleted
    )
  
  return {tasks, addTask,setAddTask, submitTask, deleteTask, toggleTask,clearCompleted,filterTasks, setFilter}
}

export default useTask