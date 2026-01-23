import React from "react";

const PreviousTalks = () => {
  return (
    <div className="w-full flex  flex-col bg-white space-y-0" style={{ fontFamily: "Gordita, sans-serif" }}>

            <h1 className="text-start text-black px-15 font-normal pt-12 translate-y-[10%] text-5xl pb-12" >Upcoming Events</h1>
            <p className="max-w-4xl px-15 font-light">In the present climate of a dominant scientific naturalism, heavily dependent on speculative 
Darwinian explanations of practically everything, 
and armed to the teeth against attacks from
religion, I have thought it useful to speculate 
about possible alternatives.</p>
      {/* ===== SECTION 1 ===== */}
      <div className="grid h-[33vh] bg-amber-200 grid-cols-1 mt-12 md:grid-cols-3 gap-10 items-stretch">
        <div className="col-span-1 pt-5 pl-15 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
              TITIAN: LOVE, <br /> DESIRE, DEATH
            </h1>

            <p className="text-gray-600 leading-5 mt-5">
              In 1551, Prince Philip of Spain commissioned Titian to
              produce a group of paintings inspired by Ovid’s
              <em> Metamorphoses</em>.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-22 text-sm text-gray-700">
            <div>
              <p className="font-semibold">Date</p>
              <p>9 – 12 June</p>
            </div>
            <div>
              <p className="font-semibold">Time</p>
              <p>11:00 – 16:00</p>
            </div>
            <div>
              <button className="relative mt-4 text-sm after:absolute after:left-6 after:top-5 after:h-[1px] after:w-0 after:bg-black after:transition-all hover:after:w-[calc(100%-3rem)]">
                MORE ABOUT
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-2 pl-15">
          <img
            src="https://i.pinimg.com/1200x/d3/32/e2/d332e2d07c25d8ec069c5d89b6478b43.jpg"
            className="w-full h-[320px] object-cover"
            alt=""
          />
        </div>
      </div>

      {/* ===== SECTION 2 ===== */}
      <div className="grid h-[33vh] grid-cols-1 md:grid-cols-3  items-stretch">
        <div className="col-span-2">
          <img
            src="https://i.pinimg.com/1200x/4c/a2/19/4ca219e0fa029ee4c87b181ac48134ea.jpg"
            className="w-full h-[320px] object-cover"
            alt=""
          />
        </div>

        <div className="col-span-1 pt-5 pr-15 flex bg-blue-400 flex-col items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
            TITIAN: LOVE, <br /> DESIRE, DEATH
          </h1>

          <p className="text-gray-600 ms-22 ">
            In 1551, Prince Philip of Spain commissioned Titian to
            create mythological works.
          </p>

          <div className="grid grid-cols-3 mb-22 gap-6 text-sm text-gray-700">
            <div>
              <p className="font-semibold">Date</p>
              <p>9 – 12 June</p>
            </div>
            <div>
              <p className="font-semibold">Time</p>
              <p>11:00 – 16:00</p>
            </div>
            <button className="relative mt-4 after:absolute after:left-6 after:top-5 after:h-[1px] after:w-0 after:bg-black after:transition-all hover:after:w-[calc(100%-3rem)]">
              MORE ABOUT
            </button>
          </div>
        </div>
      </div>

      {/* ===== SECTION 3 ===== */}
      <div className="grid overflow-hidden h-[33vh] text-white bg-gray-700 grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
        <div className="col-span-1 pl-15 flex flex-col justify-between">
          <h1 className="text-3xl md:text-4xl pt-5 font-semibold tracking-wide">
            TITIAN: LOVE, <br /> DESIRE, DEATH
          </h1>

          <p className="text-white mt-10">
            Titian was one of the most influential painters of the
            Renaissance period.
          </p>

          <div className="grid overflow-hidden grid-cols-3 pb-4 gap-6 text-sm text-white">
            <div>
              <p className="font-semibold">Date</p>
              <p>9 – 12 June</p>
            </div>
            <div>
              <p className="font-semibold">Time</p>
              <p>11:00 – 16:00</p>
            </div>
            <button className="relative mt-4 after:absolute after:left-6 after:top-5 after:h-[1px] after:w-0 after:bg-black after:transition-all hover:after:w-[calc(100%-3rem)]">
              MORE ABOUT
            </button>
          </div>
        </div>

        <div className="col-span-2 relative overflow-hidden">
          <img
            src="https://i.pinimg.com/1200x/2f/24/a8/2f24a8538e9399a7c7d68f5ba8a3b546.jpg"
            className="w-full absolute  object-cover"
            alt=""
          />
        </div>
      </div>

    </div>
  );
};

export default PreviousTalks;
