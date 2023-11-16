import React from 'react'

function Myimage() {

    const getRandomRotation = () => {
        return Math.floor(Math.random() * 360); // Generate a random rotation between 0 and 360 degrees
      };
  return (
    <div className = "image-slider mt-[30px] md:ml-[200px] ">

        <span style = {{transform : `rotateY(calc(1*45deg)) translateZ(350px)`}} >
            <img src="/5.png" alt = "myimage"/>
        </span>

        <span style = {{transform : `rotateY(calc(2*45deg)) translateZ(350px)`}} >
            <img src="/5.png" alt = "myimage"/>
        </span>

        <span style = {{transform : `rotateY(calc(3*45deg)) translateZ(350px)`}} >
            <img src="/5.png" alt = "myimage"/>
        </span>
        <span style = {{transform : `rotateY(calc(4*45deg)) translateZ(350px)`}} >
            <img src="/5.png" alt = "myimage"/>
        </span>
        <span style = {{transform : `rotateY(calc(5*45deg)) translateZ(350px)`}} >
            <img src="/5.png" alt = "myimage"/>
        </span>

    </div>
  )
}

export default Myimage