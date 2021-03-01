import React from 'react';
import VideoItems from "./VideoItems";

const VideoList = ({videos}) => {
    const renderedList = videos.map(video => {
        return <VideoItems video={video}/>;
        }

    )

    return (
        <div>{renderedList}</div>
    );
};

export default VideoList;
