const CollageSection = () => {
  return (
   <section className="h-screen mb-35 py-10"style={{ fontFamily: "Gordita, sans-serif" }}>

    <h1 className="text-5xl ms-15">Our Store</h1>
  <div className="h-full max-w-8xl mx-auto grid mt-20 grid-cols-6 grid-rows-3 gap-1 mb-10">

    {/* TEXT */}
    <div className="col-span-1 row-span-1 bg-white p-2 flex flex-col items-center">
       
      <p className=" text-gray-900 font-light mt-3 w-[204px] text-sm leading-4">
        Philosophy has to proceed comparatively.
The best we can do is to develope the rival 
alternative conceptions in each important domain
as fully and carefully as possible, depending 
on our antecedent sympathies, and see how 
they measure up. That is a more credible form
of progress than decisive proof or refutation.

      </p>
    </div>
    <div className="col-span-1 row-span-1 overflow-hidden">
      <div className="grid grid-cols-2 gap-1">
        <div>
            <img src="https://i.pinimg.com/1200x/3c/02/ab/3c02ab9b8c89130a3b61f1f503083457.jpg"
           className="w-full h-full object-cover hover:scale-[1.08] transition-all 500ms ease-in-out" />
        </div>

        <div>
            <img src="https://i.pinimg.com/1200x/2f/24/a8/2f24a8538e9399a7c7d68f5ba8a3b546.jpg"
           className="w-full h-full object-cover hover:scale-[1.08] transition-all 500ms ease-in-out" />
        </div>
      </div>
    </div>

    {/* TOP IMAGE 1 */}
    <div className="col-span-2 row-span-1 overflow-hidden">
      <img src="https://i.pinimg.com/1200x/ef/d5/3a/efd53abea395f524bad7702c857ddec0.jpg"
           className="w-full h-full object-cover hover:scale-[1.08] transition-all 500ms ease-in-out" />
    </div>

    {/* TOP IMAGE 2 (REDUCED WIDTH) */}
    <div className="col-span-1 row-span-1 overflow-hidden">
      <img src="https://i.pinimg.com/736x/79/33/d9/7933d9804049b95a1cdc9db0e3c590ae.jpg"
           className="w-full h-full object-cover hover:scale-[1.08] transition-all 500ms ease-in-out" />
    </div>

    {/* KNIFE IMAGE — NOW REACHES TOP */}
    <div className="col-span-1 row-span-3 overflow-hidden">
      <img src="https://i.pinimg.com/736x/74/a3/ad/74a3addf21fae9966786ee0ecd205946.jpg"
           className="w-full h-full object-cover hover:scale-[1.08] transition-all 500ms ease-in-out" />
    </div>

    {/* ROW 2 SMALL IMAGES */}
    <div className="col-span-1 row-span-2 overflow-hidden">
      <img src="https://i.pinimg.com/1200x/9f/03/3a/9f033a103624ca100bc116f575f70f91.jpg"
           className="w-full h-full object-cover hover:scale-[1.08] transition-all 500ms ease-in-out" />
    </div>

    {/* <div className=" row-span-1 overflow-hidden">
      <img src="https://i.pinimg.com/736x/48/5b/93/485b937146407780a281b3f6dbcef214.jpg"
           className="w-full h-full object-cover" />
    </div> */}

    {/* BIG FOOD IMAGE */}
    <div className="col-span-2 row-span-1 overflow-hidden ">
      <img src="https://i.pinimg.com/1200x/71/bb/dd/71bbddaadbf21ecaa1bbbb2716936321.jpg"
           className="w-full h-full object-cover object-[50%_20%] hover:scale-[1.08] transition-all 500ms ease-in-out" />
    </div>
     <div className="col-span-1 row-span-1 overflow-hidden">
      <img src="https://i.pinimg.com/736x/48/5b/93/485b937146407780a281b3f6dbcef214.jpg"
           className="w-full h-full object-cover hover:scale-[1.08] transition-all 500ms ease-in-out" />
    </div>

    {/* ROW 3 SMALL IMAGES */}
    <div className="col-span-1 row-span-1 overflow-hidden">
      <img src="https://i.pinimg.com/1200x/e4/a5/87/e4a587ea1d689e5cfd8293835b2eae0b.jpg"
           className="w-full h-full object-cover hover:scale-[1.08] transition-all 500ms ease-in-out" />
    </div>

    <div className="col-span-1 row-span-1 overflow-hidden">
      <img src="https://i.pinimg.com/1200x/94/be/51/94be51d329277d6eb6436c4370f8feff.jpg"
           className="w-full h-full object-cover hover:scale-[1.08] transition-all 500ms ease-in-out" />
    </div>

    {/* CTA — REPLACES PASTA */}
 <div className="col-span-3 row-span-2 bg-white grid grid-cols-2">

  {/* LEFT: 2 STACKED IMAGES (CONSTRAINED TO ROW HEIGHT) */}
  <div className="grid grid-rows-1 overflow-hidden row-span-1 h-full">
    <img
      src="https://i.pinimg.com/736x/ff/ea/71/ffea7149890415a2f41c53eccc644525.jpg"
      className="w-full h-full object-cover hover:scale-[1.08] transition-all 500ms ease-in-out"
    />
  
  </div>

  {/* RIGHT: CTA TEXT */}
  <div className="flex items-center justify-center text-center">
    <h2 className="text-sm font-light tracking-widest leading-4 p-5 ">
      Philosophy has to proceed comparatively.
The best we can do is to develope the rival 
alternative conceptions in each important domain
as fully and carefully as possible, depending 
on our antecedent sympathies, and see how 
they measure up. That is a more credible form
of progress than decisive proof or refutation.
Darwinian explanations of practically everything, 
and armed to the teeth against attacks from
religion, I have thought it useful to specu
    </h2>
  </div>

</div>



  </div>
</section>


  );
};

export default CollageSection;
