import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LuMusic4 } from "react-icons/lu";
import { FaUsers, FaRegImages, FaUser, FaCog, FaChevronDown } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMusicOptions, setShowMusicOptions] = useState(false);
  const [showNFTOptions, setShowNFTOptions] = useState(false);

  // Toggle music options when Music is clicked
  const handleMusicClick = () => {
    setShowMusicOptions(!showMusicOptions);
    setShowNFTOptions(false); // Hide NFT options if visible
  };

  // Toggle NFT options when NFTs is clicked
  const handleNFTClick = () => {
    setShowNFTOptions(!showNFTOptions);
    setShowMusicOptions(false); // Hide music options if visible
  };

  // Hide options when navigating away from related pages
  React.useEffect(() => {
    if (!["/", "/music", "/video", "/explore", "/library"].includes(location.pathname)) {
      setShowMusicOptions(false);
    }
    if (!["/nfts", "/marketplace", "/nfts/collection", "/nfts/history"].includes(location.pathname)) {
      setShowNFTOptions(false);
    }
  }, [location.pathname]);

  return (
    <>
      {/* Mobile Header (Fixed at Bottom) */}
      <header className="fixed bottom-0 w-full max-w-[400px] mx-auto px-5 z-10 md:hidden">
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
                location.pathname === "/music" ? "bg-red-500 text-white" : "bg-white"
              }`}
              onClick={() => navigate("/music")}
            >
              Music
            </button>
            <button
              className={`p-1 py-2 rounded-md ${
                location.pathname === "/video" ? "bg-red-500 text-white" : "bg-white"
              }`}
              onClick={() => navigate("/video")}
            >
              Videos
            </button>
            <button
              className={`p-1 py-2 rounded-md ${
                location.pathname === "/explore" ? "bg-red-500 text-white" : "bg-white"
              }`}
              onClick={() => navigate("/explore")}
            >
              Explore
            </button>
            <button
              className={`p-1 py-2 rounded-md ${
                location.pathname === "/library" ? "bg-red-500 text-white" : "bg-white"
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
                location.pathname === "/nfts" ? "bg-red-500 text-white" : "bg-white"
              }`}
              onClick={() => navigate("/nfts")}
            >
              NFTs
            </button>
            <button
              className={`p-1 py-2 rounded-md ${
                location.pathname === "/marketplace" ? "bg-red-500 text-white" : "bg-white"
              }`}
              onClick={() => navigate("/marketplace")}
            >
              Marketplace
            </button>
            <button
              className={`p-1 py-2 rounded-md ${
                location.pathname === "/nfts/collection" ? "bg-red-500 text-white" : "bg-white"
              }`}
              onClick={() => navigate("/nfts/collection")}
            >
              Collection
            </button>
            <button
              className={`p-1 py-2 rounded-md ${
                location.pathname === "/nfts/history" ? "bg-red-500 text-white" : "bg-white"
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
              location.pathname === "/music" ? "bg-red-500 text-white rounded-md px-2 py-1" : ""
            }`}
          >
            <LuMusic4 />
            <p>Music</p>
          </button>
          <button
            onClick={() => navigate("/community")}
            className={`flex flex-col items-center ${
              location.pathname === "/community" ? "bg-red-500 text-white rounded-md px-2 py-1" : ""
            }`}
          >
            <FaUsers />
            <p>Community</p>
          </button>
          <button
            onClick={handleNFTClick}
            className={`flex flex-col items-center ${
              location.pathname === "/nfts" ? "bg-red-500 text-white rounded-md px-2 py-1" : ""
            }`}
          >
            <FaRegImages />
            <p>NFTs</p>
          </button>
          <button
            onClick={() => navigate("/profile")}
            className={`flex flex-col items-center ${
              location.pathname === "/profile" ? "bg-red-500 text-white rounded-md px-2 py-1" : ""
            }`}
          >
            <FaUser />
            <p>Profile</p>
          </button>
          <button
            onClick={() => navigate("/settings")}
            className={`flex flex-col items-center ${
              location.pathname === "/settings" ? "bg-red-500 text-white rounded-md px-2 py-1" : ""
            }`}
          >
            <FaCog />
            <p>Settings</p>
          </button>
        </main>
      </header>

      {/* Tablet and Desktop Header (Fixed at Top) */}
      <header className="hidden md:block fixed top-0 w-full bg-white shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo or Brand */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">Decent</h1>
            </div>

            {/* Navigation Links */}
            <nav className="flex space-x-8">
              {/* Music Dropdown */}
              <div className="relative">
                <button
                  onClick={handleMusicClick}
                  className={`flex items-center space-x-2 ${
                    location.pathname.startsWith("/") ? "text-red-500" : "text-gray-700"
                  }`}
                >
                  <LuMusic4 />
                  <span>Music</span>
                  <FaChevronDown className="w-4 h-4" />
                </button>
                {showMusicOptions && (
                  <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg">
                    <button
                      onClick={() => navigate("/")}
                      className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                      Home
                    </button>
                    <button
                      onClick={() => navigate("/music")}
                      className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                      Music
                    </button>
                    <button
                      onClick={() => navigate("/video")}
                      className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                      Videos
                    </button>
                    <button
                      onClick={() => navigate("/explore")}
                      className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                      Explore
                    </button>
                    <button
                      onClick={() => navigate("/library")}
                      className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                      Library
                    </button>
                  </div>
                )}
              </div>

              {/* NFTs Dropdown */}
              <div className="relative">
                <button
                  onClick={handleNFTClick}
                  className={`flex items-center space-x-2 ${
                    location.pathname.startsWith("/nfts") ? "text-red-500" : "text-gray-700"
                  }`}
                >
                  <FaRegImages />
                  <span>NFTs</span>
                  <FaChevronDown className="w-4 h-4" />
                </button>
                {showNFTOptions && (
                  <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg">
                    <button
                      onClick={() => navigate("/nfts")}
                      className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                      NFTs
                    </button>
                    <button
                      onClick={() => navigate("/marketplace")}
                      className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                      Marketplace
                    </button>
                    <button
                      onClick={() => navigate("/nfts/collection")}
                      className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                      Collection
                    </button>
                    <button
                      onClick={() => navigate("/nfts/history")}
                      className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                      History
                    </button>
                  </div>
                )}
              </div>

              {/* Community Link */}
              <button
                onClick={() => navigate("/community")}
                className={`flex items-center space-x-2 ${
                  location.pathname === "/community" ? "text-red-500" : "text-gray-700"
                }`}
              >
                <FaUsers />
                <span>Community</span>
              </button>

              {/* Profile Link */}
              <button
                onClick={() => navigate("/profile")}
                className={`flex items-center space-x-2 ${
                  location.pathname === "/profile" ? "text-red-500" : "text-gray-700"
                }`}
              >
                <FaUser />
                <span>Profile</span>
              </button>

              {/* Settings Link */}
              <button
                onClick={() => navigate("/settings")}
                className={`flex items-center space-x-2 ${
                  location.pathname === "/settings" ? "text-red-500" : "text-gray-700"
                }`}
              >
                <FaCog />
                <span>Settings</span>
              </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;