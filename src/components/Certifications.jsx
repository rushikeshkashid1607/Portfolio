import React from 'react'
import {motion} from "framer-motion"
import { certifications } from '../data/resumeData'

const Certifications = () => {
  return (

    <section id='certifications' className='py-20 bg-gray-950'>
    <div className='max-w-5xl mx-auto px-6'>

        <motion.h2 
            initial = {{opacity : 0, y : 30}}
            whileInView={{opacity : 1, y : 0}}
            className='text-3xl font-bold text-center mb-10'> Certifications </motion.h2>

        <ul className='space-y-4 max-w-3xl mx-auto'>
            {certifications.map((cert, index) =>(
                <motion.li 
                    key={index}
                    whileHover={{x : 10 }}
                    className='bg-black border border-gray-800 p-4 rounded-lg text-gray-300'> {cert} 
                </motion.li>
            ))}
        </ul>
      
    </div>
  </section>
  )
}

export default Certifications
