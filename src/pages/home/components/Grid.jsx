import React from 'react'
import {motion} from "framer-motion"

function Grid({...others}) {
  return (
    <motion.div {...others} className='fixed z-50 w-full h-full p-5 pointer-events-none'>
        <div className='w-full h-full border-2 border-black opacity-75' ></div>
    </motion.div>
  )
}

export default Grid