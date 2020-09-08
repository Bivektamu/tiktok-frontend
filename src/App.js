import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    // BEM naiming convention
    <div className="app">
      {/* <h1>let's build tiktok clone</h1> */}

      {/* app container */}
      <div className="app_videos">

        {/* videos */}
        <Video />
        <Video />
      </div>


    </div>
  );
}

export default App;
