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
    title: "19 Artists at Galerie Mathgoth",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=80",
    desc: "After the exhibition in the new year, Galerie Mathgoth will be presenting a group exhibition.",
    category: "Fashion",
    time: "24 hours"
  },
  {
    id: 2,
    title: "Ten Inspiration Picasso Sketches",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80",
    desc: "Apart from being an exceptional painter, Picasso was also one of the best draftsmen.",
    category: "Art, Design",
    time: "18 hours"
  },
  {
    id: 3,
    title: "Cy Twombly: Painting Can Bring Eight or Nine Figures in Auction",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=900&q=80",
    desc: "A group of the most influential contemporary artists of our age.",
    category: "Art, Analysis",
    time: "12 hours"
  },
  {
    id: 4,
    title: "New Zealand’s Backpacker Buses",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900&q=80",
    desc: "Backpacker buses are popular for long-haul travel across New Zealand.",
    category: "Travel",
    time: "1 day"
  },
  {
    id: 5,
    title: "Discovering New Worlds of Experience With Synesthesia in Art",
    image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=900&q=80",
    desc: "What is synesthesia and how does it shape artistic perception?",
    category: "Fashion, Art",
    time: "2 days"
  },
  {
    id: 6,
    title: "Eight Free Museums in Europe You Have to Check Out",
    image: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?w=900&q=80",
    desc: "A curated list of Europe’s most inspiring free museums.",
    category: "Art, Culture",
    time: "3 days"
  },
  {
    id: 7,
    title: "How to Know You Are Looking at a Fake Info",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=900&q=80",
    desc: "Understanding misinformation in the digital archive age.",
    category: "Thoughts",
    time: "5 days"
  },
  {
    id: 8,
    title: "10 Best Museum Shops Around the World",
    image: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?w=900&q=80",
    desc: "From Tate Modern to MoMA — design-forward museum retail.",
    category: "Fashion",
    time: "1 week"
  }
];
 const getCardHeight = (index) => {
  const position = index % 4; // 0,1,2,3
  return position === 1 || position === 3
    ? "h-[520px]"   // 2nd & 4th cards (tall)
    : "h-[380px]";  // 1st & 3rd cards (short)
};

const getCardTranslate = (index) => {
  const position = index % 4; // 0,1,2,3
  const isSmall = position === 0 || position === 2; // 1st & 3rd cards
  const isAfterFirstRow = index >= 4;

  return isSmall && isAfterFirstRow ? "-translate-y-30" : "";
};

const getImageHeight = (index) => {
  const position = index % 4; // 0,1,2,3
  return position === 1 || position === 3
    ? "h-[320px]"   // tall cards → taller image
    : "h-[220px]";  // small cards → smaller image
};


  const isIntroExpanded = hoveredIntro !== null;

  return (
    <section
      className="max-w-8xl mx-auto px-5 min-h-screen flex flex-col items-center py-12"
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
                  className="relative rounded-md overflow-hidden h-full transition-all duration-900 ease-in-out cursor-pointer"
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
      <div className="grid grid-cols-4 gap-6 auto-rows-min grid-flow-dense">
          {articles.map((item, index) => (
            <div
  key={item.id}
  className={`group  overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] ${getCardHeight(index)} ${getCardTranslate(index)}`}
  onClick={() => navigate("/archives_details")}
>
  {/* IMAGE */}
  <div className={`w-full  ${getImageHeight(index)}  overflow-hidden`}>
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  </div>

  {/* CONTENT */}
  <div className="py-5 bg-white flex flex-col gap-2">
    <span className="text-xs uppercase tracking-wider text-gray-500">
      {item.time}
    </span>

    <h3 className="text-lg font-semibold leading-snug text-gray-900" style={{ fontFamily: "'Scope One', serif" }}>
      {item.title}
    </h3>

    <p className="text-xs uppercase tracking-wider text-gray-400">
      {item.category}
    </p>

    <p className="text-sm text-black line-clamp-2" style={{ fontFamily: "'Scope One', serif" }}>
      {item.desc}
    </p>
  </div>
</div>

          ))}
        </div>


      )}
    </section>
  );
};

export default ArchiveSection;
