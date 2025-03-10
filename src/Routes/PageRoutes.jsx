import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../musicpages/Music/Home/Home ";
import Community from "../musicpages/Commnity/Community";
import Settings from "../musicpages/Settings/Settings";
import Profile from "../musicpages/Profiles/Profile";
import NFTs from "../musicpages/NFTS/NFTs";
import Music from "../musicpages/Music/Music/Music";
import Video from "../musicpages/Music/Videos/Video";
import Library from "../musicpages/Music/Library/Library";
import Explorer from "../musicpages/Music/Explorer/Explorer";
import Collections from "../musicpages/NFTS/Collections";
import Marketplace from "../musicpages/NFTS/Marketplace";
import History from "../musicpages/NFTS/History";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/community" element={<Community />} />
      <Route path="/nfts" element={<NFTs />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/music" element={<Music />} />
      <Route path="/video" element={<Video />} />
      <Route path="/library" element={<Library />} />
      <Route path="/explore" element={<Explorer />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/nfts/collection" element={<Collections />} />
      <Route path="/nfts/history" element={<History />} />
    </Routes>
  );
};

export default PageRoutes;
