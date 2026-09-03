import { useState } from "react";
import emailjs from "@emailjs/browser";
import { validateEmailJsConfig } from "../../utils/emailjs";

const TheStageSymposium = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleStudentTeamSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const templateId = import.meta.env.VITE_EMAILJS_SYMPOSIUM_TEMPLATE_ID?.trim() || "template_ij4qbmr";
    const config = validateEmailJsConfig(templateId, "symposium form");

    if (!config.isValid) {
      setErrorMessage(config.errorMessage);
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    const templateParams = {
      ...values,
      submission_type: "The Stage Symposium delegate form",
      from_name: values.fullName,
      reply_to: values.email,
      message: [
        "NEW WEBSITE SUBMISSION",
        "",
        "## SYMPOSIUM FORM",
        `Full Name: ${values.fullName}`,
        `Place: ${values.college}`,
        `Occupation: ${values.department}`,
        `Email Address: ${values.email}`,
        `Phone: ${values.phone}`,
        `Reason: ${values.reason}`,
      ].join("\n"),
    };

    try {
      setIsSubmitting(true);
      setErrorMessage("");
      setSubmitted(false);
      emailjs.init({ publicKey: config.publicKey });
      await emailjs.send(config.serviceId, config.templateId, templateParams, config.publicKey);
      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error("Symposium form email failed:", error);
      setErrorMessage("Unable to submit the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f1e8] text-black">
      <section className="flex min-h-[72vh] items-center justify-center px-5 pb-20 pt-24 text-center sm:px-8">
        <div className="mx-auto w-full max-w-[1400px]">
          
          <h1
            className="translate-y-10 text-[3.2rem] leading-[0.95] text-black sm:text-[5rem] md:text-[7rem] lg:text-[9rem]"
            style={{ fontFamily: "Norwester, sans-serif" }}
          >
            The Stage Symposium
          </h1>

          <p
            className="mx-auto mt-12 max-w-2xl text-2xl leading-relaxed sm:text-xl md:text-5xl"
            style={{ fontFamily: "'Scope One', serif" }}
          >
           Annual Event
          </p>

        </div>
      </section>

      <section className="px-5 pb-16 pt-0 sm:px-8 sm:pb-20 sm:pt-2">
        <div className="mx-auto mb-4 w-full max-w-[950px] border-t-2 border-[#000000]" />
        <p
          className="mx-auto w-full max-w-[950px] text-justify text-base leading-[1.2] sm:text-lg md:text-[15px]"
          style={{ fontFamily: "'Scope One', serif" }}
        >
          <strong className="font-bold">The Stage Symposium</strong> is the
          flagship annual intellectual gathering of{" "}
          <strong className="font-bold">The Stage</strong>, an independent
          platform committed to fostering thoughtful public discourse on
          questions that shape human life and society. The symposium brings
          together distinguished scholars, academics, professionals, students,
          and intellectually curious individuals for meaningful dialogue across
          disciplines. Through lectures, panel discussions, debates, and
          audience engagement, it seeks to promote critical inquiry,
          evidence-based thinking, and intellectual openness in the shared
          pursuit of truth. Conceived as an annual academic forum, the symposium
          aims to strengthen the relationship between scholarly knowledge and
          public life by creating a space for rigorous and constructive
          conversations.
        </p>
      </section>

      <section
        className="relative flex min-h-[65vh] w-full flex-col items-center overflow-hidden px-12 pb-20 pt-16 sm:px-20 sm:pt-[4.5rem] md:px-24 md:pt-20 lg:px-28 lg:pt-24"
        style={{ fontFamily: "Staatliches, sans-serif" }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-3 border-[6px] border-[#AA2525] sm:inset-4"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1100px] translate-y-6">
          <div className="relative text-center text-6xl uppercase leading-[0.95] sm:text-6xl md:text-7xl lg:text-9xl">
            <span className="block text-[#AA2525]">The Stage Symposium</span>
            <span className="block text-left text-[#030303]">Edition 1</span>
            <p className="absolute right-0 top-1/2 whitespace-nowrap text-right text-6xl leading-[0.95] text-[#030303] sm:text-6xl md:text-7xl lg:text-9xl">
              Coming Soon
            </p>
          </div>
        </div>
      
       </section>

      <section className="w-full px-5">
        <img
          src="/hey.PNG"
          alt="The Stage Symposium auditorium"
          className="block aspect-[2.25/1] w-full object-cover object-bottom"
        />
      </section>

      <section className="w-full px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto w-full max-w-[950px]">
          <h2
            className="text-4xl leading-tight text-[#0f0e0e] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "Staatliches, sans-serif" }}
          >
          The Stage Symposium 2026 
          </h2>
          <h2 className="text-4xl leading-tight text-[#0f0e0e] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "Staatliches, sans-serif" }}>
              Delegate Expression of Interest Form
              </h2>

          <form
            className="mt-12 space-y-8"
            onSubmit={handleStudentTeamSubmit}
            style={{ fontFamily: "'Scope One', serif" }}
          >
            <div>
              <label className="mb-2 block font-bold" htmlFor="symposium-full-name">
                1. Full Name
              </label>
              <input
                className="w-full border-b-2 border-black bg-transparent px-1 py-3 outline-none transition focus:border-[#AA2525]"
                id="symposium-full-name"
                name="fullName"
                required
                type="text"
              />
            </div>
            <div>
              <label className="mb-2 block font-bold" htmlFor="symposium-college">
                2. Place
              </label>
              <input
                className="w-full border-b-2 border-black bg-transparent px-1 py-3 outline-none transition focus:border-[#AA2525]"
                id="symposium-college"
                name="college"
                required
                type="text"
              />
            </div>

            <div>
              <label className="mb-2 block font-bold" htmlFor="symposium-department">
                3. Occupation
              </label>
              <input
                className="w-full border-b-2 border-black bg-transparent px-1 py-3 outline-none transition focus:border-[#AA2525]"
                id="symposium-department"
                name="department"
                required
                type="text"
              />
            </div>

            <div>
              <label className="mb-2 block font-bold" htmlFor="symposium-email">
                4. Email Address
              </label>
              <input
                className="w-full border-b-2 border-black bg-transparent px-1 py-3 outline-none transition focus:border-[#AA2525]"
                id="symposium-email"
                name="email"
                required
                type="email"
              />
            </div>

            

            <div>
              <label className="mb-2 block font-bold" htmlFor="symposium-phone">
                6. Phone Number
              </label>
              <input
                className="w-full border-b-2 border-black bg-transparent px-1 py-3 outline-none transition focus:border-[#AA2525]"
                id="symposium-phone"
                name="phone"
                required
                type="tel"
              />
            </div>

            <div>
              <label className="mb-2 block font-bold" htmlFor="symposium-reason">
                7. Why are you interested in attending The Stage Symposium 2026 ?
              </label>
              <p className="mb-3 text-sm leading-relaxed">
                Tell us briefly why you&apos;re interested in becoming a part of
                The Stage Symposium and how you would like to contribute.
              </p>
              <textarea
                className="min-h-36 w-full resize-y border-2 border-black bg-transparent p-4 outline-none transition focus:border-[#AA2525]"
                id="symposium-reason"
                name="reason"
                required
              />
            </div>


            <button
              className="bg-[#AA2525] px-10 py-3 text-lg font-bold text-white transition hover:bg-black"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            {submitted && (
              <p className="font-bold text-[#AA2525]" role="status">
                Form submitted successfully.
              </p>
            )}
            {errorMessage && (
              <p className="font-bold text-[#AA2525]" role="alert">
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
};

export default TheStageSymposium;
