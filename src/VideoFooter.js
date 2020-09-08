import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <h3>@sabina</h3>
                <p>This is some description</p>
                <div className="videoFooter_ticker">
                    <MusicNoteIcon className="videoFooter_icon" />
                    <Ticker mode="smooth">
                        {() => (
                            <>
                                <p>I am a song</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img src="disk.png" className="video_record" alt="" />


        </div>
    )
}

export default VideoFooter
