import React from 'react';
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

<<<<<<< HEAD
class App extends React.Component {
    onTermSubmit = (term) => {
    }
=======

class App extends React.Component {
    state = {videos: [] };


    onTermSubmit = async term => {
        console.log(term)
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({videos: response.data.items});
    };

>>>>>>> 9f8e53825c066bf08893ae8b1fd3d1c80381cc6e
    render() {
        return (
            <div className={'ui container'}>
                <SearchBar callParentSubmit={this.onTermSubmit}/>
                I have {this.state.videos.length} videos
            </div>
        )

    }
}

export default App;
