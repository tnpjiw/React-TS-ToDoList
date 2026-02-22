import reactLogo from "../assets/react.svg"
import Theme from "./Theme"


const Header = () => {
  return (
    <div className="flex bg-blue-400 w-full h-16 justify-between items-center select-none">
        <div className="flex gap-2 items-center">
        <img src={reactLogo} alt="" className="w-10 ml-3"/>
        <h1 className="text-white text-xl font-bold">To Do List</h1>
        </div>
        <Theme />
    </div>
    
  )
}

export default Header