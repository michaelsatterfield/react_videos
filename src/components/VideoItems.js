import React from 'react';
import './VideoItem.css'

const VideoItems = ({video}) => {
    return (
        <div className={'video-item item'}>
            <img className={'ui image'} src={video.snippet.thumbnails.medium.url} alt={"thumbnails"}/>
            <div className={'content'}>
                <div className={'header'}>{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItems;
