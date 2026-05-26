import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  "all",
  "cards",
  "Book Marks",
  "Scenes",
  "Words",
  "Calendars",
  "Apparels",
  "Scarfs"
  
];



const posts = [
  {
    id: 1,
    category: "cards",
    title: "heading1",
    excerpt:
      "New technology becoming more ingrained into our everyday encounters.",
    image:
      "https://i.pinimg.com/736x/3c/53/e8/3c53e8992d4634d1538d9b863fcb10f4.jpg",
  },
  {
    id: 2,
    category: "Book Marks",
    title: "getting in the .",
    excerpt:
      "A relaxing few glasses of wine, heavy eyelids, and you’re out.",
    image:
      "https://i.pinimg.com/736x/23/32/a3/2332a33729f2b12203d8583a10b31a33.jpg",
  },
  {
    id: 3,
    category: "Scenes",
    title: "the history of t",
    excerpt:
      "It’s true that innljsndlnaln",
    image:
      "https://i.pinimg.com/736x/7d/b7/45/7db7451973e0ea24ff9dd1ab99a7ed33.jpg",
  },
  {
    id: 4,
    category: "Calendars",
    title: "how design f.",
    excerpt:
      "From curtains and bed sheets",
    image:
      "https://i.pinimg.com/1200x/0f/c8/2d/0fc82dea6e8a4072c1dd16f9b6508136.jpg",
  },
  {
    id: 5,
    category: "Book Marks",
    title: "on being human.",
    excerpt:
      "lorem ipsum litum reipmkjn bduhjjlm",
    image:
      "https://i.pinimg.com/736x/55/4e/9c/554e9c22f267061552fcde9a2e8ba2b2.jpg",
  },
  {
    id: 6,
    category: "cards",
    title: "a guide to setting up study.",
    excerpt:
      "When it’s been a long day and the only thing burning.",
    image:
      "https://i.pinimg.com/1200x/12/6a/e3/126ae372a3833742ca60c0eb7eb36176.jpg",
  },
];

export default function StoreGallery() {
  const [activeCategory, setActiveCategory] = useState("people");
useEffect(()=>{
  setActiveCategory("all")
},[])

const navigate=useNavigate()
  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <section className="max-w-8xl mx-auto px-5 py-16" style={{ fontFamily: "Gordita, sans-serif" }}>

      {/* ===== CATEGORY TABS ===== */}
      <div className="flex flex-wrap justify-center gap-15 text-sm mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`uppercase tracking-wide transition
              ${
                activeCategory === cat
                  ? "text-black border-b border-black"
                  : "text-gray-600 hover:text-black"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ===== GRID ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-15 gap-5 ">

        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col h-full"
            onClick={()=>navigate('/store_checkout')}
          >
            {/* IMAGE */}
            <div className="w-full h-75 overflow-hidden mb-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col flex-grow">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                {post.category}
              </p>

              <h3 className="text-sm font-medium mb-2 leading-snug">
                {post.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed mt-auto">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}

      </div>
    </section>
  );
}
