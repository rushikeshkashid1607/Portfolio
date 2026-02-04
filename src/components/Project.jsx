import React from 'react'
import {motion} from "framer-motion"
import {projects} from "../data/resumeData"

const Project = () => {
  return (

    <section id='projects' className='py-20 bg-black'>
    <div className='max-w-5xl mx-auto px-6'>

        <motion.h2
            initial = {{opacity : 0, y : 30}}
            whileInView={{opacity : 1, y : 0}}
            className='text-3xl font-bold text-center mb-10'>Projects</motion.h2>

        <div className='grid md:grid-cols2 gap-8'>
            {projects.map((projects, index) =>(
                <motion.div 
                    key = {index}
                    whileHover={{ scale : 1.03 }}
                    className='bg-gray-900 border border-gray-800 p-6 rounded-xl'>

                        <h3 className='text-xl font-semibold'> {projects.title} </h3>

                        <p className='text-gray-400 mt-3'> {projects.description} </p>

                        <div className='flex flex-wrap gap-2 mt-4'>
                            {projects.tech.map((tech, i) =>(
                                <span key={i} className='text-sm px-3 py-1 bg-black border border-gray-700 rounded-full'> {tech} </span>
                                
                            ))}
                        </div>
                    </motion.div>
            ))}
        </div>
      
    </div>
   </section>
  )
}

export default Project
