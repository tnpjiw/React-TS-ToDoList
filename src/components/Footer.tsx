import tsLogo from "../assets/ts.png"

const Footer = () => {
  return (
    <div className='w-full h-24 bg-blue-400 mt-auto flex justify-center items-center p-2 gap-2 select-none'>
        <img src={tsLogo} alt="" className="w-14"/>
        <h1 className="text-white font-bold text-2xl">React TypeScript</h1>
    </div>
  )
}

export default Footer