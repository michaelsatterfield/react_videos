import React from 'react';
import VideoItems from "./VideoItems";

const VideoList = ({videos, callParentVideoSelect}) => {
    const renderedList = videos.map(video => {
            return <VideoItems
                key={video.id.videoId}
                onVideoSelect={callParentVideoSelect}
                video={video}/>;
        }
    )

    return (
        <div className={'ui relaxed divided list'}>{renderedList}</div>
    );
};

export default VideoList;
