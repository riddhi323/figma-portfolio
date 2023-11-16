"use client";
import Hero from "@/components/main/Hero";
import Myimage from "@/components/main/Myimage";
import Skills from "@/components/main/Skills";
import Image from "next/image";
import Typewriter from "typewriter-effect";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 ">
        <Hero />
        {/* <Skills/> */}

        <Myimage />

        

        <div className="  moving-div  md:hidden w-full relative flex flex-col h-[500px] text-white text-center">
          <div className="   p-2 max-w-4xl absolute top-[-10px] rounded-lg left-[70px] w-[230px] mx-auto  h-[400px]  ">
            <span className = "text-emerald-500 text-3xl font-mono">This is</span>
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
            <span className = "text-purple-500 text-3xl">I'm a </span>
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
        </div>
      </div>
    </main>
  );
}
