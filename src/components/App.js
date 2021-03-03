import React from 'react';
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import KEY from "../Keys";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    state = { videos: [], selectedVideo: null};

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 10,
                type: 'video',
                key: KEY,
            },
        });
        this.setState({ videos: response.data.items });
    };

        onVideoSelect = (video) => {
            this.setState({ selectedVideo: video});
        }

    render() {
        // if(this.state.userInput){
        //     return<div className={"ui segment"} style={{minHeight: 200}} >
        //         <div className=" ui active inverted dimmer">
        //             <div className="ui text loader">Loading...</div>
        //         </div>
        //     </div>
        // }
        return (
            <div className={'ui container'}>
                <SearchBar callParentSubmit={this.onTermSubmit}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList callParentVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
        )

    }
}

export default App;
