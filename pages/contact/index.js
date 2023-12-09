import Cricles from '../../components/Circles'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'


const Contact = () => {
  return (
  <motion.div variants={fadeIn('up', 1)} initial="hidden" animate='show' exit='hidden' className=' h-full bg-primary/30'>
    <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
      {/* text form */}
      <div className='flex flex-col w-full max-w-[700px]'>
        {/* text */}
        <motion.h2 variants={fadeIn('right', 0.6)} initial="hidden" animate='show' exit='hidden' className='h2 text-center mb-12'>Lets <span className='text-accent'>Connect.</span></motion.h2>
        {/* from */}
        <motion.from variants={fadeIn('left', 0.4)} initial="hidden" animate='show' exit='hidden' className="flex-1 flex flex-col gap-6">
          {/* input group */}
          <div className='flex gap-x-6 w-full gap-6 mx-auto'>
            <input type='text' placeholder='Name' className='input'></input>
            <input type='email' placeholder='Email' className='input'></input>
          </div>
          <input type='text' placeholder='Subject' className='input'></input>
          <textarea placeholder='Message' className='textarea'></textarea>
          <motion.button variants={fadeIn('down', 0.2)} initial="hidden" animate='show' exit='hidden'
            className="w-28 h-12 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-600 to-purple-800 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#8b13ed] hover:cursor-pointer">
            Lets Talk
          </motion.button>

        </motion.from>
      </div>
    </div>
  </motion.div>
  )
};

export default Contact;
