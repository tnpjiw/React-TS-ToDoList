import type { Task } from "../types/type-task"

interface TaskStatusProps{
    task:Task[]
}

const TaskStatus = ({task}:TaskStatusProps) => {
  return (
    <div className="flex w-md justify-between">
      <h1 className="flex gap-4 text-blue-500">Total Task: <p className="text-black">{task.length}</p></h1>
      <h1 className="flex gap-4 text-blue-500">Task In Progress: <p className="text-black">{task.filter(task => !task.isCompleted).length}</p></h1>
      <h1 className="flex gap-4 text-blue-500">Completed Task: <p className="text-black">{task.filter(task => task.isCompleted).length}</p></h1>
    </div>
  )
}

export default TaskStatus
