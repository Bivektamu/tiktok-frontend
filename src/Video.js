import React, { useRef, useState, useEffect } from 'react'

import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';


function Video({ url, channel, description, song, likes, shares, comments }) {



    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);


    const onClick = () => {
        // if video is playing 
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        }
        else {
            videoRef.current.play();
            setPlaying(true);
        }
        // stop it
        // otherwise play it...

    }


    return (
        <div className="video">
            <video
                className="video_player"
                ref={videoRef}
                onClick={onClick}
                loop
                src={url}></video>

            {/* videofooter */}
            <VideoFooter
                channel={channel}
                description={description}
                song={song} />

            {/* videosidefar */}
            <VideoSidebar likes={likes} shares={shares} comments={comments} />
        </div>
    )
}

export default Video
