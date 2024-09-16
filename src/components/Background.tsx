// import React from 'react'
import pokeball1 from "../assets/pokeball.png"
import pokeball2 from "../assets/pokeball2.png"

const Background = () => {
  return (
    <div className='-z-10 absolute max-h-screen grid grid-cols-3 gap-8'>
        <img src={pokeball1} alt="pokeball1" className='h-80 pokeball pokeball1'/>
        <img src={pokeball2} alt="pokeball2" className='h-80 pokeball pokeball2'/>
        <img src={pokeball1} alt="pokeball3" className='h-80 pokeball pokeball3'/>
        <img src={pokeball2} alt="pokeball4" className='h-80 pokeball pokeball4'/>
        <img src={pokeball1} alt="pokeball5" className='h-80 pokeball pokeball5'/>
        <img src={pokeball2} alt="pokeball6" className='h-80 pokeball pokeball6'/>
    </div>
  )
}

export default Background