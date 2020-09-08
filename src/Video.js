import React, { useRef, useState } from 'react'

import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';


function Video() {

    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null)

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
                src="https://v16m.tiktokcdn.com/b9797612988a1508e4e7ef42cbfd880e/5f574b02/video/tos/useast2a/tos-useast2a-ve-0068c002/7478d57011cd43f19f7fa282e5fc875f/?a=1233&br=1488&bt=744&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20200908031209010189072034312F2A7B&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajRsNXJyZmpmdzMzNzczM0ApOzhlaTg2Nzs8N2k8N2g3ZmdebmswbnFtajVfLS0zMTZzczMxM2FjNF9fYDE1MC0xMi06Yw%3D%3D&vl=&vr="></video>

            {/* videofooter */}
            <VideoFooter />

            {/* videosidefar */}
            <VideoSidebar likes={100} shares={50} comments={200} />
        </div>
    )
}

export default Video
