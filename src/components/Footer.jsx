import img from '../assets/footer_img.JPEG'

const Footer = () => {
  return (
    <footer className="relative text-gray-300 px-6 py-10 overflow-hidden">

      {/* ===== BACKGROUND IMAGE ===== */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[50%_60%]"
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      {/* ===== BLACK OVERLAY (ONLY ON IMAGE) ===== */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* ===== FOOTER CONTENT ===== */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 gap-8 text-center">

        {/* LOGO */}
        <div className="text-5xl font-normal tracking-wide text-white"style={{
            fontFamily: "XB Niloofar",
            fontStyle: "italic",
          }}>
          The Stage
        </div>

        {/* TOP NAV */}
        <div className="grid grid-flow-col justify-center gap-6 text-2xl uppercase tracking-widest" style={{ fontFamily: "Glass Antiqua, cursive" }}>
          <p>For the minds that don't settle for the surface</p>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-gray-600 w-full"></div>

        {/* MAIN NAV */}
        <div className="grid grid-flow-col justify-center gap-6 text-xs uppercase tracking-widest"style={{ fontFamily: "Gordita, sans-serif" }}>
          <a href="/about_the_stage">About</a>
          <a href="/the_stage_programs">Join</a>
          <a href="/store">Store</a>
          <a href="/archives_the_stage">Archives</a>
          <a href="/contact_us">Contact</a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="grid grid-flow-col justify-center gap-4">
          {["f", "t", "p", "in", "ig"].map((icon, i) => (
            <div
              key={i}
              className="w-9 h-9 border border-gray-500 rounded-full flex items-center justify-center text-sm hover:bg-white hover:text-black transition"
            >
              {icon}
            </div>
          ))}
        </div>

        {/* LEGAL */}
        <div className="text-xs text-gray-400 space-y-2" style={{ fontFamily: "Gordita, sans-serif" }}>
          <div className="grid grid-flow-col justify-center gap-4">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
          <p>
            © 2020 Flaunter, Ltd. All rights reserved. Site credit.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
