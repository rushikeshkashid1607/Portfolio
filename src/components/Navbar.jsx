import {motion} from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import {FaBars} from "react-icons/fa"
import {useState} from 'react'

const Navbar = () => {

    // const [open, setOpen] = useState(false)

  return (

    <motion.nav 
        initial={{y : -80, opacity : 0}}
        animate={{y : 0, opacity : 1}}
        transition={{duration: 0.6}}
        className='fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50'>

    
    {/* <button className='md:hidden text-xl' onClick={() => setOpen(!open)}>
        <FaBars/>
    </button> */}

    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
  <h1 className="text-xl font-bold text-blue-400 cursor-pointer hover:scale-105 transition">
    Welcome! Buddy
  </h1>

  <div className="hidden md:flex gap-6">
    {["about", "skills", "projects", "contact"].map((item) => (
      <a
        key={item}
        href={`#${item}`}
        className="
          relative px-3 py-2 text-gray-300 font-medium
          transition-all duration-300
          hover:text-blue-400
          active:scale-95
        "
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}

        <span className="
          absolute left-0 bottom-0 h-[2px] w-0 bg-blue-400
          transition-all duration-300
          group-hover:w-full
        "></span>
      </a>
    ))}
  </div>
</div>


    {/* <div className='flex items-center gap-4'>
        <ThemeToggle/>
    </div> */}
    </motion.nav>
  )
}

export default Navbar
