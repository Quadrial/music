import React from "react";

const Explorer = () => {
  return (
    <main className="py-10 text-white mb-40 lg:mt-20 md:mt-20 px-5 lg:px-20">
      {/* Header Section */}
      <p className="text-2xl font-semibold">Explorer</p>

      {/* Discover Section */}
      <section className="mt-20">
        <h1 className="text-xl font-semibold">Discover something new</h1>
        <main className="flex flex-row lg:flex-row md:flex-row justify-between gap-5 mt-5">
          <img
            src="images/hipop.png"
            alt="Hip Hop"
            className="w-25 h-30 lg:w-full md:w-full md:w-1/3 md:h-60 lg:h-80 object-cover rounded-lg"
          />
          <img
            src="images/yoruba.png"
            alt="Yoruba"
            className="w-25 h-30 lg:w-full md:w-full md:w-1/3 md:h-60 lg:h-80 object-cover rounded-lg"
          />
          <img
            src="images/Frame 1.png"
            alt="Frame 1"
            className="w-25 h-30 lg:w-full md:w-full md:w-1/3 md:h-60 lg:h-80 object-cover rounded-lg"
          />
        </main>
      </section>

      {/* Browse All Section */}
      <section className="mt-10">
        <h1 className="text-xl font-semibold">Browse all</h1>
        <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
          <img
            src="images/Frame 2.png"
            alt="Frame 2"
            className="md:h-46 object-cover rounded-lg"
          />
          <img
            src="images/Frame 3.png"
            alt="Frame 3"
            className="md:h-46 object-cover rounded-lg"
          />
          <img
            src="images/Frame 5.png"
            alt="Frame 5"
            className="md:h-46 object-cover rounded-lg"
          />
          <img
            src="images/Frame 6.png"
            alt="Frame 6"
            className="md:h-46 object-cover rounded-lg"
          />
          <img
            src="images/Frame 5.png"
            alt="Frame 5"
            className="md:h-46 object-cover rounded-lg"
          />
          <img
            src="images/Frame 3.png"
            alt="Frame 3"
            className="md:h-46 object-cover rounded-lg"
          />
          <img
            src="images/Frame 2.png"
            alt="Frame 2"
            className="md:h-46 object-cover rounded-lg"
          />
          <img
            src="images/Frame 3.png"
            alt="Frame 3"
            className="md:h-46 object-cover rounded-lg"
          />
          <img
            src="images/Frame 5.png"
            alt="Frame 5"
            className="md:h-46 object-cover rounded-lg"
          />
          <img
            src="images/Frame 6.png"
            alt="Frame 6"
            className="md:h-46 object-cover rounded-lg"
          />
          <img
            src="images/Frame 5.png"
            alt="Frame 5"
            className="md:h-46 object-cover rounded-lg"
          />
          <img
            src="images/Frame 3.png"
            alt="Frame 3"
            className="md:h-46 object-cover rounded-lg"
          />
        </main>
      </section>
    </main>
  );
};

export default Explorer;