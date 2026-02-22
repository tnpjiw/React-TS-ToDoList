import type { Task } from "../types/type-task";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";

interface FormTodoProps {
  task: Task;
  deleteTask: (id:number) => void
  toggleTask: (id:number) => void
}

const TaskList = ({ task, deleteTask,toggleTask }: FormTodoProps) => {

  return (
    <li className="flex items-center p-2 hover:bg-gray-200 hover:rounded hover:text-black select-none">
      <div className="flex items-center gap-3">
        {task.isCompleted ? (
            <FaCheckCircle className="text-green-400 hover:text-green-500 text-3xl cursor-pointer" onClick={()=>toggleTask(task.id)}/>
        ) : (
            <FaRegCircle className="text-gray-400 hover:text-gray-600 text-3xl cursor-pointer" onClick={()=>toggleTask(task.id)}/>
        )}
        <p className={task.isCompleted ? "line-through text-gray-400" : ""}>{task.text}</p>
      </div>
      <IoIosCloseCircle
        className="text-red-400 hover:text-red-500 text-3xl ml-auto cursor-pointer"
        onClick={() => deleteTask(task.id)}
      />
    </li>
  );
};

export default TaskList;
