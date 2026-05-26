import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/IMG_2315.jpg.jpeg";
import cultureImage from "../../assets/IMG_2694.JPEG";
import studioImage from "../../assets/group-1.jpeg";
import editorialImage from "../../assets/group-2.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 42 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const principles = [
  {
    title: "Creative Depth",
    text: "Work on ideas with cultural weight, not disposable noise.",
  },
  {
    title: "Editorial Taste",
    text: "Shape conversations, formats, rooms, and stories with uncommon care.",
  },
  {
    title: "Inventive Culture",
    text: "Build at the intersection of public thought, design, media, and live experience.",
  },
  {
    title: "Visible Impact",
    text: "Create work that gathers serious minds and makes attention feel valuable again.",
  },
];

const roles = [
  {
    title: "Editorial Producer",
    department: "Programming",
    location: "Chennai / Hybrid",
    type: "Full Time",
  },
  {
    title: "Visual Designer",
    department: "Brand Studio",
    location: "Remote",
    type: "Contract",
  },
  {
    title: "Community Lead",
    department: "Culture",
    location: "Chennai",
    type: "Full Time",
  },
  {
    title: "Content Research Intern",
    department: "Research",
    location: "Hybrid",
    type: "Internship",
  },
];

const steps = ["Apply", "Review", "Interview", "Final Stage"];

const testimonials = [
  {
    quote:
      "The work feels precise, cinematic, and alive. Every project asks you to think with more discipline.",
    name: "muhammed Shifan",
    role: "Programming",
  },
  {
    quote:
      "It is a rare space where editorial judgment, design, and ambition are treated as one language.",
    name: "Mira",
    role: "Brand Studio",
  },
];

const SectionLabel = ({ children }) => (
  <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#c79a6a]">
    {children}
  </p>
);

const Careers = () => {
  return (
    <main
      className="bg-[#080706] text-white"
      style={{ fontFamily: "Gordita, sans-serif" }}
    >
      <section className="relative min-h-screen overflow-hidden">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[50%_72%]"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-linear-to-t from-[#080706] via-black/20 to-black/30" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 flex min-h-screen flex-col justify-end px-5 pb-16 pt-28 sm:px-8 md:px-12 lg:px-16"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 text-xs uppercase tracking-[0.42em] text-white/70"
          >
            Careers at The Stage
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="logo-font max-w-10xl text-[3.6rem] leading-[0.95] sm:text-[5.2rem] md:text-[7rem] lg:text-[9rem]"
          >
            For the minds that build what's next.
          </motion.h1>
          <motion.div
            variants={fadeUp}
            className="mt-8 flex max-w-5xl flex-col gap-7 border-t border-white/20 pt-7 md:flex-row md:items-end md:justify-between"
          >
            <p
              className="max-w-2xl text-base leading-7 text-white/78 sm:text-lg"
              style={{ fontFamily: "'Scope One', serif" }}
            >
              We gather creators, thinkers, innovators, and storytellers to
              build thoughtful cultural experiences for people who refuse the
              obvious.
            </p>
            <a
              href="#open-roles"
              className="w-fit rounded-full border border-white/70 px-7 py-3 text-xs uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-black"
            >
              View Open Roles
            </a>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.24 }}
        variants={stagger}
        className="px-5 py-24 sm:px-8 md:px-12 lg:px-16"
      >
        <motion.div variants={fadeUp} className="max-w-4xl">
          <SectionLabel>Why Join The Stage</SectionLabel>
          <h2 className="logo-font text-[3rem] leading-none sm:text-[4.2rem] md:text-[5.5rem]">
            Build with taste, tension, and consequence.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((item) => (
            <motion.article
              variants={fadeUp}
              key={item.title}
              className="group min-h-[260px] border border-white/12 bg-white/[0.04] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#c79a6a]/60 hover:bg-[#32170d]/50"
            >
              <div className="mb-12 h-px w-14 bg-[#c79a6a] transition group-hover:w-24" />
              <h3
                className="text-2xl leading-tight"
                style={{ fontFamily: "'Scope One', serif" }}
              >
                {item.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-white/62">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <section id="open-roles" className="bg-[#f5f0ea] px-5 py-24 text-black sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Open Positions</SectionLabel>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-3xl text-[2.6rem] font-medium uppercase leading-none sm:text-[4.5rem] md:text-[5.5rem]">
              Roles for makers of culture.
            </h2>
            <p className="max-w-sm text-sm leading-7 text-black/60">
              Each role is built for people who care about precision, audience,
              craft, and momentum.
            </p>
          </div>

          <div className="mt-14 divide-y divide-black/15 border-y border-black/15">
            {roles.map((role) => (
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55 }}
                key={role.title}
                className="grid gap-5 px-0 py-7 transition duration-300 hover:px-4 hover:bg-black hover:text-white md:grid-cols-[1.4fr_1fr_1fr_0.7fr]"
              >
                <h3
                  className="text-2xl md:text-3xl"
                  style={{ fontFamily: "'Scope One', serif" }}
                >
                  {role.title}
                </h3>
                <p className="text-sm uppercase tracking-[0.18em] opacity-70">
                  {role.department}
                </p>
                <p className="text-sm opacity-70">{role.location}</p>
                <p className="text-sm opacity-70">{role.type}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid min-h-screen bg-[#0f0b08] md:grid-cols-2">
        <div className="relative min-h-[60vh] overflow-hidden md:min-h-screen">
          <img
            src={cultureImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="flex flex-col justify-center px-5 py-20 sm:px-8 md:px-12 lg:px-16"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Culture</SectionLabel>
            <h2 className="logo-font text-[3.4rem] leading-none sm:text-[5rem] md:text-[6rem]">
              A room for serious creative energy.
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-xl text-base leading-8 text-white/68"
          >
            The Stage is built like an editorial room, a studio, and a salon at
            once. We value deep research, cinematic execution, careful language,
            and the kind of taste that makes work feel inevitable.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 grid gap-4 sm:grid-cols-2">
            <img src={studioImage} alt="" className="h-56 w-full object-cover" />
            <img src={editorialImage} alt="" className="h-56 w-full object-cover" />
          </motion.div>
        </motion.div>
      </section>

      <section className="px-5 py-24 sm:px-8 md:px-12 lg:px-16">
        <SectionLabel>Hiring Process</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <h2 className="max-w-xl text-[2.8rem] font-medium uppercase leading-none sm:text-[4.6rem]">
            A clear path to the final stage.
          </h2>
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <motion.div
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                key={step}
                className="flex items-center gap-5 border border-white/12 bg-white/[0.03] p-5"
              >
                <span className="logo-font text-4xl text-[#c79a6a]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-xl">{step}</h3>
                  <p className="mt-1 text-sm text-white/55">
                    We keep the process direct, thoughtful, and respectful of
                    your time.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#130b08] px-5 py-24 sm:px-8 md:px-12 lg:px-16">
        <SectionLabel>Employee Experience</SectionLabel>
        <div className="grid gap-5 lg:grid-cols-2">
          {testimonials.map((item) => (
            <motion.article
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65 }}
              key={item.name}
              className="border border-white/14 bg-white/[0.07] p-8 shadow-2xl shadow-black/20 backdrop-blur md:p-10"
            >
              <p
                className="text-2xl leading-snug text-white/88 md:text-3xl"
                style={{ fontFamily: "'Scope One', serif" }}
              >
                "{item.quote}"
              </p>
              <div className="mt-10 h-px w-full bg-white/14" />
              <p className="mt-6 text-sm uppercase tracking-[0.22em] text-[#c79a6a]">
                {item.name} / {item.role}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="flex min-h-[70vh] items-center justify-center px-5 py-24 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75 }}
          className="max-w-5xl"
        >
          <p className="logo-font text-[3.2rem] leading-none sm:text-[5.2rem] md:text-[7rem]">
            Build the future with us.
          </p>
          <a
            href="#open-roles"
            className="mt-10 inline-flex rounded-full border border-white/60 px-8 py-3 text-xs uppercase tracking-[0.24em] transition hover:bg-white hover:text-black"
          >
            View Open Roles
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default Careers;
