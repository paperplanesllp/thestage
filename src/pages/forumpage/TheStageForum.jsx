import { useState } from "react";

const TheStageForum = ({ pageName = "The Stage Forum" }) => {
  const [submitted, setSubmitted] = useState(false);
  const activityName = pageName.replace(/^The /, "");

  const handleStudentTeamSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#f5f1e8] text-black">
      <section className="flex min-h-screen items-center justify-center px-5 pb-16 pt-28 text-center sm:px-8">
        <div className="mx-auto w-full max-w-[1400px]">
          
          <h1
            className={`text-[3.2rem] leading-[0.95] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] ${
              pageName === "The Stage Symposium"
                ? "text-black"
                : "text-[#AA2525]"
            }`}
            style={{ fontFamily: "Norwester, sans-serif" }}
          >
            {pageName}
          </h1>

          <p
            className="mx-auto mt-8 max-w-2xl text-2xl leading-relaxed sm:text-xl md:text-xl"
            style={{ fontFamily: "'Scope One', serif" }}
          >
          The Stage Symposium is the flagship annual intellectual gathering of The Stage, bringing together scholars, academics, professionals, and students for rigorous interdisciplinary dialogue in the pursuit of truth.
          </p>

         <p
            className="mb-8 mt-15 text-sm font-bold uppercase tracking-[0.35em] text-[#6d0707] sm:text-base"
            style={{ fontFamily: "Analogia, Georgia, italic" }}
          >
           Lectures · Debates · Discourses · Intellectual Activities
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 pt-2 sm:px-8 sm:pb-20 sm:pt-4">
        <div className="mx-auto mb-8 w-full max-w-[950px] border-t-2 border-[#000000]" />
        <p
          className="mx-auto w-full max-w-[950px] text-justify text-base leading-[1.2] sm:text-lg md:text-[15px]"
          style={{ fontFamily: "'Scope One', serif" }}
        >
          <strong className="font-bold">{pageName}</strong> is a campus initiative by{" "}
          <strong className="font-bold">THE STAGE</strong> dedicated to meaningful conversations, intellectual discourse, debates, lectures, and discussions that connect academic thought with human life. Through lectures, discourses, debates, panel discussions, and other intellectual activities, it brings students into conversation with scholars, academicians, and diverse scholarly perspectives, creating opportunities to examine ideas critically, question assumptions, refine understanding, and pursue truth through reasoned dialogue. By bridging academic thought and student discourse,{" "}
          <strong className="font-bold">{pageName}</strong> seeks to cultivate intellectual curiosity, critical thinking, and a culture of thoughtful engagement within the campus community.
        </p>
      </section>

      <section className="w-full px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto w-full max-w-[950px]">
          <h2
            className="text-4xl leading-tight text-[#0f0e0e] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "Staatliches, sans-serif" }}
          >
            Become a  Member of 
          </h2>
          <h2 className="text-4xl leading-tight text-[#0f0e0e] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "Staatliches, sans-serif" }}>
              {pageName.toUpperCase()} Student Team.
              </h2>

          <form
            className="mt-12 space-y-8"
            onSubmit={handleStudentTeamSubmit}
            style={{ fontFamily: "'Scope One', serif" }}
          >
            <div>
              <label className="mb-2 block font-bold" htmlFor="forum-full-name">
                1. Full Name
              </label>
              <input
                className="w-full border-b-2 border-black bg-transparent px-1 py-3 outline-none transition focus:border-[#AA2525]"
                id="forum-full-name"
                name="fullName"
                required
                type="text"
              />
            </div>
            <div>
              <label className="mb-2 block font-bold" htmlFor="forum-department">
                2. College / Institution
              </label>
              <input
                className="w-full border-b-2 border-black bg-transparent px-1 py-3 outline-none transition focus:border-[#AA2525]"
                id="forum-department"
                name="department"
                required
                type="text"
              />
            </div>

            <div>
              <label className="mb-2 block font-bold" htmlFor="forum-department">
                3. Department
              </label>
              <input
                className="w-full border-b-2 border-black bg-transparent px-1 py-3 outline-none transition focus:border-[#AA2525]"
                id="forum-department"
                name="department"
                required
                type="text"
              />
            </div>

            <div>
              <label className="mb-2 block font-bold" htmlFor="forum-study-year">
                4. Semester / Year of Study
              </label>
              <input
                className="w-full border-b-2 border-black bg-transparent px-1 py-3 outline-none transition focus:border-[#AA2525]"
                id="forum-study-year"
                name="studyYear"
                required
                type="text"
              />
            </div>

            <div>
              <label className="mb-2 block font-bold" htmlFor="forum-email">
                5. Email Address
              </label>
              <input
                className="w-full border-b-2 border-black bg-transparent px-1 py-3 outline-none transition focus:border-[#AA2525]"
                id="forum-email"
                name="email"
                required
                type="email"
              />
            </div>

            <div>
              <label className="mb-2 block font-bold" htmlFor="forum-phone">
                6. Phone Number
              </label>
              <input
                className="w-full border-b-2 border-black bg-transparent px-1 py-3 outline-none transition focus:border-[#AA2525]"
                id="forum-phone"
                name="phone"
                required
                type="tel"
              />
            </div>

            <div>
              <label className="mb-2 block font-bold" htmlFor="forum-reason">
                7. Why would you like to join the {activityName} Student Team?
              </label>
              <p className="mb-3 text-sm leading-relaxed">
                Tell us briefly why you&apos;re interested in becoming a part of
                {pageName} and how you would like to contribute.
              </p>
              <textarea
                className="min-h-36 w-full resize-y border-2 border-black bg-transparent p-4 outline-none transition focus:border-[#AA2525]"
                id="forum-reason"
                name="reason"
                required
              />
            </div>

            <fieldset>
              <legend className="font-bold leading-relaxed">
                8. If selected, are you willing to actively participate in
                promoting and organizing {activityName} activities throughout the
                academic year?
              </legend>
              <div className="mt-4 flex gap-8">
                <label className="flex cursor-pointer items-center gap-2">
                  <input name="activeParticipation" required type="radio" value="yes" />
                  Yes
                </label>
                <label className="flex cursor-pointer items-center gap-2">
                  <input name="activeParticipation" required type="radio" value="no" />
                  No
                </label>
              </div>
            </fieldset>

            <button
              className="bg-[#AA2525] px-10 py-3 text-lg font-bold text-white transition hover:bg-black"
              type="submit"
            >
              Submit
            </button>

            {submitted && (
              <p className="font-bold text-[#AA2525]" role="status">
                Form validated successfully. Online submission storage is not
                connected yet.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
};

export default TheStageForum;
