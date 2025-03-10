import { IoIosNotifications } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5"; // Icons
import { useState } from "react";
import Sales from "./Sales";

const Marketplace = () => {
  const [activeTab, setActiveTab] = useState("creators");

  return (
    <section className="px-5 py-10 text-white">
      <main className="flex justify-between">
        {/* Conditional Navigation Button */}
        {activeTab === "creators" ? (
          <button className="text-xl flex items-center gap-2" onClick={() => setActiveTab("sales")}>
            Next <IoArrowForward className="w-6 h-6" />
          </button>
        ) : (
          <button className="text-xl flex items-center gap-2" onClick={() => setActiveTab("creators")}>
            <IoArrowBack className="w-6 h-6" /> Back
          </button>
        )}

        <IoIosNotifications className="w-10 h-10" />
      </main>

      {/* Toggle Buttons */}
      <main className="flex flex-row gap-3 mt-5">
        <button
          className={`text-md font-semibold border rounded-2xl p-3 ${activeTab === "creators" ? "bg-blue-500" : "bg-gray-500"}`}
          onClick={() => setActiveTab("creators")}
        >
          Creators
        </button>
        <button
          className={`text-md font-semibold border rounded-2xl p-3 ${activeTab === "sales" ? "bg-blue-500" : "bg-gray-500"}`}
          onClick={() => setActiveTab("sales")}
        >
          Sales
        </button>
      </main>

      {/* Search Bar */}
      <main className="mt-5">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-10 border-2 rounded-2xl bg-amber-100 border-blue-400 text-black p-5"
        />
      </main>

      {/* Conditional Rendering */}
      {activeTab === "creators" ? (
        <main className="mt-5 flex flex-col gap-5">
          <h1 className="text-3xl font-semibold">Top Creators</h1>
          <h2 className="text-md">Check out top-rated creators on the NFT marketplace</h2>

          {/* Creator List */}
          {[
            { name: "Wizkid NFT", image: "images/image 97.png", sales: "68.34 ETH" },
            { name: "30 BG NFT", image: "images/image 99.png", sales: "55.12 ETH" },
            { name: "Rema NFT", image: "images/rema.png", sales: "42.78 ETH" },
            { name: "Wizkid NFT", image: "images/image 97.png", sales: "68.34 ETH" },
            { name: "30 BG NFT", image: "images/image 99.png", sales: "55.12 ETH" },
            { name: "Rema NFT", image: "images/rema.png", sales: "42.78 ETH" },
          ].map((creator, index) => (
            <figure key={index} className="w-full h-auto border rounded-2xl p-3 flex gap-5 bg-gray-500">
              <img src={creator.image} alt={creator.name} className="w-13 h-13 rounded-2xl" />
              <div className="flex flex-col">
                <h2 className="text-md font-semibold">{creator.name}</h2>
                <div className="flex justify-between">
                  <h2>Total sales:</h2>
                  <h2>{creator.sales}</h2>
                </div>
              </div>
            </figure>
          ))}
        </main>
      ) : (
        <Sales />
      )}
    </section>
  );
};

export default Marketplace;
