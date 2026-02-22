import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";
import type { TypeTheme } from "../types/type-theme";

const Theme = () => {
    const [theme,setTheme] = useState<TypeTheme>(()=>{
        const saveTheme = localStorage.getItem("mode")
        return (saveTheme as TypeTheme) || "light"
    })

    const toggleTheme = ()=>{
        setTheme(prev =>(prev === "light" ? "dark" : "light"))
    }

    useEffect(()=>{
        document.documentElement.classList.toggle("dark",theme === "dark")
        localStorage.setItem("mode",theme)
    })
  return (
        <span className="text-2xl mr-5 text-white cursor-pointer" onClick={toggleTheme}>
           {theme === "light" ? <MdOutlineWbSunny /> : <FaMoon />}
        </span>
  )
}

export default Theme