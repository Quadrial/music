import { useState, useEffect } from "react";
import { IoArrowForward } from "react-icons/io5"; // Icons

const Sales = () => {
  const [expanded, setExpanded] = useState({
    musical: false,
    boredApe: false,
    cryptopunk: false,
  });

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetTime = new Date().getTime() + 2 * 60 * 60 * 1000; // 2 hours from now
    return targetTime - new Date().getTime();
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1000 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  const toggleExpand = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="mt-5">
      <h1 className="text-3xl font-semibold">On Sales</h1>
      <h2 className="text-md">Check out top-rated NFTs on sale</h2>

      {/* Sales List 1 */}
      <main className="mt-10 flex flex-col gap-5">
        <figure className="w-full h-auto border-2 rounded-2xl bg-blue-500">
          <img
            src="images/image 97 (1).png"
            alt=""
            className="cover rounded-t-2xl"
          />
          <div className="mt-5 mb-5 px-5 flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">Musical</h2>
            <div className="flex justify-between items-center">
              <figure className="flex flex-row gap-5 items-center">
                <img
                  src="images/image 97 (1).png"
                  alt=""
                  className="cover w-10 h-10 rounded-full"
                />
                <h2>Wizkid FC</h2>
              </figure>
              <button
                className="cursor-pointer border-2 flex items-center rounded-2xl p-2"
                onClick={() => toggleExpand("musical")}
              >
                {expanded.musical ? "Show Less" : "See More"}{" "}
                <IoArrowForward className="w-6 h-6" />
              </button>
            </div>

            {expanded.musical && (
              <section className="flex flex-col gap-5">
                <main className="bg-gray-700 p-5 border-1 border-white rounded-lg flex flex-col items-center">
                  <h2 className="text-lg font-semibold">Auction ends in:</h2>
                  <h3 className="text-2xl font-bold mt-2">
                    {formatTime(timeLeft)}
                  </h3>
                  <button className="mt-3 bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold cursor-pointer">
                    Place Bid
                  </button>
                </main>
                <div className="mt-3 p-3 border border-white bg-gray-700 rounded-lg">
                  <p className="text-sm">
                    A Musical NFT is a unique digital asset that represents
                    ownership or rights to a piece of music or audio content on
                    the blockchain. Just like other NFTs, musical NFTs are
                    one-of-a-kind or part of a limited series, and they can
                    include various elements such as songs, albums, or exclusive
                    soundtracks. When someone purchases a musical NFT, they gain
                    ownership or access to the digital music, often with added
                    benefits such as exclusive listening rights, early access to
                    new tracks, concert tickets, or special editions of the
                    music. The authenticity and ownership of the music are
                    secured through blockchain technology, ensuring that each
                    NFT is traceable and cannot be duplicated. Musical NFTs are
                    often created by artists, record labels, or musicians
                    themselves, providing a new way to monetize music, build fan
                    engagement, and offer unique, collectible experiences for
                    listeners.
                  </p>
                  <h3 className="mt-2 font-semibold">Price: 5.2 ETH</h3>
                </div>
              </section>
            )}
          </div>
        </figure>
      </main>
    </section>
  );
};

export default Sales;
