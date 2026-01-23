import { useState } from "react";

const NatureSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===== MAIN SECTION ===== */}
      <section
        className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center bg-white"
        style={{ fontFamily: "Gordita, sans-serif" }}
      >
        {/* LEFT : IMAGE COMPOSITION */}
        <div className="relative w-full h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1502082553048-f009c37129b9"
            alt="Tree background"
            className="absolute top-0 left-0 w-72 opacity-20"
          />

          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
            alt="Forest grove"
            className="absolute top-16 left-24 w-[420px] shadow-lg"
          />

          <img
            src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6"
            alt="Botanical plant"
            className="absolute bottom-0 right-10 w-40 opacity-80"
          />
        </div>

        {/* RIGHT : TEXT CONTENT */}
        <div className="max-w-md">
          <p className="text-xs tracking-widest uppercase text-gray-500 mb-4">
            Sycamore Grove + Dryer
          </p>

          <h2 className="text-3xl font-semibold mb-6">
            The Monologue
          </h2>

          <p className="text-sm leading-relaxed text-gray-600 mb-4">
            The Western Sycamore is a fast-growing native that creates a grove for
            humans and birds. We nurture them with rainwater when possible and
            allow them to weather the dryer season naturally.
          </p>

          <p className="text-sm leading-relaxed text-gray-600">
            The canopy will be high, filtering light. Below, pollinator and bird
            friendly species will tolerate irregular rainfall while providing
            structure and habitat.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="bg-white border-black mt-5 border-2 hover:border-transparent
                       text-black hover:bg-[#8C3917] hover:text-white
                       px-6 py-2 rounded-full text-lg"
          >
            Attend
          </button>
        </div>
      </section>

      {/* ===== MODAL ===== */}
      {open && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    
    {/* Modal */}
    <div
      className="w-full max-w-2xl px-10 py-6 h-[80%] relative"
      style={{ backgroundColor: "#F7F3ED", fontFamily: "Gordita, sans-serif" }}
    >
      {/* Close */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-4 right-6 text-2xl text-gray-400 hover:text-black"
      >
        ×
      </button>

      {/* Heading */}
      <h2
        className="text-4xl text-center mb-3"
        style={{ fontFamily: "XB Niloofar", fontStyle: "italic" }}
      >
        The Stage
      </h2>

        <h2 className="text-4xl">Attend Form</h2>

      {/* FORM */}
      <form className="space-y-5 mt-8">
        
        {/* Name */}
        <div>
          <label className="text-sm text-gray-600 block mb-2">
            Name <span className="text-xs">(required)</span>
          </label>

          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="bg-transparent border-b border-gray-400 focus:outline-none py-2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-transparent border-b border-gray-400 focus:outline-none py-2"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-600 block mb-2">
            Email <span className="text-xs">(required)</span>
          </label>
          <input
            type="email"
            className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm text-gray-600 block mb-2">
            Phone <span className="text-xs">(required)</span>
          </label>
          <input
            type="tel"
            className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2"
          />
        </div>

        {/* Place */}
        <div>
          <label className="text-sm text-gray-600 block mb-2">
            Place <span className="text-xs">(required)</span>
          </label>
          <input
            type="text"
            className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2"
          />
        </div>

        {/* Message */}
        
        {/* Submit */}
        <div className="flex justify-center pt-6">
          <button
            type="button"
            className="px-10 py-3 text-white tracking-widest"
            style={{ backgroundColor: "#8C5A2B" }}
          >
            SUBMIT & PAY
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </>
  );
};

export default NatureSection;
