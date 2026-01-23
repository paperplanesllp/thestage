import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ArchiveSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const introImages = [
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      desc: "Fragments of performance and memory."
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
      desc: "Spaces where language becomes gesture."
    },
    {
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
      desc: "Moments suspended between thought and form."
    }
  ];

  const articles = [
    {
      id: 1,
      title: "Small Town Sweden",
      image: "https://i.pinimg.com/1200x/80/c7/52/80c7527bf3b23fcd694671c006b068b5.jpg",
      desc: "Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo.",
      category: "by Jrddoe",
      time: "24 hours"
    },
    {
      id: 2,
      title: "Portrait in Black and White",
      image: "https://i.pinimg.com/1200x/fc/75/79/fc757978da7434e0283c87cbd3f365cb.jpg",
      desc: "Intimate moments captured in monochrome, exploring the depths of human emotion.",
      category: "by Studio K",
      time: "18 hours"
    },
    {
      id: 3,
      title: "Morning Coffee Ritual",
      image: "https://i.pinimg.com/1200x/9f/03/3a/9f033a103624ca100bc116f575f70f91.jpg",
      desc: "The art of slow living through everyday moments and meaningful connections.",
      category: "by Chase",
      time: "24 hours"
    },
    {
      id: 4,
      title: "Coastal Dreams",
      image: "https://i.pinimg.com/736x/ff/ea/71/ffea7149890415a2f41c53eccc644525.jpg",
      desc: "Where the ocean meets tranquility. Exploring minimalist landscapes and serene horizons.",
      category: "by Wells",
      time: "36 hours"
    },
    {
      id: 5,
      title: "Architectural Lines",
      image: "https://i.pinimg.com/1200x/7d/7c/38/7d7c38c6a84eb0079ff6a5b845ecaca5.jpg",
      desc: "Bold geometry and striking forms that define modern spaces.",
      category: "by Morrison",
      time: "12 hours"
    },
    {
      id: 6,
      title: "Golden Hour Fields",
      image: "https://i.pinimg.com/736x/02/5e/02/025e020505e6093fa8d0a4a546b1c91a.jpg",
      desc: "Light dancing through nature, capturing the essence of rural landscapes at dusk.",
      category: "by Rivers",
      time: "48 hours"
    },
    {
      id: 7,
      title: "Urban Solitude",
      image: "https://i.pinimg.com/736x/48/8e/4f/488e4ff5d7a561618ecd19548b932743.jpg",
      desc: "Finding peace in the rhythm of city life and concrete jungles.",
      category: "by Metro",
      time: "24 hours"
    },
    {
      id: 8,
      title: "Forest Wandering",
      image: "https://i.pinimg.com/736x/48/5b/93/485b937146407780a281b3f6dbcef214.jpg",
      desc: "Into the wild where stories unfold beneath ancient canopies.",
      category: "by Wilde",
      time: "24 hours"
    }
  ];

  const navigate=useNavigate()

  return (
    <section className="max-w-8xl mx-auto px-5 py-32" style={{ fontFamily: "Gordita, sans-serif" }}>
      
      {/* CATEGORY NAV */}
      <div className="flex justify-center items-center gap-12 mb-16 text-sm tracking-wider uppercase">
        {["Articles", "Essays", "Lectures", "Poems"].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`pb-2 border-b-2 transition-all duration-300 ${
              activeCategory === cat
                ? "border-gray-900 text-gray-900 font-medium"
                : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      {!activeCategory ? (
        /* DEFAULT INTRO LAYOUT */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* LEFT TEXT */}
          <div>
            <p className="text-2xl md:text-3xl leading-relaxed font-light text-gray-800 max-w-md">
              This archive gathers fragments of thought, spoken memory, and
              written form. It exists as a living record of ideas in motion.
              Select a category to begin navigating through the material.
            </p>
          </div>

          {/* RIGHT IMAGES */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {introImages.map((item, i) => (
              <div key={i}>
                <img
                  src={item.src}
                  alt=""
                  className="w-full h-48 object-cover mb-3"
                />
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* EDITORIAL GRID - 3 COLUMNS */
    

<div className="flex flex-wrap gap-6">

  {/* CARD 1 */}
  <div className="w-full sm:w-[48%] lg:w-[23%]" onClick={() => navigate("/archives_details")}>
    <div className="h-[200px] overflow-hidden mb-4">
      <img src={articles[0].image} className="w-full h-full object-cover" />
    </div>
    <p className="text-xs text-gray-500 mb-1">{articles[0].time}</p>
    <h3 className="text-lg font-medium">{articles[0].title}</h3>
    <p className="text-sm italic text-gray-600">{articles[0].category}</p>
    <p className="text-sm text-gray-700 mt-2">{articles[0].desc}</p>
  </div>

  {/* CARD 2 */}
  <div className="w-full sm:w-[48%] lg:w-[23%]" onClick={() => navigate("/archives_details")}>
    <div className="h-[360px] overflow-hidden mb-4">
      <img src={articles[1].image} className="w-full h-full object-cover" />
    </div>
    <p className="text-xs text-gray-500 mb-1">{articles[1].time}</p>
    <h3 className="text-lg font-medium">{articles[1].title}</h3>
    <p className="text-sm italic text-gray-600">{articles[1].category}</p>
    <p className="text-sm text-gray-700 mt-2">{articles[1].desc}</p>
  </div>

  {/* CARD 3 */}
  <div className="w-full sm:w-[48%] lg:w-[23%]" onClick={() => navigate("/archives_details")}>
    <div className="h-[260px] overflow-hidden mb-4">
      <img src={articles[2].image} className="w-full h-full object-cover" />
    </div>
    <p className="text-xs text-gray-500 mb-1">{articles[2].time}</p>
    <h3 className="text-lg font-medium">{articles[2].title}</h3>
    <p className="text-sm italic text-gray-600">{articles[2].category}</p>
    <p className="text-sm text-gray-700 mt-2">{articles[2].desc}</p>
  </div>

  {/* CARD 4 */}
  <div className="w-full sm:w-[48%] lg:w-[23%]" onClick={() => navigate("/archives_details")}>
    <div className="h-[480px] overflow-hidden mb-4">
      <img src={articles[3].image} className="w-full h-full object-cover" />
    </div>
    <p className="text-xs text-gray-500 mb-1">{articles[3].time}</p>
    <h3 className="text-lg font-medium">{articles[3].title}</h3>
    <p className="text-sm italic text-gray-600">{articles[3].category}</p>
    <p className="text-sm text-gray-700 mt-2">{articles[3].desc}</p>
  </div>

  {/* ROW 2 */}

  <div className="w-full translate-y-[-45%] sm:w-[48%] lg:w-[23%]" onClick={() => navigate("/archives_details")}>
    <div className="h-[480px] overflow-hidden mb-4">
      <img src={articles[4].image} className="w-full h-full object-cover" />
    </div>
    <p className="text-xs text-gray-500 mb-1">{articles[4].time}</p>
    <h3 className="text-lg font-medium">{articles[4].title}</h3>
    <p className="text-sm italic text-gray-600">{articles[4].category}</p>
    <p className="text-sm text-gray-700 mt-2">{articles[4].desc}</p>
  </div>

  <div className="w-full sm:w-[48%] translate-y-[-20%] lg:w-[23%]" onClick={() => navigate("/archives_details")}>
    <div className="h-[380px] overflow-hidden mb-4">
      <img src={articles[5].image} className="w-full h-full object-cover" />
    </div>
    <p className="text-xs text-gray-500 mb-1">{articles[5].time}</p>
    <h3 className="text-lg font-medium">{articles[5].title}</h3>
    <p className="text-sm italic text-gray-600">{articles[5].category}</p>
    <p className="text-sm text-gray-700 mt-2">{articles[5].desc}</p>
  </div>

  <div className="w-full sm:w-[48%] lg:w-[23%]" onClick={() => navigate("/archives_details")}>
    <div className="h-[520px] translate-y-[-42%] overflow-hidden ">
      <img src={articles[6].image} className="w-full h-full object-cover" />
    </div>
    <div className="translate-y-[-150%]">
      <p className="text-xs text-gray-500 mb-1">{articles[6].time}</p>
      <h3 className="text-lg font-medium">{articles[6].title}</h3>
      <p className="text-sm italic text-gray-600">{articles[6].category}</p>
      <p className="text-sm text-gray-700 mt-2">{articles[6].desc}</p>
    </div>
  </div>

  <div className="w-full sm:w-[48%] lg:w-[23%]" onClick={() => navigate("/archives_details")}>
    <div className="h-[340px] overflow-hidden mb-4">
      <img src={articles[7].image} className="w-full h-full object-cover" />
    </div>
    <p className="text-xs text-gray-500 mb-1">{articles[7].time}</p>
    <h3 className="text-lg font-medium">{articles[7].title}</h3>
    <p className="text-sm italic text-gray-600">{articles[7].category}</p>
    <p className="text-sm text-gray-700 mt-2">{articles[7].desc}</p>
  </div>
<div className="w-full flex justify-center">
        <p className="font-normal text-center w-[75%]">Philosophy has to proceed comparatively.
  The best we can do is to develope the rival 
  alternative conceptions in each important domain
  as fully and carefully as possible, depending 
  on our antecedent sympathies, and see how 
  they measure up. That is a more credible form
  of progress than decisive proof or refutation.
  In the present climate of a dominant scientific naturalism, heavily dependent on speculative </p>
     </div>
</div>



      )}

     
    </section>
  );
};

export default ArchiveSection;