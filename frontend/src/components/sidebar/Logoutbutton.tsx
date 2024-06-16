import React from 'react'
import { BiLogOut } from "react-icons/bi";

const Logoutbutton = () => {
  return (
    <div className='mt-auto hover:bg-slate-400 w-fit cursor-pointer rounded-md p-1'><BiLogOut className=' w-6 h-6 text-red-600'/></div>
  )
}

export default Logoutbutton