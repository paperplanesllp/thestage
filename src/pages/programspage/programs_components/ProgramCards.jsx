import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MembershipSection = () => {
  const [activePlan, setActivePlan] = useState(null);

  const navigate=useNavigate()

  return (
    <div className="w-full px-8 md:px-16 py-20" style={{ fontFamily: "Bricolage Grotesqu, sans-serif" }}>

      {/* ===== CARDS GRID ===== */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

  {/* BIG CARD → LEFT (2 columns) */}
  <div
    onClick={() => setActivePlan("group1")}
    className="md:col-span-2 h-[420px]  overflow-hidden cursor-pointer relative"
  >
    <img
      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40 p-8 flex flex-row justify-between items-end">
      <h2 className="text-white text-3xl font-light">
        Group One Membership
      </h2>

      <button
      onClick={(e)=>{
        e.stopPropagation();
        navigate('/membership_the_stage/one')}}
      className="border border-white text-white px-6 py-2 rounded-full
                 transition-all duration-300
                 hover:bg-white hover:text-black"
    >
      Join
    </button>
    </div>
  </div>

  {/* RIGHT SIDE → 2 equal columns */}
  <div className="md:col-span-2 grid grid-cols-2 gap-6 h-[420px]">

    <div
      onClick={() => setActivePlan("group2")}
      className=" overflow-hidden cursor-pointer relative"
    >
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 p-6 flex flex-row justify-between items-end">
        <h3 className="text-white text-xl font-light">
          Group Two
        </h3>

        <button
         onClick={(e)=>{
        e.stopPropagation();
        navigate('/membership_the_stage/two')}}
      className="border border-white text-white px-6 py-2 rounded-full
                 transition-all duration-300
                 hover:bg-white hover:text-black"
    >
      Join
    </button>
      </div>
    </div>

    <div
      onClick={() => setActivePlan("students")}
      className=" overflow-hidden cursor-pointer relative"
    >
      <img
        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 p-6 flex flex-row justify-between items-end">
        <h3 className="text-white text-xl font-light">
          Students Group
        </h3>

         <button
          onClick={(e)=>{
        e.stopPropagation();
        navigate('/membership_the_stage/three')}}
      className="border border-white text-white px-6 py-2 rounded-full
                 transition-all duration-300
                 hover:bg-white hover:text-black"
    >
      Join
    </button>
      </div>
    </div>

  </div>
</div>


      {/* ===== CONDITIONAL DETAILS SECTION ===== */}
      <div className="mt-10 max-w-5xl">

        {/* -------- GROUP ONE -------- */}
        {activePlan === "group1" && (
          <div className=" ">
            <h2 className="text-2xl font-semibold mb-6">
              Group One — Membership Details
            </h2>

            <h3 className="text-xl mt-8 font-semibold mb-5">Benefits</h3>
            <ul className="list-disc text-lg pl-6 space-y-2">
              <li>Access to all Stage events.</li>
              <li>Participation in discussions, debates, and dialogues.</li>
              <li>Opportunity to speak during sessions.</li>
              <li>May publish written work on the Stage website.</li>
              <li>Selected works published after editorial review.</li>
              <li>All recorded sessions involving Group One members are published as Stage video
content on official media platforms.</li>
<li>Full participation in special programs, extended dialogues, and invite-based sessions.</li>
<li> Pre-session intellectual refinement: Group One members may submit their individual
session or debate material in advance for a structured refinement process, where it is
reviewed to strengthen clarity, coherence, and logical soundness before presentation.</li>
            </ul>
             <h3 className="text-xl font-semibold mt-6">Fee</h3>
            <p className="mt-2 text-xl font-medium">₹1,499 per month</p>
          </div>
        )}

        {/* -------- GROUP TWO -------- */}
        {activePlan === "group2" && (
          <div className="">
            <h2 className="text-2xl font-semibold mb-6">
              Group Two — Membership Details
            </h2>

            <h3 className="text-xl font-semibold mb-3">Benefits</h3>
            <ul className="list-disc text-lg pl-6 space-y-2">
              <li>Access to regular Stage events.</li>
              <li>Participation in discussions and group dialogues.</li>
              <li>Opportunity to speak during sessions.</li>
              <li>Inclusion in the shared community space.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Fee</h3>
            <p className="mt-2 text-xl font-medium">₹999 per month</p>
          </div>
        )}

        {/* -------- STUDENTS GROUP -------- */}
        {activePlan === "students" && (
          <div className="border-t pt-12">
            <h2 className="text-5xl font-semibold mb-6">
              Students Group — Membership Details
            </h2>

            <h3 className="text-3xl font-semibold mb-3">Benefits</h3>
            <ul className="list-disc text-2xl pl-6 space-y-2">
              <li>Access to student-designated Stage events.</li>
              <li>Participation in discussions and panel sessions.</li>
              <li>Opportunity to speak during sessions.</li>
              <li>Serious intellectual learning environment.</li>
            </ul>

            <h3 className="text-3xl font-semibold mt-6">Fee</h3>
            <p className="mt-2 text-3xl font-medium">₹699 per month</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default MembershipSection;
