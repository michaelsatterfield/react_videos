import React from 'react';

const VideoItems = ({video}) => {
    return (
        <div>
            <img src={video.snippet.thumbnails.medium.url} alt={"thumbnails"}/>
            {video.snippet.title}
        </div>
    );
};

export default VideoItems;
