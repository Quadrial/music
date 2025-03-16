import { IoIosNotifications } from "react-icons/io";

const NFTs = () => {
  return (
    <section className="px-5 py-10 text-white mb-30 max-w-7xl mx-auto">
      {/* Header Section */}
      <main className="flex justify-between items-center">
        <button className="border p-2 rounded-md hover:bg-blue-500 transition-colors">
          Connect Wallet
        </button>
        <IoIosNotifications className="w-10 h-10 hover:text-blue-500 cursor-pointer" />
      </main>

      {/* Search Bar */}
      <main className="mt-5">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-12 border-2 rounded-2xl bg-amber-100 border-blue-400 text-black p-4 focus:outline-none focus:border-blue-500"
        />
      </main>

      {/* Hero Section */}
      <main className="mt-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          Discover Digital Art & Collect NFTs
        </h1>
        <h2 className="text-md md:text-lg lg:text-xl mt-3 text-gray-300">
          NFTs have transformed how digital art is bought, sold, and collected,
          offering a new way for artists to monetize their creations and for
          collectors to own unique digital pieces.
        </h2>
      </main>

      {/* NFT Cards Section */}
      <main className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* NFT Card 1 */}
        <figure className="w-full h-auto border-2 rounded-2xl bg-blue-500 overflow-hidden hover:shadow-lg hover:shadow-blue-500/50 transition-shadow">
          <img
            src="images/image 92.png"
            alt="Rare Bored Ape"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="text-2xl font-semibold">Rare Bored Ape</h2>
            <figure className="flex items-center gap-3 mt-3">
              <img
                src="images/rema.png"
                alt="Rema FC"
                className="w-10 h-10 rounded-full"
              />
              <h2 className="text-lg">Rema FC</h2>
            </figure>
            <main className="flex justify-between mt-5">
              <div className="flex flex-col">
                <h3 className="text-gray-300">Price</h3>
                <h3 className="text-lg font-semibold">1.48 ETH</h3>
              </div>
              <div className="flex flex-col">
                <h3 className="text-gray-300">Highest Bid</h3>
                <h3 className="text-lg font-semibold">1.3 ETH</h3>
              </div>
            </main>
          </div>
        </figure>

        {/* NFT Card 2 */}
        <figure className="w-full h-auto border-2 rounded-2xl bg-blue-500 overflow-hidden hover:shadow-lg hover:shadow-blue-500/50 transition-shadow">
          <img
            src="images/image 93.png"
            alt="Rare Bored Ape"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="text-2xl font-semibold">Rare Bored Ape</h2>
            <figure className="flex items-center gap-3 mt-3">
              <img
                src="images/rema.png"
                alt="Rema FC"
                className="w-10 h-10 rounded-full"
              />
              <h2 className="text-lg">Rema FC</h2>
            </figure>
            <main className="flex justify-between mt-5">
              <div className="flex flex-col">
                <h3 className="text-gray-300">Price</h3>
                <h3 className="text-lg font-semibold">1.48 ETH</h3>
              </div>
              <div className="flex flex-col">
                <h3 className="text-gray-300">Highest Bid</h3>
                <h3 className="text-lg font-semibold">1.3 ETH</h3>
              </div>
            </main>
          </div>
        </figure>

        {/* NFT Card 3 */}
        <figure className="w-full h-auto border-2 rounded-2xl bg-blue-500 overflow-hidden hover:shadow-lg hover:shadow-blue-500/50 transition-shadow">
          <img
            src="images/image 92.png"
            alt="Rare Bored Ape"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="text-2xl font-semibold">Rare Bored Ape</h2>
            <figure className="flex items-center gap-3 mt-3">
              <img
                src="images/rema.png"
                alt="Rema FC"
                className="w-10 h-10 rounded-full"
              />
              <h2 className="text-lg">Rema FC</h2>
            </figure>
            <main className="flex justify-between mt-5">
              <div className="flex flex-col">
                <h3 className="text-gray-300">Price</h3>
                <h3 className="text-lg font-semibold">1.48 ETH</h3>
              </div>
              <div className="flex flex-col">
                <h3 className="text-gray-300">Highest Bid</h3>
                <h3 className="text-lg font-semibold">1.3 ETH</h3>
              </div>
            </main>
          </div>
        </figure>
      </main>
    </section>
  );
};

export default NFTs;