import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoRefreshOutline } from "react-icons/io5";

const Library = () => {
  return (
    <section className="text-white py-10 mb-40">
      <main className="flex justify-between">
        <h1 className="text-2xl font-semibold">Your Library</h1>
        <div className="flex gap-3">
          <IoSearch className="w-8 h-8" />
          <IoAddCircleOutline className="w-8 h-8" />
        </div>
      </main>

      <main className="mt-10">
        <div className="flex gap-5 mt-5">
          <button className="text-2xl bg-gray-400 p-2 rounded-3xl w-auto flex justify-center">
            Artists
          </button>
          <button className="text-2xl bg-gray-400 p-2 rounded-3xl w-auto flex justify-center">
            Playlists
          </button>
        </div>
        <div className="mt-5 flex gap-3">
          <IoRefreshOutline className="w-8 h-8" />
          <h2 className="text-xl font-semibold">Recents</h2>
        </div>
      </main>
      <section className="mt-10 flex flex-col gap-5">
        <main className="flex items-center gap-5">
          <img
            src="images/rema.png"
            alt=""
            className="cover w-20 h-20 rounded-full"
          />
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold">Davido</h2>
            <h2 className="text-sm">Artist</h2>
          </div>
        </main>
        <main className="flex items-center gap-5">
          <img
            src="images/rema.png"
            alt=""
            className="cover w-20 h-20 rounded-full"
          />
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold">Davido</h2>
            <h2 className="text-sm">Artist</h2>
          </div>
        </main>
      </section>
    </section>
  );
};

export default Library;
