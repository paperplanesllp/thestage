import { useState, useEffect } from 'react';

export default function StoreIntro() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      date: "March 3, 2019",
      title: "Our\nCollections",
      subtitle: "From Monet to Renoir"
    },
    {
      date: "April 15, 2019",
      title: "Modern\nMasterpieces",
      subtitle: "Contemporary Expressions"
    },
    {
      date: "May 22, 2019",
      title: "Classical\nElegance",
      subtitle: "Timeless Beauty"
    }
  ];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-[95vh] py-10 bg-red-800 overflow-hidden"style={{ fontFamily: "Gordita, sans-serif" }}>
    
        <div className='absolute w-full h-full bg-black/60 opacity-50'/>   
      {/* Soft background panels */}
      <div className="absolute mt-15 inset-0">
        {/* <div className="absolute left-0 top-35 h-[20%] w-full bg-[#eef1e6]" />
        <div className="absolute left-[20%] top-0 h-full w-[15%] bg-[#eef1e6]" /> */}

        <h1 className='mt-15 text-7xl ms-10 z-10 absolute text-white ' style={{fontWeight:"normal"}}>Your Grabs</h1>
      </div>

      {/* Main painting image - stays the same */}
      <div className="absolute right-[8%] top-[19%] w-[55%] h-[65%] z-10">
        <img
          src="https://i.pinimg.com/1200x/84/8b/d8/848bd874c28f7881dc199e6be5a1eb1a.jpg"
          alt="Monet painting"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text card with animated content */}
      <div className="absolute left-[21%] bottom-[8%] w-[34%] bg-[#3f4a2f] text-white p-8 z-20">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-8'
            }`}
          >
            <p className="text-xs uppercase tracking-widest mb-4">
              {slide.date}
            </p>
            <h2 className="text-3xl font-serif leading-tight mb-4 whitespace-pre-line">
              {slide.title}
            </h2>
            <p className="text-sm opacity-80">
              {slide.subtitle}
            </p>
          </div>
        ))}

        {/* Interactive slider dots */}
        <div className="flex gap-3 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}