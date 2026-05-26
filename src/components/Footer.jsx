import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    label: "Facebook",
    icon: faFacebookF,
    link: "https://www.facebook.com/share/1DsuXZCkQS/",
  },
  {
    label: "LinkedIn",
    icon: faLinkedinIn,
    link: "https://linkedin.com/in/yourprofile",
  },
  {
    label: "Instagram",
    icon: faInstagram,
    link: "https://www.instagram.com/thestageoff?igsh=MWYzNzBqc3pndXd0bQ==",
  },
];

const footerLinks = [
  { label: "About", href: "/about_the_stage" },
  { label: "Join", href: "/the_stage_programs" },
  { label: "Store", href: "/store" },
  { label: "Archives", href: "/archives_the_stage" },
  { label: "Contact", href: "/contact_us" },
];

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden border-t border-black/10 bg-[#f4efe6] text-black"
      style={{ fontFamily: "Gordita, sans-serif" }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(90deg,rgba(23,20,17,0.08)_1px,transparent_1px),linear-gradient(rgba(23,20,17,0.06)_1px,transparent_1px)] [background-size:74px_74px]" />
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-black/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 md:px-12 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <h2 className="logo-font-footer max-w-2xl text-[4rem] leading-[0.9] text-black sm:text-[6rem] md:text-[7.5rem]">
            The Stage
          </h2>

          <div className="relative overflow-hidden border border-black/10 bg-[#fbfaf7]/85 p-6 shadow-[0_24px_70px_rgba(23,20,17,0.07)] backdrop-blur-sm">
            <div className="absolute right-0 top-0 h-full w-1 bg-[#8C3917]" />
            <p
              className="max-w-2xl text-[17px] leading-8 text-black/72"
              style={{ fontFamily: "'Scope One', serif" }}
            >
              "Find us where thoughts continue beyond the page."
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-black/15 bg-[#f4efe6] text-[15px] text-black/70 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)] transition duration-300 hover:-translate-y-0.5 hover:border-[#8C3917] hover:bg-[#171411] hover:text-white"
                >
                  <FontAwesomeIcon icon={item.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-y border-black/10 py-5">
          <nav className="flex flex-wrap items-center justify-center gap-x-9 gap-y-3 text-[11px] uppercase tracking-[0.32em] text-black/62">
            {footerLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative transition duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[#8C3917] after:transition-all after:duration-300 hover:text-[#8C3917] hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-[12px] text-black/48 sm:flex-row sm:items-center sm:justify-between">
          <p> ©  2026 The Stage. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <span className="cursor-pointer transition duration-300 hover:text-black">
              Terms & Conditions
            </span>
            <span className="cursor-pointer transition duration-300 hover:text-black">
              Privacy Policy 
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
