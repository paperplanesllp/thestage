import React from 'react'

const ProgramConclusion = () => {
  return (
    <div
      className="w-full mt-10 font-light flex flex-col items-center px-4 sm:px-6"
      style={{ fontFamily: "Gordita, sans-serif" }}
    >
      <h1 className="text-xl sm:text-2xl font-normal text-center">
        Common Benefits for All Members
      </h1>

      <div className="w-full max-w-7xl mt-8 sm:mt-10 text-[15px] sm:text-[16px] lg:text-[17px] leading-tight">
        <p>The following benefits apply to every member, regardless of group:</p>

        <p className="mt-5" style={{ fontFamily: "'Scope One', serif" }}>
          <span className="font-semibold">1.</span> Participation Across Multiple
          Formats Opportunity to participate in different forms of engagement
          during regular events, including individual presentations, debates,
          and group or panel discussions, based on the format of each session.
        </p>

        <p className="mt-5" style={{ fontFamily: "'Scope One', serif" }}>
          <span className="font-semibold">2.</span> Shared Intellectual
          Environment Interaction with members across different groups in a
          shared intellectual environment.
        </p>

        <p className="mt-5" style={{ fontFamily: "'Scope One', serif" }}>
          <span className="font-semibold">3.</span> Curated Community & Quality
          of Engagement All members are admitted through a careful screening
          process that values seriousness, thoughtfulness, and meaningful
          engagement. This ensures that participation takes place among
          individuals who approach conversations with intent, relevance, and
          respect for ideas. As a result, members can engage in discussions
          knowing they are sharing space with people who value depth and
          genuine intellectual exchange.
        </p>
      </div>

      <div className="border-b h-[1px] mb-2 mt-10 w-[90%] border-gray-800" />

      <div className="flex flex-col w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-black">
        <h2 className="text-xl sm:text-2xl text-center font-normal mb-6 sm:mb-8">
          Important Notes
        </h2>

        <ul className="list-disc pl-5 sm:pl-6 w-full mb-10 sm:mb-12 text-[15px] sm:text-[16px] lg:text-lg leading-tight space-y-3">
          <li className="pr-0 sm:pr-8 lg:pr-15" style={{ fontFamily: "'Scope One', serif" }}>
            Membership is monthly and based on access, not attendance.
          </li>
          <li style={{ fontFamily: "'Scope One', serif" }}>
            Members may attend events according to their availability.
          </li>
          <li style={{ fontFamily: "'Scope One', serif" }}>
            Membership does not include organisational or decision-making authority.
          </li>
          <li style={{ fontFamily: "'Scope One', serif" }}>
            All publication, media, and refinement processes follow Stage’s editorial
            and intellectual standards.
          </li>
        </ul>

        <div className="border-t border-gray-400 mb-8 sm:mb-10"></div>

       <h2 className="text-xl sm:text-2xl text-center font-normal mb-4">
  Closing Principle
</h2>
<div className="w-full">
<p
  className="italic text-[15px] sm:text-[16px] lg:text-lg leading-relaxed  md:text-left"
  style={{ fontFamily: "'Scope One', serif" }}
>
  The Stage exists to make conversations worth having.
  <br />
  Membership ensures that time is spent in a space shaped by seriousness,
  relevance, <br /> and thoughtful engagement.
</p>
</div>


        <div className="border-t border-gray-400 mt-10 sm:mt-12"></div>
      </div>
    </div>
  )
}

export default ProgramConclusion