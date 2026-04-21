import React from "react";
import ContactDescription from "../contactpage/contactcomponents/ContactDescription";
import img from "../../assets/IMG_2694.JPEG";

const ContactSection = () => {
  return (
    <>
      <section
        className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden"
        style={{ fontFamily: "Gordita, sans-serif" }}
      >
        {/* BACKGROUND IMAGE */}
        <img
          src={img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-[1400px] flex flex-col lg:flex-row gap-10 lg:gap-20 text-white">
          
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 flex flex-col ">
            <h1 className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.5rem] leading-tight font-medium">
              Let’s get on{" "}
              <span
                style={{
                  fontFamily: "XB Niloofar",
                  fontStyle: "italic",
                }}
              >
                The Stage.
              </span>
            </h1>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="w-full lg:w-1/2">
            <form className="space-y-6 text-sm">
              
              <div>
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Type name"
                  className="w-full bg-transparent border-b border-white/60 focus:outline-none py-2 placeholder-white/60"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Phone</label>
                <input
                  type="tel"
                  placeholder="Type phone number"
                  className="w-full bg-transparent border-b border-white/60 focus:outline-none py-2 placeholder-white/60"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="Type email address"
                  className="w-full bg-transparent border-b border-white/60 focus:outline-none py-2 placeholder-white/60"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">How can we help?</label>
                <textarea
                  placeholder="A brief description here"
                  rows={3}
                  className="w-full bg-transparent border-b border-white/60 focus:outline-none py-2 resize-none placeholder-white/60"
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-2 bg-white text-black px-6 py-4 text-xs tracking-wide hover:opacity-90 transition"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default ContactSection;