import { useMemo, useState } from "react";
import { FaHeart, FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import booksImage from "../../../assets/Books.jpg";
import bookmarksImage from "../../../assets/BookMarks.jpg";

const categories = [
  "Books",
  "Bookmarks",
  "Paintings",
  "Tote Bags",
  "Journals",
  "Accessories",
];

const categoryDescriptions = {
  Books: "Thoughtful books selected for slow reading, reflection, and beautiful shelves.",
  Bookmarks: "Elegant page markers made for readers who notice the small details.",
  Paintings: "Art prints and mini paintings that bring softness, color, and character to a room.",
  "Tote Bags": "Everyday canvas companions for books, journals, markets, and creative errands.",
  Journals: "Beautiful notebooks for ideas, sketches, lists, letters, and quiet planning.",
  Accessories: "Small creative objects that make your desk, bag, and rituals feel more personal.",
};

const products = [
  {
    id: 1,
    category: "Books",
    title: "Meditations",
    price: "INR 499",
    note: "Marcus Aurelius on discipline, character, and inner steadiness.",
    image:
      "https://covers.openlibrary.org/b/isbn/9780140449334-L.jpg",
  },
  {
    id: 26,
    category: "Books",
    title: "The Republic",
    price: "INR 599",
    note: "Plato's classic inquiry into justice, truth, and the ideal city.",
    image:
      "https://covers.openlibrary.org/b/isbn/9780140455113-L.jpg",
  },
  {
    id: 27,
    category: "Books",
    title: "Beyond Good and Evil",
    price: "INR 549",
    note: "Nietzsche's sharp challenge to morality, culture, and certainty.",
    image:
      "https://covers.openlibrary.org/b/isbn/9780140449235-L.jpg",
  },
  {
    id: 28,
    category: "Books",
    title: "The Myth of Sisyphus",
    price: "INR 699",
    note: "Albert Camus on absurdity, meaning, and revolt.",
    image:
      "https://covers.openlibrary.org/b/isbn/9780679733737-L.jpg",
  },
  {
    id: 29,
    category: "Books",
    title: "Letters from a Stoic",
    price: "INR 499",
    note: "Seneca's timeless letters on time, desire, grief, and wisdom.",
    image:
      "https://covers.openlibrary.org/b/isbn/9780140442106-L.jpg",
  },
  {
    id: 2,
    category: "Bookmarks",
    title: "Pressed Poetry Bookmark",
    price: "INR 249",
    note: "Textured paper with botanical details.",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 9,
    category: "Bookmarks",
    title: "Vintage Margin Marker",
    price: "INR 199",
    note: "Warm-toned bookmark for annotated paperbacks.",
    image:
      "https://images.unsplash.com/photo-1511108690759-009324a90311?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 10,
    category: "Bookmarks",
    title: "Linen Ribbon Bookmark",
    price: "INR 279",
    note: "Soft fabric ribbon with a minimal studio finish.",
    image:
      "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 11,
    category: "Bookmarks",
    title: "Botanical Page Keeper",
    price: "INR 329",
    note: "Pressed-leaf inspired detail for slow reading.",
    image:
      "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    category: "Paintings",
    title: "Window Light Mini",
    price: "INR 1,499₹",
    note: "Mini painting for desks and shelves.",
    image:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    category: "Tote Bags",
    title: "Reader's Canvas Tote",
    price: "INR 699",
    note: "Heavy cotton canvas with soft ink print.",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 15,
    category: "Tote Bags",
    title: "Cream Studio Tote",
    price: "INR 749",
    note: "Natural canvas tote for books, markets, and slow days.",
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 16,
    category: "Tote Bags",
    title: "Gallery Day Tote",
    price: "INR 899",
    note: "Minimal carryall with an understated editorial mood.",
    image:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 17,
    category: "Tote Bags",
    title: "Bookshop Canvas Bag",
    price: "INR 649",
    note: "A soft everyday tote made for paperbacks and journals.",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    category: "Journals",
    title: "Cream Linen Journal",
    price: "INR 799",
    note: "Lay-flat pages for thoughts and sketches.",
    image:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 18,
    category: "Journals",
    title: "Morning Pages Notebook",
    price: "INR 649",
    note: "A soft-cover journal for daily notes and quiet starts.",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 19,
    category: "Journals",
    title: "Studio Sketch Journal",
    price: "INR 849",
    note: "Blank pages for sketches, studies, and collected ideas.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 20,
    category: "Journals",
    title: "Warm Leather Diary",
    price: "INR 1,199",
    note: "A timeless diary with a textured, intimate feel.",
    image:
      "https://images.unsplash.com/photo-1517971129774-8a2b38fa128e?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 21,
    category: "Journals",
    title: "Desk Notes Set",
    price: "INR 549",
    note: "Minimal notebooks for planning, lists, and fragments.",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    category: "Accessories",
    title: "Literary Sticker Set",
    price: "INR 299",
    note: "Soft neutral stickers for journals, laptops, and letters.",
    image:
      "https://unsplash.com/photos/DvfeBOgxxDk/download?force=true&w=900",
  },
  {
    id: 7,
    category: "Paintings",
    title: "Muted Garden Print",
    price: "INR 1,099₹",
    note: "Archival art print in warm neutral tones.",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 12,
    category: "Paintings",
    title: "Abstract Ochre Study",
    price: "INR 1,299₹",
    note: "Earthy abstract print with a gallery-wall mood.",
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 13,
    category: "Paintings",
    title: "Quiet Landscape Frame",
    price: "INR 1,799₹",
    note: "Soft landscape tones for calm interiors.",
    image:
      "https://images.unsplash.com/photo-1577720580479-7d839d829c73?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 14,
    category: "Paintings",
    title: "Studio Figure Sketch",
    price: "INR 999₹",
    note: "Minimal line study with an editorial feel.",
    image:
      "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 8,
    category: "Accessories",
    title: "Brass Page Clip",
    price: "INR 349",
    note: "A small object for beloved pages.",
    image:
      "https://unsplash.com/photos/wFJYe_LC1vM/download?force=true&w=900",
  },
  {
    id: 22,
    category: "Accessories",
    title: "Wax Seal Note Kit",
    price: "INR 899",
    note: "A warm stationery ritual for letters and gift notes.",
    image:
      "https://unsplash.com/photos/U00ZXRlR3YE/download?force=true&w=900",
  },
  {
    id: 23,
    category: "Accessories",
    title: "Desk Washi Tape Set",
    price: "INR 399",
    note: "Muted paper tapes for journals, scrapbooks, and packages.",
    image:
      "https://unsplash.com/photos/VQwG0sKwsVk/download?force=true&w=900",
  },
  {
    id: 24,
    category: "Accessories",
    title: "Cream Pencil Bundle",
    price: "INR 449",
    note: "A minimal writing set for sketches, margins, and notes.",
    image:
      "https://unsplash.com/photos/G68iZaqtmYc/download?force=true&w=900",
  },
  {
    id: 25,
    category: "Accessories",
    title: "Reading Light Clip",
    price: "INR 599",
    note: "A quiet companion for night reading and travel pages.",
    image:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=85",
  },
];

const ProductCard = ({ product, isSaved, onToggleSave }) => {
  const navigate = useNavigate();

  return (
    <article className="group flex h-full flex-col bg-[#fbfaf7] p-3 transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(23,20,17,0.08)]">
      <div
        className="relative h-[390px] w-full cursor-pointer overflow-hidden bg-[#ede7dc] sm:h-[430px] lg:h-[460px]"
        onClick={() => navigate("/store_checkout")}
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
        />
        <button
          type="button"
          aria-label="Add to wishlist"
          onClick={(event) => {
            event.stopPropagation();
            onToggleSave(product.id);
          }}
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center bg-white/88 text-black transition duration-300 hover:bg-black hover:text-white"
        >
          {isSaved ? <FaHeart className="text-sm" /> : <FaRegHeart className="text-sm" />}
        </button>
        <button
          type="button"
          onClick={(event) => event.stopPropagation()}
          className="absolute bottom-4 left-4 right-4 flex translate-y-3 items-center justify-center gap-2 bg-black px-5 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <FaShoppingBag className="text-xs" />
          Quick Add
        </button>
      </div>

      <div className="flex flex-1 flex-col px-1 py-5">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.35em] text-black/45">
              {product.category}
            </p>
            <h3 className="text-[17px] font-medium leading-tight text-black">
              {product.title}
            </h3>
          </div>
          <p className="shrink-0 text-[12px] font-medium uppercase tracking-[0.18em] text-[#8C3917]">
            {product.price}
          </p>
        </div>
        <p
          className="mt-auto max-w-[92%] text-[14px] leading-6 text-black/60"
          style={{ fontFamily: "'Scope One', serif" }}
        >
          {product.note}
        </p>
      </div>
    </article>
  );
};

const AestheticCollectionBanner = () => (
  <section className="relative overflow-hidden bg-[#171411] px-5 py-20 text-white sm:px-8 md:px-12 lg:px-16">
    <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:7px_7px]" />
    <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div>
        <p className="mb-5 text-[11px] uppercase tracking-[0.42em] text-white/55">
          The Aesthetic Edit
        </p>
        <h2 className="logo-font max-w-xl text-[4.2rem] leading-[0.9] sm:text-[6rem] md:text-[7.5rem]">
          Objects with a quieter kind of beauty.
        </h2>
      </div>

      <div className="relative min-h-[520px]">
        <img
          src="https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=900&q=85"
          alt="Aesthetic books and creative objects"
          className="absolute left-0 top-8 h-[360px] w-[62%] object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=85"
          alt="Journal and stationery"
          className="absolute right-0 top-0 h-[260px] w-[42%] object-cover"
        />
        <div className="absolute bottom-0 right-[8%] w-[58%] bg-[#f4eee4] p-5 text-black shadow-[0_28px_70px_rgba(0,0,0,0.22)]">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=85"
            alt="Warm studio corner"
            className="mb-5 h-[230px] w-full object-cover"
          />
          <p
            className="text-[15px] leading-6 text-black/70"
            style={{ fontFamily: "'Scope One', serif" }}
          >
            Layered for shelves, desks, reading nooks, and little rituals.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default function StoreGallery() {
  const [activeCategory, setActiveCategory] = useState("Books");
  const [savedProducts, setSavedProducts] = useState([]);

  const filteredProducts = useMemo(
    () => products.filter((product) => product.category === activeCategory),
    [activeCategory]
  );

  const visibleProducts = filteredProducts.length ? filteredProducts : products.slice(0, 4);

  const toggleSavedProduct = (id) => {
    setSavedProducts((current) =>
      current.includes(id)
        ? current.filter((productId) => productId !== id)
        : [...current, id]
    );
  };

  return (
    <main className="bg-[#f7f3ed] text-black" style={{ fontFamily: "Gordita, sans-serif" }}>
      <section className="relative overflow-hidden border-b border-black/10 bg-[#f4efe6] px-5 py-16 sm:px-8 md:px-12 lg:px-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(90deg,rgba(23,20,17,0.08)_1px,transparent_1px),linear-gradient(rgba(23,20,17,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-14 bg-black/35" />
              <p className="text-[11px] uppercase tracking-[0.42em] text-black/48">
                Aesthetic Corner
              </p>
            </div>
            <h1 className="max-w-3xl text-[3.8rem] font-medium uppercase leading-[0.9] tracking-wide text-black sm:text-[5.4rem] md:text-[7rem] lg:text-[8.3rem]">
              A Curated Studio Store
            </h1>
            <p className="logo-font mt-4 text-[3rem] leading-none text-[#8C3917] sm:text-[4.2rem] md:text-[5.2rem]">
              for creative souls.
            </p>
            <p
              className="mt-8 max-w-xl text-[17px] leading-8 text-black/66"
              style={{ fontFamily: "'Scope One', serif" }}
            >
              Curated pieces for creative souls. A calm selection of aesthetic
              books, art prints, journals, totes, bookmarks, and small creative
              objects for everyday rituals.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="bg-black px-7 py-4 text-[11px] font-medium uppercase tracking-[0.32em] text-white transition duration-300 hover:bg-[#8C3917]"
              >
                Shop The Edit
              </button>
              <span className="text-[11px] uppercase tracking-[0.34em] text-black/42">
                Books / Prints / Studio Objects
              </span>
            </div>
          </div>

          <div className="relative min-h-[620px]">
            <div className="absolute left-0 top-10 h-[520px] w-[68%] overflow-hidden bg-[#e9dfd0] shadow-[0_35px_90px_rgba(23,20,17,0.14)]">
              <img
                src={booksImage}
                alt="Curated library shelves"
                className="h-full w-full object-cover transition duration-700 hover:scale-[1.025]"
              />
            </div>
            <div className="absolute right-0 top-0 h-[310px] w-[44%] overflow-hidden border-[10px] border-[#f4efe6] bg-[#e9dfd0] shadow-[0_24px_60px_rgba(23,20,17,0.12)]">
              <img
                src={bookmarksImage}
                alt="Bookmarks and reading stationery"
                className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>
            <div className="absolute bottom-6 right-[6%] w-[48%] border border-black/10 bg-[#fbfaf7] p-5 shadow-[0_24px_70px_rgba(23,20,17,0.1)]">
              <p className="text-[11px] uppercase tracking-[0.34em] text-black/42">
                New Arrivals
              </p>
              <p
                className="mt-4 text-[15px] leading-6 text-black/68"
                style={{ fontFamily: "'Scope One', serif" }}
              >
                Soft paper, muted ink, textured canvas, and little things worth
                keeping close❕



              </p>
            </div>
            <div className="absolute bottom-0 left-[12%] flex gap-8 border border-black/10 bg-[#171411] px-7 py-5 text-white shadow-[0_22px_65px_rgba(23,20,17,0.18)]">
              <div>
                <p className="text-2xl font-medium">08</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/55">
                  Edits
                </p>
              </div>
              <div>
                <p className="text-2xl font-medium">42</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/55">
                  Pieces
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-wrap justify-center gap-3 border-y border-black/10 py-5 sm:gap-5">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-3 text-[11px] uppercase tracking-[0.32em] transition duration-300 ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "bg-[#fbfaf7] text-black/65 hover:bg-[#ebe2d3] hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.42em] text-black/45">
              Featured Products
            </p>
            <h2 className="text-[32px] font-medium uppercase leading-none tracking-wide sm:text-[44px]">
              {activeCategory}
            </h2>
          </div>
          <p
            className="max-w-md text-[15px] leading-6 text-black/58"
            style={{ fontFamily: "'Scope One', serif" }}
          >
            {categoryDescriptions[activeCategory]}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isSaved={savedProducts.includes(product.id)}
              onToggleSave={toggleSavedProduct}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8 md:px-12">
        <p className="logo-font text-[3.5rem] leading-[0.95] text-black sm:text-[5rem] md:text-[6.5rem]">
          "Art, stories, and little objects that make life feel softer."
        </p>
      </section>

      <AestheticCollectionBanner />
    </main>
  );
}
