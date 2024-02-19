import React from 'react'

function AboutLink({link,children}) {
  return (
    <a href={link} id='about-link' className="relative text-[24px] transition-all text-orange_main hover:text-orange_hover " >{children}</a>
  )
}

export default AboutLink