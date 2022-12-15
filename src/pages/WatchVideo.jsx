import React from 'react';
import Player from './Player';
import { Route, Routes } from 'react-router-dom';
import "../assets/css/WatchVideo.css";

const WatchVideo = () => (
  <div className="container-all-watch-video">
    <>
      <Routes>
        <Route path="/video" element={<Player />} />
        <Route path="/:activeVideo" element={<Player />} />
      </Routes>
    </>
  </div>
)

export default WatchVideo;