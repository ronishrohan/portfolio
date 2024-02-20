import React from 'react'
import {motion} from "framer-motion"

function Overlay({...others}) {
  return (
    <motion.div {...others} className='fixed z-50 w-full h-full p-5 pointer-events-none'>
        <div className='w-full h-full border-2 border-black' >
          <nav className='h-8 bg-black' >

          </nav>
        </div>
    </motion.div>
  )
}

export default Overlay