import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LuMusic4 } from "react-icons/lu";
import { FaUsers, FaRegImages, FaUser, FaCog } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMusicOptions, setShowMusicOptions] = useState(false);
  const [showNFTOptions, setShowNFTOptions] = useState(false);

  // Toggle music options when Music is clicked
  const handleMusicClick = () => {
    setShowMusicOptions(!showMusicOptions);
    setShowNFTOptions(false); // Hide NFT options if visible
    if (!showMusicOptions) {
      navigate("/");
    }
  };

  // Toggle NFT options when NFTs is clicked
  const handleNFTClick = () => {
    setShowNFTOptions(!showNFTOptions);
    setShowMusicOptions(false); // Hide music options if visible
    if (!showNFTOptions) {
      navigate("/nfts");
    }
  };

  // Hide options when navigating away from related pages
  React.useEffect(() => {
    if (
      !["/", "/music", "/video", "/explore", "/library"].includes(
        location.pathname
      )
    ) {
      setShowMusicOptions(false);
    }
    if (
      ![
        "/nfts",
        "/nfts",
        "/marketplace",
        "/nfts/collection",
        "/nfts/history",
      ].includes(location.pathname)
    ) {
      setShowNFTOptions(false);
    }
  }, [location.pathname]);

  return (
    <header className="fixed bottom-0 w-full max-w-[400px] mx-auto px-5 z-10">
      {/* Music Extra Options (Shows on Click) */}
      {showMusicOptions && (
        <div className="bg-white rounded-xl p-1 flex justify-between mb-1">
          <button
            className={`p-1 py-2 rounded-md ${
              location.pathname === "/" ? "bg-red-500 text-white" : "bg-white"
            }`}
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button
            className={`p-1 py-2 rounded-md ${
              location.pathname === "/music"
                ? "bg-red-500 text-white"
                : "bg-white"
            }`}
            onClick={() => navigate("/music")}
          >
            Music
          </button>
          <button
            className={`p-1 py-2 rounded-md ${
              location.pathname === "/video"
                ? "bg-red-500 text-white"
                : "bg-white"
            }`}
            onClick={() => navigate("/video")}
          >
            Videos
          </button>
          <button
            className={`p-1 py-2 rounded-md ${
              location.pathname === "/explore"
                ? "bg-red-500 text-white"
                : "bg-white"
            }`}
            onClick={() => navigate("/explore")}
          >
            Explore
          </button>
          <button
            className={`p-1 py-2 rounded-md ${
              location.pathname === "/library"
                ? "bg-red-500 text-white"
                : "bg-white"
            }`}
            onClick={() => navigate("/library")}
          >
            Library
          </button>
        </div>
      )}

      {/* NFT Extra Options (Shows on Click) */}
      {showNFTOptions && (
        <div className="bg-white rounded-xl p-1 flex justify-between mb-1">
          <button
            className={`p-1 py-2 rounded-md ${
              location.pathname === "/nfts"
                ? "bg-red-500 text-white"
                : "bg-white"
            }`}
            onClick={() => navigate("/nfts")}
          >
            Home
          </button>
          <button
            className={`p-1 py-2 rounded-md ${
              location.pathname === "/marketplace"
                ? "bg-red-500 text-white"
                : "bg-white"
            }`}
            onClick={() => navigate("/marketplace")}
          >
            Marketplace
          </button>
          <button
            className={`p-1 py-2 rounded-md ${
              location.pathname === "/nfts/collection"
                ? "bg-red-500 text-white"
                : "bg-white"
            }`}
            onClick={() => navigate("/nfts/collection")}
          >
            Collection
          </button>
          <button
            className={`p-1 py-2 rounded-md ${
              location.pathname === "/nfts/history"
                ? "bg-red-500 text-white"
                : "bg-white"
            }`}
            onClick={() => navigate("/nfts/history")}
          >
            History
          </button>
        </div>
      )}

      {/* Main Navigation Buttons */}
      <main className="border rounded-2xl p-3 mb-3 bg-white flex gap-2 justify-between">
        <button
          onClick={handleMusicClick}
          className={`flex flex-col items-center ${
            location.pathname === "/music"
              ? "bg-red-500 text-white rounded-md px-2 py-1"
              : ""
          }`}
        >
          <LuMusic4 />
          <p>Music</p>
        </button>
        <button
          onClick={() => navigate("/community")}
          className={`flex flex-col items-center ${
            location.pathname === "/community"
              ? "bg-red-500 text-white rounded-md px-2 py-1"
              : ""
          }`}
        >
          <FaUsers />
          <p>Community</p>
        </button>
        <button
          onClick={handleNFTClick}
          className={`flex flex-col items-center ${
            location.pathname === "/nfts"
              ? "bg-red-500 text-white rounded-md px-2 py-1"
              : ""
          }`}
        >
          <FaRegImages />
          <p>NFTs</p>
        </button>
        <button
          onClick={() => navigate("/profile")}
          className={`flex flex-col items-center ${
            location.pathname === "/profile"
              ? "bg-red-500 text-white rounded-md px-2 py-1"
              : ""
          }`}
        >
          <FaUser />
          <p>Profile</p>
        </button>
        <button
          onClick={() => navigate("/settings")}
          className={`flex flex-col items-center ${
            location.pathname === "/settings"
              ? "bg-red-500 text-white rounded-md px-2 py-1"
              : ""
          }`}
        >
          <FaCog />
          <p>Settings</p>
        </button>
      </main>
    </header>
  );
};

export default Header;
