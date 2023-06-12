import React from 'react'
import { IoMdAddCircle } from "react-icons/io";


export default function AddCard() {
  return (
    <div className='bg-white w-[264px] rounded-md h-8 flex justify-center items-center border border-[#F2F4F7]'>
      <h1 className='text-2xl text-gray-200'><IoMdAddCircle/></h1>
    </div>
  )
}
