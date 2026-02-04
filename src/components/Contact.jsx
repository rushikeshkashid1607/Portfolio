import React from 'react'
import {motion} from 'framer-motion'
import {FaEnvelope, FaLinkedin} from "react-icons/fa"


const Contact = () => {
  return (

    <section id='contact' className='py-20 bg-block'>
    <div className='max-w-5xl mx-auto px-6 text-center'>

        <motion.h2 
            initial = {{opacity : 0, y : 30}}
            whileInView={{opacity : 1, y : 0}}
            className='text-3xl font-bold mb-6'> Contact Me</motion.h2>

        <p className='text-gray-400 mb-8'>
            Feel free to reach out for opportunities or collaborations.
        </p>

        <div className='flex justify-center gap-6'>

            <a href="mailto:rushikeshkashid218@gmail.com"
                className='flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blur-600 rounded-full'>
                    
                    <FaEnvelope/> Email </a>
            
            <a href="https://www.linkedin.com/in/rushikesh-kashid-6554a4253"
                target='_blank'
                className='flex items-center gap-3 px-6 py-3 border border-gray-600 hover:border-white rounded-full'>

                    <FaLinkedin/> LinkedIn
                </a>
        </div>
      
    </div>
   </section>
  )
}

export default Contact
