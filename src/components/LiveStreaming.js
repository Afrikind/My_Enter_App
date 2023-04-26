import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createLivestream } from '../api/livestreamApi';

const Livestreaming = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [error, setError] = useState('');
  const history = useHistory();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleIsPublicChange = (event) => {
    setIsPublic(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      const livestream = { title, description, url, isPublic };
      const newLivestream = await createLivestream(livestream);
      history.push(`/livestream/${newLivestream.id}`);
    } catch (error) {
      setError('Error creating livestream.');
    }
  };

  return (
    <div>
      <h1> Here you can Watch Matches of your favourite temas, Just Create a Livestream</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <div>
          <label htmlFor="url">URL</label>
          <input
            id="url"
            type="url"
            value={url}
            onChange={handleUrlChange}
            required
          />
        </div>
        <div>
          <label htmlFor="isPublic">Public</label>
          <input
            id="isPublic"
            type="checkbox"
            checked={isPublic}
            onChange={handleIsPublicChange}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
    /**<div className="live-streaming">
      <h2>Live Streaming Component</h2>
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Live Streaming"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    export default LiveStreaming;

/* CSS Styling */
// .live-streaming {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 20px;
// }

// .live-streaming h2 {
//   font-size: 24px;
//   margin-bottom: 10px;
// }

// .live-streaming iframe {
//   width: 100%;
//   max-width: 640px;
//   height: 360px;
// }
  );
};

export default Livestreaming;
