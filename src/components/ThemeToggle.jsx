import React from 'react'
import {useEffect, useState} from 'react'
import {FaMoon, FaSun} from "react-icons/fa"

const ThemeToggle = () => {

    const [dark, setDark] = useState(true)

    useEffect(() =>{
        if(dark){
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [dark])

  return (

    <button onClick={() => setDark(!dark)} className='text-xl p-2 rounded-full hover:bg-gray-800'>

        {dark ? <FaSun/> : <FaMoon/>}
        
    </button>
    
  )
}

export default ThemeToggle
