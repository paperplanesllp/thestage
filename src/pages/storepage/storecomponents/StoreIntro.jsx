const StoreIntro = () => {
  return (
    <section className="mt-10 sm:mt-16 w-full">
      {/* HERO */}
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <img
          src="https://i.pinimg.com/1200x/6c/93/9b/6c939bc1648a9edb56a0b0125dd73c7a.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* CONTENT */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="logo-font text-[55px] sm:text-6xl md:text-[100px] lg:text-[130px] xl:text-[150px] text-white mb-3 sm:mb-4 md:mb-6 leading-[0.95]">
            The Stage Store
          </h1>

          <h2 className="text-[32px] sm:text-4xl md:text-[64px] lg:text-[78px] xl:text-[90px] text-white tracking-wide leading-none">
            AESTHETIC CORNER
          </h2>
          <p
            className="mt-6 max-w-xl text-[16px] leading-7 text-white/82 sm:text-[18px]"
            style={{ fontFamily: "'Scope One', serif" }}
          >
            Curated pieces for creative souls.
          </p>
        </div>
      </div>

    </section>
  );
};

export default StoreIntro;
