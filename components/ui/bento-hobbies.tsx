import React from 'react'
import { FaChess, FaCode } from 'react-icons/fa'
import { IoBookSharp } from 'react-icons/io5'
import { CgGym } from 'react-icons/cg'
import { MdSportsCricket } from 'react-icons/md'

const Hobbies = () => {
  const items = [
    {
      title : "Playing Cricket",
      icon : <MdSportsCricket size={25}/>,
    },
    {
      title : "Hitting the GYM ",
      icon : <CgGym size={25}/>,
    },
    {
      title : "Coding",
      icon : <FaCode size={25}/>,
    },
    {
      title : "Reading Books",
      icon : <IoBookSharp size={25}/>,
    },
    {
      title : "Playing Chess",
      icon : <FaChess size={25}/>,
    },
  ]
  return (
    <>
    <div className=" text-center text-green-100  pt-4 text-2xl font-semibold">
        Hobbies
      </div>
      <div className="pt-5 px-8 h-[28vh] flex flex-col justify-between">
        {items.map((item)=>(
          <div key={item.title} className='flex gap-3'>
            {item.icon}
            <div className="text-lg font-semibold text-purple-800 dark:text-slate-100 text-center">{item.title}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Hobbies