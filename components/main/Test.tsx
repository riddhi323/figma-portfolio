"use client"
import React from 'react'
import { animate, motion } from "framer-motion";
import {  slideInFromLeft, slideInFromTop } from '@/utills/motion';
function Test() {
  return (
    <motion.div
    initial = "hidden"
    animate = "visible"
    >
         <div className="h-full  w-full flex flex-col gap-5 justify-center m-auto text-start">
       hello
      </div>


    </motion.div>
  )
}

export default Test