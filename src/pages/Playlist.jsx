import React from 'react';
import PlaylistBox from '../components/PlaylistBox';
import "../assets/css/Playlist.css";

const PlaylistHeader = ({ active }) => {
  return (
    <div className="header-playlist">
      <p>{active.title}</p>
    </div>
  );
}

const Playlist = ({videos, active, playlist}) => {
return (
    <div className='container-playlist'>
      <PlaylistHeader active={active} />
      <PlaylistBox videos={videos} active={active} playlist={playlist} />
    </div>
  );
}

export default Playlist;