import React, { useState, useRef, useEffect } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";
import { CiShuffle } from "react-icons/ci";
import { ImNext2 } from "react-icons/im";
import { ImPrevious2 } from "react-icons/im";
import { CiShare2 } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

const MusicPlayerModal = ({ music, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateProgress);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const updateProgress = () => {
    const duration = audioRef.current.duration;
    const currentTime = audioRef.current.currentTime;
    const progressPercent = (currentTime / duration) * 100;
    setProgress(progressPercent);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-5">
      <div className="bg-gray-800 rounded-lg p-5 w-full max-w-md text-white">
        <div className="flex justify-between gap-5">
          <h2 className="text-2xl font-bold mb-5">Now Playing</h2>
          <button onClick={onClose} className="bg-red-500 p-3 rounded-full">
            <IoCloseSharp />
          </button>
        </div>

        <img
          src={music.cover}
          alt={music.title}
          className="w-48 h-48 rounded-xl mx-auto mb-5 mt-5"
        />
        <h3 className="text-xl font-semibold text-center">{music.title}</h3>
        <p className="text-gray-400 text-center mb-5">{music.plays} plays</p>
        <div className="w-full bg-gray-700 rounded-full h-2 mb-5">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Music Controls */}
        <main className="px-5 flex justify-between items-center mb-10">
          <button className="text-gray-400 hover:text-white">
            <CiShuffle className="w-6 h-6" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <ImPrevious2 className="w-6 h-6" />
          </button>
          <button
            onClick={togglePlay}
            className="text-green-500 hover:text-green-400"
          >
            {isPlaying ? (
              <FaCirclePause className="w-10 h-10" />
            ) : (
              <FaPlayCircle className="w-10 h-10" />
            )}
          </button>
          <button className="text-gray-400 hover:text-white">
            <ImNext2 className="w-6 h-6" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <CiShare2 className="w-6 h-6" />
          </button>
        </main>

        <audio ref={audioRef} src={`/music/${music.id}.mp3`}></audio>
      </div>
    </div>
  );
};

export default MusicPlayerModal;
