import React from 'react'
import img from '../../../assets/join_img.JPEG'
const ProgramBack = () => {
  return (
    <div className='h-screen w-full relative flex justify-center items-center '>
        <img src={img} className='w-full h-full object-cover object-[50%_95%]' alt="" />
          <div className="absolute inset-0 bg-black/25" />
        <h1 style={{ fontFamily: "XB Niloofar", fontStyle: "italic" }} className='absolute text-white text-[8rem] font-normal'>The Stage Membership</h1>
        </div>
  )
}

export default ProgramBack