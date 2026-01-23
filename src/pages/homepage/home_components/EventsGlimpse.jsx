import React from 'react'

const EventsGlimpse = () => {
  return (
   <div className="w-full h-screen  max-w-8xl px-15 mx-auto">

  <div className="grid h-full grid-cols-1 md:grid-cols-[0.8fr_0.6fr] gap-15 items-stretch" style={{ fontFamily: "Gordita, sans-serif" }}>

    {/* LEFT COLUMN — MULTIPLE ENTRIES */}
    <div className=" mb-15  flex flex-col justify-between gap-4  pr-8">
        <h1 className='mt-15 font-normal text-5xl'>Our Archives</h1>
     <div>
         {/* ===== ROW 1 ===== */}
<div className="group transition-all duration-300 ease-out 
                hover:scale-[1.03] hover:bg-gray-100 
                p-4 cursor-pointer border-b border-gray-300">

 <h2 className="relative inline-block w-full text-2xl md:text-3xl font-normal leading-tight">
    We achieved <br /> higher accuracy of final

    {/* UNDERLINE */}
    <span
      className="absolute left-0 -bottom-1 h-[2px] bg-black 
                 w-0 group-hover:w-[48%] transition-all duration-700 ease-out"
    ></span>
  </h2>

  <p className="mt-3 text-sm font-light text-gray-900">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro dolore, animi aliquam quisquam eius molestias accusantium libero,
  </p>
</div>

{/* ===== ROW 2 ===== */}
<div className="group transition-all duration-300 ease-out 
                hover:scale-[1.03] hover:bg-gray-100 
                p-4 cursor-pointer border-b border-gray-300">

  <h2 className="text-2xl relative md:text-3xl font-normal leading-tight">
    Robust clinical text classification using

    <span
      className="absolute left-0 -bottom-1 h-[2px] bg-black 
                 w-0 group-hover:w-[78%] transition-all duration-700 ease-out"
    ></span>
  </h2>
  

  <p className="mt-3 text-sm font-light text-gray-900">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro dolore, animi aliquam quisquam eius molestias accusantium libero,
  </p>
</div>

{/* ===== ROW 3 ===== */}
<div className="group transition-all duration-300 ease-out 
                hover:scale-[1.03] hover:bg-gray-100 
                p-4 cursor-pointer">

  <h2 className="text-2xl relative md:text-3xl font-normal leading-tight">
    Deep learning for medical language

    <span
      className="absolute left-0 -bottom-1 h-[2px] bg-black 
                 w-0 group-hover:w-[72%] transition-all duration-700 ease-out"
    ></span>
  </h2>

  <p className="mt-3 text-sm font-light text-gray-900">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro dolore, animi aliquam quisquam eius molestias accusantium libero,
  </p>
</div>

     </div>

    </div>

    {/* RIGHT COLUMN — LARGE TEXT */}
    <div className="h-full flex mt-15 items-start">
      <p className="text-4xl md:text-6xl text-right font-light leading-tight">
        Exploring how augmentation strategies improve
        performance in clinical language models.
      </p>
    </div>

  </div>

</div>

  )
}

export default EventsGlimpse