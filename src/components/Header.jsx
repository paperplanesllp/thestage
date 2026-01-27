import React from "react";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full z-50 bg-black text-white fixed top-0">
      <div className="relative max-w-8xl mx-auto overflow-hidden px-10 h-16 flex items-center justify-between">

        {/* LEFT NAV */}
        <nav
          className="hidden md:flex items-center gap-8 text-xl overflow-hidden tracking-wide"
          style={{ fontFamily: "Josefin Slab, serif" }}
        >
          <a href="/about_the_stage" className="hover:opacity-80">About</a>
          <a href="/the_stage_events" className="hover:opacity-80">Events</a>
          <a href="/the_stage_programs" className=" bg-white text-black font-extrabold text-2xl py-5 px-5 hover:opacity-80">Join</a>
          <a href="/the_stage_magazine" className="hover:opacity-80">Magazine</a>
          <a href="/archives_the_stage" className="hover:opacity-80">Archives</a>
        </nav>

        {/* CENTER LOGO */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                     text-xl md:text-4xl cursor-pointer"
          onClick={() => navigate("/")}
          style={{ fontFamily: "XB Niloofar", fontStyle: "italic" }}
        >
          The Stage
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6 text-xl" style={{ fontFamily: "Josefin Slab, serif" }} >
          <a href="/store" className="hover:opacity-80">Store</a>
          <a href="/contact_us" className="hover:opacity-80">Contact</a>

         
        </div>
      </div>
    </header>
  );
};

export default Header;
