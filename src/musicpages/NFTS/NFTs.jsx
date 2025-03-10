import { IoIosNotifications } from "react-icons/io";

const NFTs = () => {
  return (
    <section className="px-5 py-10 text-white">
      <main className="flex justify-between ">
        <button className="border p-1 rounded-md">Connect Wallet</button>
        <IoIosNotifications className="w-10 h-10" />
      </main>
      <main className="mt-5">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-10 border-2 rounded-2xl bg-amber-100 border-blue-400 text-black p-5"
        />
      </main>

      <main className="mt-5 flex flex-col gap-5">
        <h1 className="text-3xl font-semibold">
          Discover Digital Art & Collect NFTs
        </h1>
        <h2 className="text-md">
          NFTs have transformed now digital art is brought, sold, and collected,
          offering a new way for artists to monetize their creations and for
          collectors to own unique digital pieces
        </h2>
      </main>

      <main className="mt-10 flex flex-col gap-5">
        <figure className="w-full h-auto border-2 rounded-2xl bg-blue-500">
          <img
            src="images/image 92.png"
            alt=""
            className="cover rounded-t-2xl"
          />
          <div className="mt-5 mb-5 px-5 flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">Rare Bored Ape</h2>
            <figure className="flex flex-row gap-5 items-center">
              <img
                src="images/rema.png"
                alt=""
                className="cover w-10 h-10 rounded-full"
              />
              <h2 className="">Rema FC</h2>
            </figure>
            <main className="flex justify-between">
              <div className="flex flex-col">
                <h3>Price</h3>
                <h3>1.48 ETH</h3>
              </div>
              <div className="flex flex-col">
                <h3>Highest Bid</h3>
                <h3>1.3 ETH</h3>
              </div>
            </main>
          </div>
        </figure>
      </main>
      <main className="mt-10 flex flex-col gap-5">
        <figure className="w-full h-auto border-2 rounded-2xl bg-blue-500">
          <img
            src="images/image 93.png"
            alt=""
            className="cover rounded-t-2xl"
          />
          <div className="mt-5 mb-5 px-5 flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">Rare Bored Ape</h2>
            <figure className="flex flex-row gap-5 items-center">
              <img
                src="images/rema.png"
                alt=""
                className="cover w-10 h-10 rounded-full"
              />
              <h2 className="">Rema FC</h2>
            </figure>
            <main className="flex justify-between">
              <div className="flex flex-col">
                <h3>Price</h3>
                <h3>1.48 ETH</h3>
              </div>
              <div className="flex flex-col">
                <h3>Highest Bid</h3>
                <h3>1.3 ETH</h3>
              </div>
            </main>
          </div>
        </figure>
      </main>
      <main className="mt-10 flex flex-col gap-5">
        <figure className="w-full h-auto border-2 rounded-2xl bg-blue-500">
          <img
            src="images/image 92.png"
            alt=""
            className="cover rounded-t-2xl"
          />
          <div className="mt-5 mb-5 px-5 flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">Rare Bored Ape</h2>
            <figure className="flex flex-row gap-5 items-center">
              <img
                src="images/rema.png"
                alt=""
                className="cover w-10 h-10 rounded-full"
              />
              <h2 className="">Rema FC</h2>
            </figure>
            <main className="flex justify-between">
              <div className="flex flex-col">
                <h3>Price</h3>
                <h3>1.48 ETH</h3>
              </div>
              <div className="flex flex-col">
                <h3>Highest Bid</h3>
                <h3>1.3 ETH</h3>
              </div>
            </main>
          </div>
        </figure>
      </main>
    </section>
  );
};

export default NFTs;
