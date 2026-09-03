import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { validateEmailJsConfig } from "../../utils/emailjs";
import img from "../../assets/IMG_2694.JPEG";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const templateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
    const config = validateEmailJsConfig(templateId, "contact form");

    if (!config.isValid) {
      setStatus({ type: "error", message: config.errorMessage });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    const templateParams = {
      ...values,
      submission_type: "Contact form",
      from_name: values.name,
      reply_to: values.email,
      message: [
        "NEW WEBSITE SUBMISSION",
        "",
        "## CONTACT FORM",
        `Name: ${values.name}`,
        `Phone: ${values.phone}`,
        `Email: ${values.email}`,
        `How can we help?: ${values.helpDescription}`,
      ].join("\n"),
    };

    try {
      setIsSubmitting(true);
      setStatus({ type: "", message: "" });
      emailjs.init({ publicKey: config.publicKey });
      await emailjs.send(config.serviceId, config.templateId, templateParams, config.publicKey);
      form.reset();
      setStatus({ type: "success", message: "Your message was sent successfully." });
    } catch (error) {
      console.error("Contact form email failed:", error);
      setStatus({
        type: "error",
        message: "Unable to send your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <h1 className="logo-font text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.5rem] leading-tight">
              Contact <span>The Stage.</span>
            </h1>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="w-full lg:w-1/2">
            <form className="space-y-6 text-sm" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type name"
                  className="w-full bg-transparent border-b border-white/60 focus:outline-none py-2 placeholder-white/60"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Type phone number"
                  className="w-full bg-transparent border-b border-white/60 focus:outline-none py-2 placeholder-white/60"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type email address"
                  className="w-full bg-transparent border-b border-white/60 focus:outline-none py-2 placeholder-white/60"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">How can we help?</label>
                <textarea
                  placeholder="A brief description here"
                  name="helpDescription"
                  rows={3}
                  className="w-full bg-transparent border-b border-white/60 focus:outline-none py-2 resize-none placeholder-white/60"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 bg-white text-black px-6 py-4 text-xs tracking-wide hover:opacity-90 transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {status.message && (
                <p className={status.type === "error" ? "text-red-200" : "text-white"} role="status">
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
