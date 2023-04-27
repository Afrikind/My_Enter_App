import React, { useState } from 'react';
import './module.css';

const Music = () => {
  const [playlist, setPlaylist] = useState([
    {
      id: 1,
      title: 'BigThings',
      artist: 'Nazor ft seezy',
      audio: 'song1.mp3'
    },
    {
      id: 2,
      title: 'Sexy bad',
      artist: 'Afrikind(Kenny Jay)',
      audio: 'song2.mp3'
    },
    {
      id: 3,
      title: 'Earth 2',
      artist: 'l1trendsetter',
      audio: 'song3.mp3'
    }
  ]);
  
  const [currentTrack, setCurrentTrack] = useState(playlist[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSelectTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const handleNextTrack = () => {
    const currentTrackIndex = playlist.findIndex(track => track.id === currentTrack.id);
    if (currentTrackIndex < playlist.length - 1) {
      setCurrentTrack(playlist[currentTrackIndex + 1]);
    } else {
      setCurrentTrack(playlist[0]);
    }
  };

  const handlePrevTrack = () => {
    const currentTrackIndex = playlist.findIndex(track => track.id === currentTrack.id);
    if (currentTrackIndex > 0) {
      setCurrentTrack(playlist[currentTrackIndex - 1]);
    } else {
      setCurrentTrack(playlist[playlist.length - 1]);
    }
  };

  return (
    <div className="music-container">
      <div className="player-container">
        <div className="track-info">
          <h2>{currentTrack.title}</h2>
          <h3>{currentTrack.artist}</h3>
        </div>
        <div className="audio-player">
          <audio src={currentTrack.audio} controls={true} autoPlay={isPlaying} onEnded={handleNextTrack}></audio>
          <div className="controls">
            <button className="prev-btn" onClick={handlePrevTrack}>
              <i className="fas fa-backward"></i>
            </button>
            <button className="play-btn" onClick={togglePlay}>
              <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
            </button>
            <button className="next-btn" onClick={handleNextTrack}>
              <i className="fas fa-forward"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="playlist-container">
        <h2>Playlist</h2>
        <ul className='song-list'>
          {playlist.map(track => (
            <li key={track.id} className={track.id === currentTrack.id ? 'current' : ''} onClick={() => handleSelectTrack(track)}>
              <span>{track.title}</span>
              <span>{track.artist}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Music;
