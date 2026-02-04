import {motion} from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import {FaBars} from "react-icons/fa"
import {useState} from 'react'

const Navbar = () => {

    const [open, setOpen] = useState(false)

  return (

    <motion.nav 
        initial={{y : -80, opacity : 0}}
        animate={{y : 0, opacity : 1}}
        transition={{duration: 0.6}}
        className='fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50'>

    
    <button className='md:hidden text-xl' onClick={() => setOpen(!open)}>
        <FaBars/>
    </button>

    <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
        <h1 className='text-xl font-bold text-blue-400'>
            Rushikesh
        </h1>

        {open && (
            <div className='md : hidden bg-black border-t border-gray-800'>
                <a href="#about" className='block px-6 py-3'> About </a>
                <a href="#skills" className='block px-6 py-3'> Skills </a>
                <a href="#projects" className='block px-6 py-3 '> Projects </a>
                <a href="#contact" className='block px-6 py-3 '> Contact </a>
            </div>
        )}

    </div>

    <div className='flex items-center gap-4'>
        <ThemeToggle/>
    </div>
    </motion.nav>
  )
}

export default Navbar
