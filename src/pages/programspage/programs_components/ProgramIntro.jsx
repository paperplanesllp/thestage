import React from 'react'

const ProgramIntro = () => {
  return (
    <div
      className="w-full flex pt-12 sm:pt-16 md:pt-20 font-light flex-col"
      style={{ fontFamily: "Gordita, sans-serif" }}
    >
      <h1 className="md:text-3xl mt-6 sm:mt-8 md:mt-10 w-full px-4 sm:px-6 md:px-15 text-center text-[1.4rem] sm:text-3xl font-medium  mb-10 sm:mb-12 md:mb-16 text-neutral-900">
        THE STAGE COMMUNITY MEMBERSHIP
        
        DETAILS
      </h1>

      <div className="w-full flex flex-col items-end">
        <h2 className="text-[1.4rem] sm:text-[1.6rem] md:text-2xl font-normal px-4 sm:px-6 md:px-12 me-0 md:me-108 mt-6 sm:mt-10 md:mt-20 text-center md:text-left w-full md:w-auto">
          Membership Structure
        </h2>

        <p
          className="mt-6 sm:mt-8 md:mt-15 me-0 md:me-25 px-4 sm:px-6 md:px-8 max-w-2xl text-[15px] sm:text-[16px] md:text-[17px] leading-tight md:leading-tight text-justify md:text-left tracking-tight p-"
          style={{ fontFamily: "'Scope One', serif" }}
        >
          <span className="font-bold">The</span> Stage membership is organised into three groups to support different modes of participation
          while preserving a shared standard of seriousness, relevance, and thoughtful engagement.
          Membership groups are not hierarchical.
          They exist only to structure access, participation, and contribution within the community.
        </p>
      </div>
    </div>
  )
}

export default ProgramIntro