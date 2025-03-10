import React from "react";

const Explorer = () => {
  return (
    <main className="py-10 text-white">
      <p className="text-2xl font-semibold">Explorer</p>

      <section>
        <h1 className="text-xl font-semibold mt-20">Discover something new</h1>
        <main className=" flex justify-between gap-5 mt-5">
          <img src="images/hipop.png" alt="" className="cover w-25 h-30" />
          <img src="images/yoruba.png" alt="" className="cover w-25 h-30" />
          <img src="images/Frame 1.png" alt="" className="cover w-25 h-30" />
        </main>
      </section>

      <section>
        <h1 className="text-xl font-semibold mt-20">Browse all</h1>
        <main className=" grid grid-cols-2 gap-5 mt-5">
          <img src="images/Frame 2.png" alt="" className="cover" />
          <img src="images/Frame 3.png" alt="" className="cover" />
          <img src="images/Frame 5.png" alt="" className="cover" />
          <img src="images/Frame 6.png" alt="" className="cover" />
          <img src="images/Frame 5.png" alt="" className="cover" />
          <img src="images/Frame 3.png" alt="" className="cover" />
          <img src="images/Frame 2.png" alt="" className="cover" />
          <img src="images/Frame 3.png" alt="" className="cover" />
          <img src="images/Frame 5.png" alt="" className="cover" />
          <img src="images/Frame 6.png" alt="" className="cover" />
          <img src="images/Frame 5.png" alt="" className="cover" />
          <img src="images/Frame 3.png" alt="" className="cover" />
        </main>
      </section>
    </main>
  );
};

export default Explorer;
