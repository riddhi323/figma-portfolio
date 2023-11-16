import Image from 'next/image';
import React from 'react'

function Myimage() {

    const getRandomRotation = () => {
        return Math.floor(Math.random() * 360); // Generate a random rotation between 0 and 360 degrees
      };
  return (
    <div className="flex flex-row flex-wrap">
      <div className = "image-slider mt-[30px] md:ml-[400px] z-[1]  ">

<span style = {{transform : `rotateY(calc(1*45deg)) translateZ(350px)`}} >
    <img src="/5t.png" className = "animate-pulse"  alt = "myimage"/>
</span>

<span style = {{transform : `rotateY(calc(2*45deg)) translateZ(350px)`}} >
    <Image src="/6t.png" width= {100}   className = "animate-pulse"   height= {0}alt = "myimage"/>
</span>

<span style = {{transform : `rotateY(calc(3*45deg)) translateZ(350px)`}} >
<Image src="/10t.png" width= {100}  className = "animate-pulse"    height= {0}alt = "myimage"/>
</span>
<span style = {{transform : `rotateY(calc(4*45deg)) translateZ(350px)`}} >
    <img src="/12t.png"  className = "animate-pulse"   alt = "myimage"/>
</span>
<span style = {{transform : `rotateY(calc(5*45deg)) translateZ(350px)`}} >
    <img src="/13t.png"  className = "animate-pulse"   alt = "myimage"/>
</span>

</div>


    <div className= "relative ">
        <div className=" hidden lg:block xl:left-[500px] absolute lg:left-[300px] top-[100px]">
        <div className = " h-[50px] w-[300px] ">
        <h1 className="text-4xl leading-9 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
    myself Bibhabendu Mukherjee
</h1>

        </div>
        </div>
        
    </div>

    </div>
  
  )
}

export default Myimage

