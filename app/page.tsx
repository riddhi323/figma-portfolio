"use client";
import Hero from "@/components/main/Hero";
import Myimage from "@/components/main/Myimage";
import Skills from "@/components/main/Skills";
import Image from "next/image";
import Typewriter from "typewriter-effect";
// used compressed data
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 ">
        <Hero />
        {/* <Skills/> */}

        <Myimage />

        

        <div id ="about-me" className="   md:hidden w-full relative flex flex-col h-[0px] text-white text-left">
          <div className=" pl-[30px] p-2 max-w-4xl absolute top-[-10px] rounded-lg   w-[230px] mx-auto  h-[260px]  ">
            <span className = "text-emerald-500 text-2xl font-mono">This is</span>
            <Typewriter
              options={{
                strings: ["Bibhabendu Mukherjee"],
                autoStart: true,
                cursorClassName: "Typewriter__wrapper",
                loop: true,
                
                delay: 40,
                deleteSpeed: 20,
              }}
            />
            <span className = "text-purple-500 text-2xl">{"I am"}</span>
            <Typewriter
              
              options={{
                strings: ["Computer Science Student" , "Recreational Programmer" , "Love to make System"],
                autoStart: true,
                cursorClassName: "Typewriter__wrapper",
                loop: true,
                
                delay: 80,
                deleteSpeed: 50,
              }}
            />
          </div>

          <div className=" absolute right-[40px] top-[200px] pb-[20px] h-[220px]">
            <h2 className = "font-mono text-2xl text-red-400"> Interested in</h2>
            <Typewriter
              
              options={{
                strings: ["Backend Development" , "Machine Learning" , "MERN Stack"],
                autoStart: true,
                cursorClassName: "Typewriter__wrapper",
                loop: true,
                
                delay: 15,
                deleteSpeed: 20,
              }}
            />


            
          </div>

          <div className=" pl-[30px] p-2 max-w-4xl absolute top-[300px] rounded-lg   w-[230px] mx-auto  h-[260px]  ">
            <span className = "text-emerald-500 text-2xl font-mono">I have </span>
            <Typewriter
              options={{
                strings: ["Skills " , "Dedication" , "Love" , "Passion"],
                autoStart: true,
                cursorClassName: "Typewriter__wrapper",
                loop: true,
                
                delay: 40,
                deleteSpeed: 20,
              }}
            />
            <span className = "text-purple-500 text-2xl">{"In"}</span>
            <Typewriter
              
              options={{
                strings: ["JavaScript"  , "C++" , "Java" , "NodeJS" , "MongooDB" , "Sql" , "Typescript" , "React"],
                autoStart: true,
                cursorClassName: "Typewriter__wrapper",
                loop: true,
                
                delay: 30,
                deleteSpeed: 50,
              }}
            />
          </div>

        </div>
       

        <div className = " h-[680px] ">
        <div className = "relative flex flex-col h-full w-full text-white">

        <video autoPlay muted loop className=' absolute opacity-90   top-[220px] left-0 z-[1] w-full object-fit h-full'>
            <source src='/1.mp4' type='video/mp4'></source>
        </video>

        
       
</div>
        </div>
        
      </div>
    </main>
  );
}
