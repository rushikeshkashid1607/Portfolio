import React from 'react'
import {motion} from "framer-motion"
import { experience } from '../data/resumeData'

const Experience = () => {
  return (

    <section id = "experience" className='py-20 bg-gray-950'>
    <div className='max-w-5xl mx-auto px-6'>

        <motion.h2 
            initial = {{opacity : 0, y : 30}}
            whileInView = {{opacity : 1, y : 0}}
            className = "text-3xl font-bold text-center mb-10">Experience
        </motion.h2>

        {experience.map((exp, index)=>(
            <motion.div
                key = {index}
                className = "bg-black border border-gray-800 rounded-xl p-6">
                    <h3 className='text-xl font-semibold'>{exp.role}</h3>
                    <p className='text-gray-400'>{exp.company} . {exp.duration}</p>

                    <ul className='list-disc list-inside mt-4 text-gray-400'>
                        {exp.points.map((point, i)=>(
                            <li key = {i}>{point}</li>
                        ))}
                    </ul>
                </motion.div>
        ))}
      
    </div>
  </section>
  )
}

export default Experience
