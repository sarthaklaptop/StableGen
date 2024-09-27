import React from 'react'
import { FiLoader } from "react-icons/fi";

export default function loading() {
  return (
    <div className=' w-full h-dvh flex justify-center items-center'>
        <FiLoader className=' animate-spin'/>
    </div>
  )
}
