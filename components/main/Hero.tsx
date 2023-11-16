import React from 'react'
import HeroContent from '../sub/HeroContent'

function Hero() {
  return (
    <div className = "relative flex flex-col h-full w-full">

        <video autoPlay muted loop className=' absolute  top-[-220px] left-0 z-[1] w-full object-fit h-full'>
            <source src='3.mp4' type='video/mp4'></source>
        </video>
       
        <HeroContent/>



    </div>
  )
}

export default Hero