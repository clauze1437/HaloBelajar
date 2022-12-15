import React from 'react';
import ReactPlayer from 'react-player';
import "../assets/css/Video.css";

const Video = ({ active, autoplay, endCallback }) => (
  <div className="container-video">
    <div className="frame-video">
      <ReactPlayer
        width="100%"
        height="100%"
        style={{ position: "absolute", top: "0", borderRadius: "20px", overflow: "hidden"}}
        playing={autoplay}
        controls={true}
        loop={false}
        url={active.video}
        onEnded={endCallback}
      />
    </div>
    <h2 className="video-title-in-vid">{active.title}</h2>
    <p className="video-desc-in-vid">{active.desc}</p>
  </div>
);

export default Video;