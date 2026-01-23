import React from 'react'

const ProgramConclusion = () => {
  return (
    <div className='w-full mt-10 font-light flex flex-col items-center'style={{ fontFamily: "Gordita, sans-serif" }}>

        <h1 className='text-2xl font-normal text-center'>Common Benefits for All Members</h1>
        <div className='max-w-7xl mt-10  text-[17px] leading-tight '>
            <p>The following benefits apply to every member, regardless of group:</p>
            <p className='mt-5'><span className='font-semibold'>1.</span> Participation Across Multiple Formats
Opportunity to participate in different forms of engagement during regular events,
including individual presentations, debates, and group or panel discussions, based on
the format of each session.</p>

<p className='mt-5'><span className='font-semibold'>2.</span> Shared Intellectual Environment
Interaction with members across different groups in a shared intellectual environment.</p>

<p className='mt-5'><span className='font-semibold'>3.</span> Curated Community & Quality of Engagement
All members are admitted through a careful screening process that values seriousness,
thoughtfulness, and meaningful engagement. This ensures that participation takes place
among individuals who approach conversations with intent, relevance, and respect for
ideas. As a result, members can engage in discussions knowing they are sharing space
with people who value depth and genuine intellectual exchange.</p>
        </div>
        <div className='border-b-1 h-1 mb-2 mt-10 w-[90%] border-gray-800'/>



<div className=" flex flex-col w-full px-37  py-20 text-black">

 
  


  {/* Important Notes */}
  <h2 className="text-2xl text-center font-normal mb-8">
    Important Notes
  </h2>

  <ul className="list-disc  w-full mb-12 text-lg leading-relaxed space-y-1">
    <li className='pr-15'>Membership is monthly and based on access, not attendance.</li>
    <li>Members may attend events according to their availability.</li>
    <li>Membership does not include organisational or decision-making authority.</li>
    <li>
      All publication, media, and refinement processes follow Stage’s editorial
      and intellectual standards.
    </li>
  </ul>

  {/* Divider */}
  <div className="border-t border-gray-400 mb-10"></div>

  {/* Closing Principle */}
  <h2 className="text-2xl text-center font-normal mb-4">
    Closing Principle
  </h2>

  <p className="italic text-lg leading-relaxed max-w-3xl">
    Stage exists to make conversations worth having.
    <br />
    Membership ensures that time is spent in a space shaped by seriousness,
    relevance, and thoughtful engagement.
  </p>

  {/* Divider */}
  <div className="border-t border-gray-400 mt-12"></div>
</div>

    </div>
  )
}

export default ProgramConclusion