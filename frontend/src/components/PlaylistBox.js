import React from 'react';
import "../assets/css/PlaylistBox.css"
import "../assets/css/PlaylistItem.css"
import { NavLink } from 'react-router-dom'

const PlaylistItem = ({ video, playlist }) => {
  const activeStyle = ({isActive}) => {
    return {
      background: isActive ? '#CBCBCB' : 'none',
      borderRadius: isActive ? '50px' : '0px',
      textDecoration: 'none',
    }
  }

  return (
    <NavLink style={activeStyle} to={{ pathname: `/${video.id}`, autoplay: true}} className="container-item-playlist">
      <div className="video-number">{video.num}</div>
      <div className="video-title">{video.title}</div>
    </NavLink>
  );
}

const PlaylistBox = ({videos, active, playlist}) => (
  <div className="box-playlist">
    {videos.map(video => (
      <PlaylistItem
        key={video.id}
        video={video}
        active={video.id === active.id}
        played={video.played}
        playlist={playlist}
      />
    ))}
  </div>
)

export default PlaylistBox;