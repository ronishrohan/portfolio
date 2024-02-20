import React from 'react'
import { icons } from '../../../util/icons'

function AboutLink({link,children}) {
  return (
    <a href={link} id='about-link' className="relative flex text-[24px] font-semibold transition-all text-orange_main hover:text-orange_hover " >
      &nbsp;
      <span>{children}</span>
      <span className='text-[14px] ml-1'>{icons.link2}</span>
      &nbsp;
    </a>
  )
}

export default AboutLink