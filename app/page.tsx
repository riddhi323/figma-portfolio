import Hero from '@/components/main/Hero'
import Myimage from '@/components/main/Myimage'
import Skills from '@/components/main/Skills'
import Image from 'next/image'

export default function Home() {
  return (
   <main className = "h-full w-full">
    <div className = "flex flex-col gap-20 ">

      <Hero/>
      {/* <Skills/> */}

      <Myimage/>

      <div className = "w-full h-[500px] text-white">hello</div>
    </div>
    
   </main>
  )
}
