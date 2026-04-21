import img from "../assets/footer_img.JPEG";

const socialLinks = [
  { label: "f", link: "https://www.facebook.com/share/1DsuXZCkQS/" },
  { label: "in", link: "https://linkedin.com/in/yourprofile" },
  { label: "ig", link: "https://www.instagram.com/thestageoff?igsh=MWYzNzBqc3pndXd0bQ==" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden h-[317px] px-4 sm:px-6 md:px-8 lg:px-10 text-gray-300 flex items-center">
      
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-black"
        
      ></div>

      {/* BLACK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 gap-5 text-center">
          
          {/* LOGO */}
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white logo-font-footer">
            The Stage
          </div>

          {/* TAGLINE */}
          <div
            className="text-sm sm:text-xl md:text-2xl lg:text-2xl leading-tight"
            style={{ fontFamily: "Gordita, sans-serif" }}
          >
            <p className="font-thin">
              For the minds that don't settle for the surface
            </p>
          </div>

          {/* DIVIDER */}
          <div className="h-px w-full bg-gray-600"></div>

          {/* NAV */}
          <div
            className="mx-auto flex flex-wrap items-center justify-center gap-y-3 text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.14em]"
            style={{ fontFamily: "Gordita, sans-serif" }}
          >
            <a href="/about_the_stage" className="w-[92px] text-center hover:text-white transition">
              About
            </a>
            <a href="/the_stage_programs" className="w-[92px] text-center hover:text-white transition">
              Join
            </a>
            <a href="/store" className="w-[92px] text-center hover:text-white transition">
              Store
            </a>
            <a href="/archives_the_stage" className="w-[92px] text-center hover:text-white transition">
              Archives
            </a>
            <a href="/contact_us" className="w-[92px] text-center hover:text-white transition">
              Contact
            </a>
          </div>

          {/* SOCIAL */}
       <div className="flex items-center justify-center gap-3">
  {socialLinks.map((item, i) => (
    <a
      key={i}
      href={item.link}
      target="_blank"   // remove this if you want same tab
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-500 text-xs transition hover:bg-white hover:text-black"
    >
      {item.label}
    </a>
  ))}
</div>

          {/* LEGAL */}
          <div
            className="text-[11px] sm:text-xs text-gray-400 space-y-2"
            style={{ fontFamily: "Gordita, sans-serif" }}
          >
            <div className="flex flex-wrap justify-center gap-4">
              <span className="cursor-pointer hover:text-white transition">
                Terms & Conditions
              </span>
              <span className="cursor-pointer hover:text-white transition">
                Privacy Policy
              </span>
            </div>

            <p>© 2020 Flaunter, Ltd. All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;