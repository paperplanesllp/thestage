import mic from "../../../assets/mic_image.png";

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
          <h1
            className="text-[55px] sm:text-6xl md:text-[100px] lg:text-[130px] xl:text-[150px] text-white mb-3 sm:mb-4 md:mb-6 leading-[0.95]"
            style={{ fontFamily: "XB Niloofar", fontStyle: "italic" }}
          >
            The Stage Store
          </h1>

          <h2 className="text-[40px] sm:text-4xl md:text-[70px] lg:text-[85px] xl:text-[100px] text-white tracking-wide leading-none">
            COMING SOON
          </h2>
        </div>
      </div>

      {/* WHITE STRIP */}
      <div className="w-full h-[80px] sm:h-[100px] md:h-[130px] bg-white"></div>
    </section>
  );
};

export default StoreIntro;