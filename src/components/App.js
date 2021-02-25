import React from 'react';
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";




class App extends React.Component {
    onTermSubmit = async term => {
        console.log(term)
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        console.log(response);
    };

    render() {
        return(
            <div className={'ui container'}>
                <SearchBar callParentSubmit={this.onTermSubmit}/>
            </div>
        )

    }
}

export default App;
