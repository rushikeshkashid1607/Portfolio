import React from 'react'
import {motion} from 'framer-motion'
import {aboutMe, education} from '../data/resumeData'

const About = () => {
  return (

    <section id = "about" className='py-20 bg-black'>
    <div className='max-w-5xl mx-auto px-6'>
      
      <motion.h2 
        initial={{opacity : 0, y : 30}}
        whileInView={{opacity : 1, y : 0}}
        className = "text-3xl font-bold text-center mb-10">About Me</motion.h2>

      <p className='text-gray-400 text-center max-w-3xl mx-auto'>{aboutMe}</p>

      <div className='mt-12 grid md:grid-cols-2 gap-6'>
        {education.map((edu,index)=>(
            <motion.div 
                key={index}
                whileHover={{scale : 1.03}}
                className = "bg-black border border-gray-800 p-6 rounded-xl">

                    <h3 className='font-semibold text-lg'>{edu.degree}</h3>
                    <p className='text-gray-400'>{edu.institute}</p>
        
                <p className='text-sm text-gray-500'>{edu.score} . {edu.year} </p>

            </motion.div>
        ))}
      </div>
    </div>
   </section>
  )
}

export default About
