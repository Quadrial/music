import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineStop } from "react-icons/ai";
import { MdReportGmailerrorred } from "react-icons/md";
import { SlUserFollow, SlUserUnfollow } from "react-icons/sl";

const ArtistDetailsModal = ({ artist, onClose }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-5">
      <div className="bg-gray-800 rounded-lg p-5 w-full max-w-md text-white">
        <div className="flex flex-col items-center gap-5">
          <img
            src={artist.image}
            alt={artist.name}
            className="w-24 h-24 rounded-full border"
          />
          <h2 className="text-2xl font-bold">{artist.name}</h2>

          {/* Follow/Unfollow Button */}
          <button
            onClick={handleFollowClick}
            className="flex items-center justify-center gap-2 bg-green-500 p-2 rounded-full w-full"
          >
            {isFollowing ? (
              <>
                <SlUserUnfollow className="w-5 h-5" />
                Unfollow
              </>
            ) : (
              <>
                <SlUserFollow className="w-5 h-5" />
                Follow
              </>
            )}
          </button>

          {/* Don't Play This Artist Button */}
          <button className="flex items-center justify-center gap-2 bg-gray-700 p-2 rounded-full w-full">
            <AiOutlineStop className="w-5 h-5" />
            Don't play this artist
          </button>

          {/* Share Button */}
          <button className="flex items-center justify-center gap-2 bg-gray-700 p-2 rounded-full w-full">
            <FaTelegramPlane className="w-5 h-5" />
            Share
          </button>

          {/* Report Button */}
          <button className="flex items-center justify-center gap-2 bg-red-500 p-2 rounded-full w-full">
            <MdReportGmailerrorred className="w-5 h-5" />
            Report
          </button>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="flex items-center justify-center gap-2 bg-gray-700 p-2 rounded-full w-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetailsModal;