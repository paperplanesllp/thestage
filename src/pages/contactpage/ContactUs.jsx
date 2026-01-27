import React from "react";
import handshake from "../../assets/mic_image.png"; // replace with your illustration
import ContactDescription from "../contactpage/contactcomponents/ContactDescription"
const ContactSection = () => {
  return (
    <>
      <section
        className="w-full min-h-screen px-20 pt-30 flex gap-24 bg-white"
        style={{ fontFamily: "Gordita, sans-serif" }}
      >
        {/* LEFT SIDE */}
        <div className="w-1/2 flex flex-col justify-between">
          <div>
            <h1
              className="text-[3.5rem]  leading-tight mb-6"
              
            >
              Let’s get on
              <br />
              <span style={{ fontFamily: "XB Niloofar", fontStyle: "italic" }}>The Stage.</span>
            </h1>
  
          
          </div>
  
          {/* ILLUSTRATION */}
          {/* <div className="mt-7">
            <img
              src={handshake}
              alt="Handshake illustration"
              className="w-[200px]  ms-15 h-[85%]"
            />
          </div> */}
        </div>
  
        {/* RIGHT SIDE FORM */}
        <div className="w-1/2">
          <form className="space-y-8 text-sm">
            {/* NAME */}
            <div>
              <label className="block mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Type name"
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2"
              />
            </div>
  
            {/* COMPANY */}
            <div>
              <label className="block mb-1">
                Company <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Type company name"
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2"
              />
            </div>
  
            {/* PHONE */}
            <div>
              <label className="block mb-1">Phone</label>
              <input
                type="tel"
                placeholder="Type phone number"
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2"
              />
            </div>
  
            {/* EMAIL */}
            <div>
              <label className="block mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Type email address"
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2"
              />
            </div>
  
            {/* MESSAGE */}
            <div>
              <label className="block mb-1">
                How can we help? <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="A brief description here"
                rows={3}
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 resize-none"
              />
            </div>
  
            {/* SUBMIT */}
            <button
              type="submit"
              className="mt-6 bg-black text-white px-6 py-2 rounded-full text-xs tracking-wide hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
  
        
      </section>

      <ContactDescription/>
    </>

    
  );
};

export default ContactSection;
