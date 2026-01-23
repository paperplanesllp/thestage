import React from "react";

const AboutContents = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

      

        {/* Title */}
        <h2 className="mt-6 text-3xl md:text-4xl font-serif font-medium text-gray-900 tracking-wide">
          Our Story
        </h2>

       

        {/* Divider */}
        <div className="my-8 h-px bg-gray-200 w-full" />

        {/* Two-column editorial text */}
     <div
  className="grid w-full grid-cols-1 md:grid-cols-2    justify-items-center"
  style={{ fontFamily: "Gordita, sans-serif" }}
>
  <p className="text-black font-light text-sm leading-4.5 text-[15px] w-[80%] text-justify">
    Rolling hills, golden fields, and historic villages define the
    timeless beauty of Val de Chiana. This region blends natural
    landscapes with centuries of cultural heritage, offering a peaceful
    yet inspiring escape. Ancient pathways wind through olive groves
    and cultivated land, shaping a rhythm that has endured for
    generations. Lorem ipsum dolor, sit amet consectetur adipisicing
    elit. Enim delectus minima quaerat numquam culpa vel. Ratione ex
    ullam totam aliquam aspernatur tempora iusto aperiam sint, alias
    blanditiis placeat libero ad.
  </p>

  <p className="text-black font-light text-sm leading-4.5 text-[15px] w-[80%] text-justify">
    The towns that rise from the valley reflect a deep connection
    between architecture and landscape. Stone walls, quiet streets,
    and open horizons create a balance between intimacy and scale,
    where history and everyday life coexist under the Tuscan sky.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
    blanditiis ullam facilis ad magnam maiores. Ut aperiam beatae
    reprehenderit dolore expedita quae et atque explicabo. Architecto
    voluptatibus nihil porro perspiciatis.
  </p>
</div>


       

      </div>
    </section>
  );
};

export default AboutContents;
