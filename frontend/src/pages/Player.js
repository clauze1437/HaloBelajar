import React, {useState, useEffect} from 'react';
import Video from '../components/Video';
import Playlist from './Playlist';
import "../assets/css/Player.css";
import VideoList from '../VideoList';
import NavVideo from '../components/NavVideo';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const Player = () => {
  const videoList = VideoList;
  const history = useNavigate();
  const location = useLocation();
  // const match = useRouteMatch();
  let params = useParams();

  const savedState = JSON.parse(localStorage.getItem(`${videoList.playlistId}`));

  const [state, setState] = useState({
    videos: savedState? savedState.videos : videoList.playlist,
    activeVideo: savedState? savedState.activeVideo : videoList.playlist[0],
    playlistId: savedState? savedState.playlistId : videoList.playlistId,
    autoplay: false
  });

  useEffect(() => {
    localStorage.setItem(`${state.playlistId}`, JSON.stringify({...state}));
  }, [state])

  useEffect(() => {
    const currVideo = params.activeVideo;
    if(currVideo !== undefined){
      const newActiveVideo = state.videos.findIndex(
        video => video.id === currVideo
      )

      setState(prev => ({
        ...prev,
        activeVideo: prev.videos[newActiveVideo],
        autoplay: location.autoplay
      }));

    } else {
      history({
        pathname: `/${state.activeVideo.id}`,
        autoplay: true
      });
    }
  }, [history, location.autoplay, params.activeVideo, state.activeVideo.id, state.videos, params.playlistId, state.playlistId])

  const handleEndCallback = () => {
    const currVideo = params.activeVideo;
    const currentVideoIndex = state.videos.findIndex(
      video => video.id === currVideo
    );
    const nextVideo = currentVideoIndex === state.videos.length - 1 ? 0 : currentVideoIndex + 1;

    history({
      pathname: `/${state.videos[nextVideo].id}`,
      autoplay: true
    });
  }

  return (
    <div>
      <div>
      <NavVideo />
        {state.videos !== null ? (
          <div className="container-player">
            <Playlist 
              videos={state.videos}
              active={state.activeVideo}
              playlist={state.playlistId}
            />
            <Video 
              active={state.activeVideo}
              autoplay={state.autoplay}
              endCallback={handleEndCallback}
            />
          </div>
      ) : null}
    </div>
    </div>
    
  )
}

export default Player;