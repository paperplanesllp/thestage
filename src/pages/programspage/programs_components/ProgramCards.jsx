import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MembershipSection = () => {
  const [activePlan, setActivePlan] = useState(null);
  const navigate = useNavigate();

  const togglePlan = (plan) => {
    setActivePlan((prev) => (prev === plan ? null : plan));
  };

  return (
    <div
      className="w-full px-8 md:px-16 py-20"
      style={{ fontFamily: "Bricolage Grotesqu, sans-serif" }}
    >
      {/* ===== CARDS GRID ===== */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* BIG CARD → LEFT (2 columns in md+) */}
        <div
          onClick={() => togglePlan("group1")}
          className="md:col-span-2 h-[300px] md:h-[420px] overflow-hidden cursor-pointer relative"
        >
          <img
            src="../../../../src/assets/group-1.jpeg"
            className="w-full h-full object-cover"
            alt="Group One Membership"
          />
          <div className="absolute inset-0 bg-black/40 p-8 flex flex-row justify-between items-end">
            <h2 className="text-white text-xl font-light">
              Group One Membership
            </h2>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("/membership_the_stage/one");
              }}
              className="border border-white text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-black"
            >
              Join
            </button>
          </div>
        </div>

        {/* MOBILE / DEFAULT ONLY → GROUP ONE DETAILS BELOW GROUP ONE */}
        {activePlan === "group1" && (
          <div
            className="md:hidden mt-2"
            style={{ fontFamily: "Gordita, sans-serif" }}
          >
            <h2 className="text-2xl font-semibold mb-6">
              Group One — Membership Details
            </h2>

            <h3 className="text-xl mt-8 font-semibold mb-5">Benefits</h3>
            <ul className="list-disc pl-6 space-y-2 font-thin">
              <li>Access to all Stage events.</li>
              <li>Participation in discussions, debates, and dialogues.</li>
              <li>Opportunity to speak during sessions.</li>
              <li>May publish written work on the Stage website.</li>
              <li>Selected works published after editorial review.</li>
              <li>
                All recorded sessions involving Group One members are published
                as Stage video content on official media platforms.
              </li>
              <li>
                Full participation in special programs, extended dialogues, and
                invite-based sessions.
              </li>
              <li>
                Pre-session intellectual refinement: Group One members may
                submit their individual session or debate material in advance
                for a structured refinement process, where it is reviewed to
                strengthen clarity, coherence, and logical soundness before
                presentation.
              </li>
            </ul>
            <h3 className="text-xl font-semibold mt-6">Fee</h3>
            <p className="mt-2 text-xl font-thin">₹1,499 per month</p>
          </div>
        )}

        {/* RIGHT SIDE → stacked on mobile, 2 cols in md+ */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[420px]">
          {/* GROUP TWO */}
          <div
            onClick={() => togglePlan("group2")}
            className="overflow-hidden cursor-pointer relative h-[300px] md:h-[420px]"
          >
            <img
              src="../../../../src/assets/group-2.jpeg"
              className="w-full h-full object-cover"
              alt="Group Two"
            />
            <div className="absolute inset-0 bg-black/40 p-6 flex flex-row justify-between items-end">
              <h3 className="text-white text-xl font-light">Group Two Membership</h3>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/membership_the_stage/two");
                }}
                className="border border-white text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-black"
              >
                Join
              </button>
            </div>
          </div>

          {/* MOBILE / DEFAULT ONLY → GROUP TWO DETAILS BELOW GROUP TWO */}
          {activePlan === "group2" && (
            <div
              className="md:hidden mt-2"
              style={{ fontFamily: "Gordita, sans-serif" }}
            >
              <h2 className="text-2xl font-semibold mb-6">
                Group Two — Membership Details
              </h2>

              <h3 className="text-xl font-semibold mb-3">Benefits</h3>
              <ul className="list-disc pl-6 space-y-2 font-thin">
                <li>Access to regular Stage events.</li>
                <li>Participation in discussions and group dialogues.</li>
                <li>Opportunity to speak during sessions.</li>
                <li>Inclusion in the shared community space.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Fee</h3>
              <p className="mt-2 text-xl font-thin">₹1,999 per month</p>
            </div>
          )}

          {/* STUDENTS GROUP */}
          <div
            onClick={() => togglePlan("students")}
            className="overflow-hidden cursor-pointer relative h-[300px] md:h-[420px]"
          >
            <img
              src="../../../../src/assets/group-3.jpeg"
              className="w-full h-full object-cover"
              alt="Students Group"
            />
            <div className="absolute inset-0 bg-black/40 p-6 flex flex-row justify-between items-end">
              <h3 className="text-white text-xl font-light">
                Students Group Membership
              </h3>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/membership_the_stage/three");
                }}
                className="border border-white text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-black"
              >
                Join
              </button>
            </div>
          </div>

          {/* MOBILE / DEFAULT ONLY → STUDENTS DETAILS BELOW STUDENTS */}
          {activePlan === "students" && (
            <div
              className="md:hidden mt-2"
              style={{ fontFamily: "Gordita, sans-serif" }}
            >
              <h2 className="text-2xl font-semibold mb-6">
                Students Group — Membership Details
              </h2>

              <h3 className="text-xl font-semibold mb-3">Benefits</h3>
              <ul className="list-disc pl-6 space-y-2 font-thin">
                <li>Access to student-designated Stage events.</li>
                <li>Participation in discussions and panel sessions.</li>
                <li>Opportunity to speak during sessions.</li>
                <li>Serious intellectual learning environment.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Fee</h3>
              <p className="mt-2 text-xl font-thin">₹699 per month</p>
            </div>
          )}
        </div>
      </div>

      {/* ===== DESKTOP ONLY DETAILS SECTION ===== */}
      <div
        className="hidden md:block mt-10 max-w-5xl"
        style={{ fontFamily: "Gordita, sans-serif" }}
      >
        {activePlan === "group1" && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Group One — Membership Details
            </h2>

            <h3 className="text-xl mt-8 font-semibold mb-5">Benefits</h3>
            <ul className="list-disc pl-6 space-y-2 font-thin">
              <li>Access to all Stage events.</li>
              <li>Participation in discussions, debates, and dialogues.</li>
              <li>Opportunity to speak during sessions.</li>
              <li>May publish written work on the Stage website.</li>
              <li>Selected works published after editorial review.</li>
              <li>
                All recorded sessions involving Group One members are published
                as Stage video content on official media platforms.
              </li>
              <li>
                Full participation in special programs, extended dialogues, and
                invite-based sessions.
              </li>
              <li>
                Pre-session intellectual refinement: Group One members may
                submit their individual session or debate material in advance
                for a structured refinement process, where it is reviewed to
                strengthen clarity, coherence, and logical soundness before
                presentation.
              </li>
            </ul>
            <h3 className="text-xl font-semibold mt-6">Fee</h3>
            <p className="mt-2 text-xl font-thin">₹1,499 per month</p>
          </div>
        )}

        {activePlan === "group2" && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Group Two — Membership Details
            </h2>

            <h3 className="text-xl font-semibold mb-3">Benefits</h3>
            <ul className="list-disc pl-6 space-y-2 font-thin">
              <li>Access to regular Stage events.</li>
              <li>Participation in discussions and group dialogues.</li>
              <li>Opportunity to speak during sessions.</li>
              <li>Inclusion in the shared community space.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Fee</h3>
            <p className="mt-2 text-xl font-thin">₹1,999 per month</p>
          </div>
        )}

        {activePlan === "students" && (
          <div className=" pt-12">
            <h2 className="text-2xl font-semibold mb-6">
              Students Group — Membership Details
            </h2>

            <h3 className="text-xl font-semibold mb-3">Benefits</h3>
            <ul className="list-disc pl-6 space-y-2 font-thin">
              <li>Access to student-designated Stage events.</li>
              <li>Participation in discussions and panel sessions.</li>
              <li>Opportunity to speak during sessions.</li>
              <li>Serious intellectual learning environment.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Fee</h3>
            <p className="mt-2 text-xl font-thin">₹699 per month</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MembershipSection;