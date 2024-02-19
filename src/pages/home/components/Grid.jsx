import React from 'react'
import {motion} from "framer-motion"

function Grid({...others}) {
  return (
    <motion.div {...others} className='fixed z-50 w-full h-full p-5'>
        <div className='w-full h-full border-2 border-[#fb4d38] opacity-25' ></div>
    </motion.div>
  )
}

export default Grid