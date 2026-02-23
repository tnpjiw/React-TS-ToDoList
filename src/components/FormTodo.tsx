import TaskList from "./TaskList"
import useTask from "../hooks/useTask";
import { HiOutlinePencilSquare } from "react-icons/hi2";


const FormTodo = () => {
  const {tasks, addTask,setAddTask, submitTask, deleteTask, toggleTask,} = useTask()

  return (
    <div className="flex flex-col gap-5 items-center mt-20">
      <h1 className="text-2xl font-bold text-blue-400 select-none flex items-center justify-center gap-3">To Do List <HiOutlinePencilSquare className="text-blue-500"/></h1>

          <form action="" className="flex" onSubmit={submitTask}>
            <input type="text" className="p-2 outline-0 border border-gray-400 rounded-l-full w-md" value={addTask} onChange={((e)=>setAddTask(e.target.value))}/>
            <button className="bg-blue-400 hover:bg-blue-500 rounded-r-full p-2 px-4 w-25 text-white select-none disabled:bg-gray-400" disabled={!addTask.trim()}>Add</button>
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