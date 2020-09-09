import React, { useState, useEffect } from 'react';
import './App.css';
import Video from './Video';
import axios from './axios';


function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/posts');
      setVideos(response.data);

      return response;

    }

    fetchPosts();

  }, [])

  return (
    // BEM naiming convention
    <div className="app">
      {/* <h1>let's build tiktok clone</h1> */}

      {/* app container */}
      <div className="app_videos">

        {
          videos.map(({ _id, url, channel, description, song, likes, shares, comments }) => (
            <Video key={_id}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              shares={shares}
              comments={comments}
              url={url}
            />
          ))
        }

      </div>


    </div>
  );
}

export default App;
