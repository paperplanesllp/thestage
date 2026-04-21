import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";
import heroimg from "../../src/assets/hero_bg_image.PNG";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const navigate = useNavigate();

  const closeMenu = () => {
    setOpenMenu(false);
    setOpenSection(null);
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      {/* HEADER */}
      <header className="w-full fixed top-0 z-50 bg-black text-white">
        <div className="relative mx-auto h-16 max-w-[1920px] px-4 md:px-6 lg:px-10 flex items-center justify-between">
          {/* MOBILE MENU ICON */}
          <div className="flex items-center xl:hidden">
            <FiMenu
              className="text-2xl cursor-pointer hover:opacity-80"
              onClick={() => setOpenMenu(true)}
            />
          </div>

          {/* DESKTOP LEFT NAV */}
          <nav
            className="hidden xl:flex items-center gap-6 text-xl tracking-wide"
            style={{ fontFamily: "Josefin Slab, serif" }}
          >
            <FiMenu
              className="text-2xl cursor-pointer hover:opacity-80"
              onClick={() => setOpenMenu(true)}
            />

            <Link to="/about_the_stage" className="hover:opacity-80">
              About
            </Link>
            <Link to="/the_stage_events" className="hover:opacity-80">
              Events
            </Link>

            <Link
              to="/the_stage_programs"
              className="bg-white text-black font-extrabold text-2xl py-3 px-5 hover:opacity-80"
            >
              Join
            </Link>

            <Link to="/the_stage_magazine" className="hover:opacity-80">
              Magazine
            </Link>
            <Link to="/archives_the_stage" className="hover:opacity-80">
              Archives
            </Link>
          </nav>

          {/* CENTER LOGO */}
          <Link
            to="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-2xl md:text-3xl xl:text-4xl cursor-pointer whitespace-nowrap logo-font"
            onClick={() => navigate("/")}
          >
            The Stage
          </Link>

          {/* DESKTOP RIGHT NAV */}
          <div
            className="hidden xl:flex items-center gap-6 text-xl"
            style={{ fontFamily: "Josefin Slab, serif" }}
          >
            <Link to="/store" className="hover:opacity-80">
              Store
            </Link>
            <Link to="/contact_us" className="hover:opacity-80">
              Contact
            </Link>
          </div>

          {/* MOBILE EMPTY RIGHT */}
          <div className="w-6 xl:hidden" />
        </div>
      </header>

      {/* DESKTOP / MD / LG / XL DROPDOWN MENU */}
      {openMenu && (
        <>
          {/* DESKTOP VIEW */}
          <div className="hidden xl:block fixed top-16 left-0 w-screen h-[55vh] z-[999] bg-[#6d0707] text-white shadow-lg transition-all duration-300">
            {/* CLOSE BUTTON */}
            <div className="absolute top-4 left-6 text-3xl cursor-pointer">
              <FiX onClick={closeMenu} />
            </div>

            {/* MENU CONTENT */}
            <div className="max-w-7xl mx-auto pt-16 px-10 grid grid-cols-3 gap-10 h-full">
              {/* LEFT — SECTIONS */}
              <div>
                <h2 className="text-white font-bold mb-10 text-[16px] uppercase">
                  Sections
                </h2>

                <div
                  className="grid grid-cols-2 gap-y-8 text-[18px]"
                  style={{ fontFamily: "Josefin Slab, serif" }}
                >
                  <Link to="/ideas" className="hover:underline">
                    Philosophy
                  </Link>
                  <Link to="/books" className="hover:underline">
                    Theology
                  </Link>
                  <Link to="/technology" className="hover:underline">
                    Science
                  </Link>
                  <Link to="/politics" className="hover:underline">
                    History
                  </Link>
                  <Link to="/economy" className="hover:underline">
                    Literature
                  </Link>
                  <Link to="/art" className="hover:underline">
                    Art
                  </Link>
                  <Link to="/science" className="hover:underline">
                    Health
                  </Link>
                  <Link to="/culture" className="hover:underline">
                    Culture
                  </Link>
                  <Link to="/global" className="hover:underline">
                    Economy
                  </Link>
                  <Link to="/politics" className="hover:underline">
                    Politics
                  </Link>
                </div>
              </div>

              {/* EMPTY CENTER */}
              <div></div>

              {/* RIGHT — IMAGE */}
              <div className="flex flex-col justify-start items-center">
                <div className="relative w-full max-w-[440px] h-[275px] overflow-hidden">
                  <img
                    src={heroimg}
                    alt="Print Edition"
                    className="w-full h-full object-cover object-bottom"
                  />

                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <p
                      className="text-white text-[32px]"
                      style={{
                        fontFamily: "XB Niloofar",
                        fontStyle: "italic",
                      }}
                    >
                      The Stage Magazine
                    </p>
                  </div>
                </div>

                <p
                  className="text-[28px] tracking-tight text-white text-center uppercase mt-3"
                  style={{ fontFamily: "Josefin Slab, serif" }}
                >
                  Coming Soon
                </p>
              </div>
            </div>
          </div>

          {/* MOBILE / TABLET VIEW */}
          <div className="xl:hidden fixed top-0 left-0 w-screen h-screen z-[999] bg-[#6d0707] text-white overflow-y-auto transition-all duration-300">
            {/* TOP BAR */}
            <div className="flex items-center justify-between px-4 py-5 border-b border-white/10">
              <div
                className="text-2xl cursor-pointer logo-font"
                onClick={() => {
                  navigate("/");
                  closeMenu();
                }}
              >
                The Stage
              </div>

              <FiX
                onClick={closeMenu}
                className="text-3xl cursor-pointer hover:opacity-80"
              />
            </div>

            <div className="px-4 py-6">
              {/* PAGES */}
              <div className="border-b border-white/20 py-4">
                <button
                  onClick={() => toggleSection("pages")}
                  className="w-full flex items-center justify-between text-left"
                  style={{ fontFamily: "Josefin Slab, serif" }}
                >
                  <span className="text-lg font-bold uppercase tracking-wide">
                    Pages
                  </span>
                  <span className="text-3xl leading-none">
                    {openSection === "pages" ? "-" : "+"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openSection === "pages" ? "max-h-96 mt-4" : "max-h-0"
                  }`}
                >
                  <div
                    className="flex flex-col gap-4 text-lg"
                    style={{ fontFamily: "Josefin Slab, serif" }}
                  >
                    <Link to="/about_the_stage" onClick={closeMenu}>
                      About
                    </Link>
                    <Link to="/the_stage_events" onClick={closeMenu}>
                      Events
                    </Link>
                    <Link to="/the_stage_programs" onClick={closeMenu}>
                      Join
                    </Link>
                    <Link to="/the_stage_magazine" onClick={closeMenu}>
                      Magazine
                    </Link>
                    <Link to="/archives_the_stage" onClick={closeMenu}>
                      Archives
                    </Link>
                    <Link to="/store" onClick={closeMenu}>
                      Store
                    </Link>
                    <Link to="/contact_us" onClick={closeMenu}>
                      Contact
                    </Link>
                  </div>
                </div>
              </div>

              {/* SECTIONS */}
              <div className="border-b border-white/20 py-4">
                <button
                  onClick={() => toggleSection("sections")}
                  className="w-full flex items-center justify-between text-left"
                  style={{ fontFamily: "Josefin Slab, serif" }}
                >
                  <span className="text-lg font-bold uppercase tracking-wide">
                    Sections
                  </span>
                  <span className="text-3xl leading-none">
                    {openSection === "sections" ? "-" : "+"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openSection === "sections"
                      ? "max-h-[500px] mt-4"
                      : "max-h-0"
                  }`}
                >
                  <div
                    className="grid grid-cols-2 gap-y-4 text-base"
                    style={{ fontFamily: "Josefin Slab, serif" }}
                  >
                    <Link to="/ideas" onClick={closeMenu}>
                      Philosophy
                    </Link>
                    <Link to="/books" onClick={closeMenu}>
                      Theology
                    </Link>
                    <Link to="/technology" onClick={closeMenu}>
                      Science
                    </Link>
                    <Link to="/politics" onClick={closeMenu}>
                      History
                    </Link>
                    <Link to="/economy" onClick={closeMenu}>
                      Literature
                    </Link>
                    <Link to="/art" onClick={closeMenu}>
                      Art
                    </Link>
                    <Link to="/science" onClick={closeMenu}>
                      Health
                    </Link>
                    <Link to="/culture" onClick={closeMenu}>
                      Culture
                    </Link>
                    <Link to="/global" onClick={closeMenu}>
                      Economy
                    </Link>
                    <Link to="/politics" onClick={closeMenu}>
                      Politics
                    </Link>
                  </div>
                </div>
              </div>

              {/* IMAGE */}
              <div className="pt-6">
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={heroimg}
                    alt="Print Edition"
                    className="w-full h-full object-cover object-bottom"
                  />

                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <p
                      className="text-white text-[24px] text-center"
                      style={{
                        fontFamily: "XB Niloofar",
                        fontStyle: "italic",
                      }}
                    >
                      The Stage Magazine
                    </p>
                  </div>
                </div>

                <p
                  className="text-[20px] tracking-tight text-white text-center uppercase mt-4 pb-10"
                  style={{ fontFamily: "Josefin Slab, serif" }}
                >
                  Coming Soon
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;