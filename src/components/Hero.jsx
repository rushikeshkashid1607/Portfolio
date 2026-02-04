import {motion} from 'framer-motion'
import {FaLinkedin} from 'react-icons/fa'

const Hero = () => {
  return (

    <section className='min-h-screen flex items-center justify-center bg-black pt-20'>
    <div className='text-center px-6'>

        <motion.h1 
            initial={{opacity : 0, y : 40}}
            animate={{opacity : 1, y : 0}}
            transition={{delay : 0.3}}
            className="text-4xl md:text-6xl font-bold">
            
            Hi, I'm <span className='text-blue-400'>Rushikesh Kashid</span>
        </motion.h1>

        <motion.p 
            initial={{opacity : 0, y : 40}}
            animate={{opacity : 1, y : 0}}
            transition={{delay : 0.6}}
            className='mt-6 text-gray-400 max-w-2xl mx-auto'>
                Computer Science Postgraduate specializing in
                Machine Learning and Web Development.
        </motion.p>

        <motion.div
            initial={{opacity : 0, y : 40}}
            animate={{opacity : 1, y : 0}}
            transition={{delay : 0.9}}
            className='mt-8 flex justify-center gap-6'>

                <a href="//www.linkedin.com/in/rushikesh-kashid-6554a4253"
                    target='_blank'
                    className='flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition'><FaLinkedin/>LinkedIn</a>
        

                <a href="#projects"
                    className="px-6 py-3 border border-gray-600 hover:border-white rounded-full transition">
                    View Projects
                </a>

                <a href="/Rushi_final_resume.pdf" download className='px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black rounded-full transition'> Download Resume </a>
        </motion.div>
      
    </div>
   </section>
  )
}

export default Hero
