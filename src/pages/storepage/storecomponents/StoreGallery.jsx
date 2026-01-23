import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  "all",
  "cards",
  "Book Marks",
  "Scenes",
  "Words",
  "Calendars",
  
];



const posts = [
  {
    id: 1,
    category: "cards",
    title: "heading1",
    excerpt:
      "New technology becoming more ingrained into our everyday encounters.",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800",
  },
  {
    id: 2,
    category: "Book Marks",
    title: "getting in the .",
    excerpt:
      "A relaxing few glasses of wine, heavy eyelids, and you’re out.",
    image:
      "https://images.unsplash.com/photo-1514361892635-eae31f1c9c3d?w=800",
  },
  {
    id: 3,
    category: "Scenes",
    title: "the history of t",
    excerpt:
      "It’s true that innljsndlnaln",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800",
  },
  {
    id: 4,
    category: "Calendars",
    title: "how design f.",
    excerpt:
      "From curtains and bed sheets",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800",
  },
  {
    id: 5,
    category: "Book Marks",
    title: "on being human.",
    excerpt:
      "lorem ipsum litum reipmkjn bduhjjlm",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
  },
  {
    id: 6,
    category: "cards",
    title: "a guide to setting up study.",
    excerpt:
      "When it’s been a long day and the only thing burning.",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800",
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
