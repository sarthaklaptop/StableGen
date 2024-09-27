"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div className="flex items-center justify-center flex-col">
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.95,
            // y: 100,
            filter:"blur(10px)"
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition = {{
            duration: 0.95
          }}
          className="text-6xl sm:text-4xl font-bold "
        >
          StableGen
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            scale: 0.95,
            // y: 100,
            filter:"blur(10px)"
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition = {{
            duration: 0.95,
            delay: 0.35,
          }}
          className="text-center text-white/50"
        >
          Create stunning AI-generated images with ease.
        </motion.p>
        <motion.div 
        initial={{
          opacity: 0,
          scale: 0.95,
          // y: 100,
          filter:"blur(10px)"
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition = {{
          duration: 0.95,
          delay: 0.7,
        }}
        className="div">
          <Link href='/create'>
            <Button className="mt-3 font-bold p-5 ">Start Creating</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
