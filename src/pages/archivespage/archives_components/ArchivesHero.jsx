import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ArchiveSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredIntro, setHoveredIntro] = useState(null);
  const navigate = useNavigate();

  const COLLAPSED_WIDTH = 175;
  const EXPANDED_WIDTH = 575;

  const introImages = [
    {
      src: "https://i.pinimg.com/1200x/3c/02/ab/3c02ab9b8c89130a3b61f1f503083457.jpg",
      desc: "Fragments of performance and memory."
    },
    {
      src: "https://i.pinimg.com/1200x/2f/24/a8/2f24a8538e9399a7c7d68f5ba8a3b546.jpg",
      desc: "Spaces where language becomes gesture."
    },
    {
      src: "https://i.pinimg.com/736x/79/33/d9/7933d9804049b95a1cdc9db0e3c590ae.jpg",
      desc: "Moments suspended between thought and form."
    },
    {
      src: "https://i.pinimg.com/1200x/80/c7/52/80c7527bf3b23fcd694671c006b068b5.jpg",
      desc: "Structures emerging from silence."
    },
    {
      src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900&q=80",
      desc: "Landscape as emotional terrain."
    }
  ];

  const articles = [
    {
      id: 1,
      title: "Small Town Sweden",
      image: "https://i.pinimg.com/1200x/80/c7/52/80c7527bf3b23fcd694671c006b068b5.jpg",
      desc: "Vestibulum id ligula porta felis euismod semper.",
      category: "by Jrddoe",
      time: "24 hours"
    },
    {
      id: 2,
      title: "Portrait in Black and White",
      image: "https://i.pinimg.com/1200x/fc/75/79/fc757978da7434e0283c87cbd3f365cb.jpg",
      desc: "Intimate moments captured in monochrome.",
      category: "by Studio K",
      time: "18 hours"
    }
  ];

  const isIntroExpanded = hoveredIntro !== null;

  return (
    <section
      className="max-w-8xl mx-auto px-5 h-screen flex flex-col items-center py-12"
      style={{ fontFamily: "Gordita, sans-serif" }}
    >
      {/* CATEGORY NAV */}
      <div className="flex w-[50%] border-b justify-center gap-36 mb-16 uppercase">
        {["Articles", "Essays", "Lectures", "Poems"].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`pb-3 transition-all ${
              activeCategory === cat
                ? "text-gray-900 font-medium"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      {!activeCategory ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start w-full">
          {/* LEFT TEXT (pushes left on expand) */}
          <p
            className={`text-2xl md:text-3xl leading-7.5 px-5 font-light max-w-sm text-gray-800 transition-transform duration-900 ease-in-out ${
              isIntroExpanded ? "-translate-x-74" : "translate-x-0"
            }`}
          >
            This archive gathers fragments of thought, spoken memory, and written
            form. It exists as a living record of ideas in motion.
          </p>

          {/* RIGHT STRIP IMAGES */}
          <div
            className="flex justify-end gap-2 h-[460px]  overflow-visible"
            style={{
              
            }}
          >
            {introImages.map((item, index) => {
              const isActive = hoveredIntro === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIntro(index)}
                  onMouseLeave={() => setHoveredIntro(null)}
                  className="relative rounded-xl overflow-hidden h-full transition-all duration-900 ease-in-out cursor-pointer"
                  style={{
                    width: isActive ? `${EXPANDED_WIDTH}px` : `${COLLAPSED_WIDTH}px`,
                    flexShrink: 0
                  }}
                >
                  {/* IMAGE */}
                  <img
                    src={item.src}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />

                  {/* OVERLAY */}
                  <div
                    className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* TEXT */}
                  <p
                    className={`absolute bottom-5 left-5 right-5 text-white text-sm transition-all duration-300 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* ARTICLES GRID (UNCHANGED) */
        <div className="flex flex-wrap gap-6 w-full">
          {articles.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-[48%] lg:w-[23%] cursor-pointer"
              onClick={() => navigate("/archives_details")}
            >
              <div className="h-[260px] overflow-hidden mb-4">
                <img
                  src={item.image}
                  className="w-full h-full object-cover "
                />
              </div>
              <p className="text-xs text-gray-500">{item.time}</p>
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-sm italic text-gray-600">{item.category}</p>
              <p className="text-sm text-gray-700 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ArchiveSection;
