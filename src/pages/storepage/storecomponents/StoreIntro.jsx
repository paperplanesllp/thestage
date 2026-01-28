import mic from '../../../assets/mic_image.png'

const StoreIntro = () => {
  return (
    <section className="h-[90vh] mt-16 w-full flex flex-col">
      
      {/* TOP HALF — IMAGE */}
      <div className="relative h-1/2 flex justify-center items-center w-full">
        <img
          src="https://i.pinimg.com/1200x/6c/93/9b/6c939bc1648a9edb56a0b0125dd73c7a.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Top text */}
        <div className="absolute  w-full text-center z-10">
          <h1 className="text-[9rem] text-white"  style={{ fontFamily: "XB Niloofar", fontStyle: "italic" }}>The Stage  Store</h1>
        </div>
      </div>

      {/* BOTTOM HALF — CONTENT */}
      <div className="h-1/2 w-full bg-[#f7f4ef] flex items-center justify-center">
        <div className="w-full justify-center  flex items-center">
          
        

          {/* CENTER TEXT */}
          <div className="w-[65%] text-center px-10">
            <h1 className="text-4xl md:text-5xl font-serif tracking-wide leading-tight">
              Your Captivating Title <br />
              Goes <span className="italic">Here</span>
            </h1>

            <p className="mt-6 text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Here is where you can capture your audience’s attention with a
              short caption. Tell your audience who you are, what you do, and
              how you can help them.
            </p>
          </div>

         
        </div>
      </div>

    </section>
  );
};

export default StoreIntro;
