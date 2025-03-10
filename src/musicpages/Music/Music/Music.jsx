import React, { useState } from "react";
import { CiShuffle } from "react-icons/ci";
import { FaPlayCircle } from "react-icons/fa";
import MusicPlayerModal from "./MusicPlayerModal";
import ArtistDetailsModal from "./ArtistDetailsModal";

const Music = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [showArtistDetails, setShowArtistDetails] = useState(false);

  const trendingMusic = [
    {
      id: 1,
      title: "Funds (Feat. ODUMODUBLVCK & Chike)",
      plays: "31,000,000",
      cover: "images/rema.png",
    },
    {
      id: 2,
      title: "Calm Down",
      plays: "28,000,000",
      cover: "images/rema.png",
    },
    {
      id: 3,
      title: "Ginger Me",
      plays: "25,000,000",
      cover: "images/rema.png",
    },
    { id: 4, title: "Woman", plays: "22,000,000", cover: "images/rema.png" },
    { id: 5, title: "Bounce", plays: "20,000,000", cover: "images/rema.png" },
  ];

  const artist = {
    name: "Rema",
    image: "images/rema.png",
  };

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  const handleMusicClick = (music) => {
    setSelectedMusic(music);
  };

  const closeMusicModal = () => {
    setSelectedMusic(null);
  };

  const handleArtistDetailsClick = () => {
    setShowArtistDetails(true);
  };

  const closeArtistDetailsModal = () => {
    setShowArtistDetails(false);
  };

  return (
    <main className="mb-40">
      <figure className=""></figure>
      <figure
        className="relative w-full h-50 "
        style={{
          backgroundImage: "url('images/rema.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-0 left-0 right- p-5 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white">Rema</h1>
        </div>
      </figure>
      <section className="mt-5 px-5 text-white flex flex-col gap-5">
        <p className="">7.3M Monthly Listners</p>
        <main className="flex justify-between">
          <figure className="flex flex-row gap-3">
            <img
              src="images/rema.png"
              alt="Rema"
              className="cover rounded-xl border w-12 h-12"
            />
            <button
              onClick={handleFollowClick}
              className="border p-3 rounded-2xl cursor-pointer"
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
            <button
              onClick={handleArtistDetailsClick}
              className="text-xl font-bold cursor-pointer"
            >
              . . .
            </button>
          </figure>
          <figure className="flex flex-row gap-3">
            <CiShuffle className="w-12 h-12" />
            <FaPlayCircle className="w-12 h-12" />
          </figure>
        </main>

        <section className="mt-5 flex flex-row gap-5 text-xl">
          <p>Music</p>
          <p>Events</p>
        </section>

        <section className="mt-5 flex flex-col gap-5">
          <p className="text-2xl font-bold">Trending</p>
          <main className="flex flex-col gap-10">
            {trendingMusic.map((music, index) => (
              <figure
                key={music.id}
                className="flex flex-row items-center gap-3"
                onClick={() => handleMusicClick(music)}
              >
                <p className="text-2xl font-bold">{index + 1}</p>
                <div className="flex justify-between w-full">
                  <main className="flex items-center gap-2">
                    <img
                      src={music.cover}
                      alt="Rema"
                      className="cover rounded-xl border w-12 h-12"
                    />
                    <div className="flex flex-col">
                      <p className="text-[10px]">{music.title}</p>
                      <p className="text-[12px]">{music.plays}</p>
                    </div>
                  </main>
                  <main className="flex items-center gap-2">
                    <button className="text-xl font-bold">. . .</button>
                  </main>
                </div>
              </figure>
            ))}
          </main>
        </section>
      </section>

      {selectedMusic && (
        <MusicPlayerModal music={selectedMusic} onClose={closeMusicModal} />
      )}

      {showArtistDetails && (
        <ArtistDetailsModal artist={artist} onClose={closeArtistDetailsModal} />
      )}
    </main>
  );
};

export default Music;
