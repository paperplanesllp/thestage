import { useEffect } from "react";

const StoreCheckout = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <section className=" mx-auto px-16 py-35 bg-[#f6f4ef] font-serif text-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

        {/* ===== LEFT: MAIN BOOK IMAGE ===== */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80"
            alt="Book cover"
            className="w-[70%] h-[70vh] object-contain"
          />
        </div>

        {/* ===== RIGHT: DETAILS ===== */}
        <div className="space-y-8">

          {/* TITLE */}
          <h1 className="text-2xl font-medium">
            The Practice of Becoming
          </h1>

          {/* META */}
          <p className="text-xs tracking-wide uppercase text-gray-500">
            ISBN: 978-1-4028-9462-6 · <span className="text-green-700">In Stock</span>
          </p>

          {/* PRICE */}
          <p className="text-3xl font-semibold text-[#c08b7c]">
            $29.99
          </p>

          {/* ===== SMALL BOOK IMAGE UNDER PRICE ===== */}
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80"
            alt="Book preview"
            className="w-32 mt-4"
          />

          {/* ===== BOOK DETAILS GRID ===== */}
          <div className="grid grid-cols-2 gap-y-6 gap-x-10 text-sm">

            <div>
              <p className="text-gray-400 uppercase text-xs">Author</p>
              <p>Elena Marrow</p>
            </div>

            <div>
              <p className="text-gray-400 uppercase text-xs">Edition</p>
              <p>Second Edition</p>
            </div>

            <div>
              <p className="text-gray-400 uppercase text-xs">Pages</p>
              <p>384 pages</p>
            </div>

            <div>
              <p className="text-gray-400 uppercase text-xs">Language</p>
              <p>English</p>
            </div>

            <div>
              <p className="text-gray-400 uppercase text-xs">Published</p>
              <p>March 2023</p>
            </div>

            <div>
              <p className="text-gray-400 uppercase text-xs">Format</p>
              <p>Hardcover</p>
            </div>
          </div>

          {/* ===== ACTION BUTTONS ===== */}
          <div className="flex gap-4 pt-6">
            <div className="flex items-center border px-4 py-2 text-sm">
              <button className="px-2">−</button>
              <span className="px-3">1</span>
              <button className="px-2">+</button>
            </div>

            <button className="px-8 py-2 bg-black text-white text-sm tracking-wide">
              ADD TO CART
            </button>

            <button className="px-8 py-2 border text-sm tracking-wide">
              BUY NOW
            </button>
          </div>

          {/* SHARE */}
          <p className="text-xs text-gray-400 pt-4">
            Share · Facebook · Twitter · Pinterest
          </p>

        </div>
      </div>
    </section>
  );
};

export default StoreCheckout;
