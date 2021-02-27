import React from 'react';

class SearchBar extends React.Component {
    state = { userInput: ''}

    onInputChange = event => {
       this.setState({userInput: event.target.value})
        // console.log(this.state.userInput)
    };
    onFormSubmit = event => {
        // keeps page from reloading when enter is pressed by user
        event.preventDefault();
        // TODO: Make sure we call callback from parent component
        this.props.callParentSubmit(this.state.userInput)
    }


    render() {
        return (
            <div className={'search-bar ui segment'}>
             <form onSubmit={this.onFormSubmit} className={'ui form'}>
                <div className={'field'}>
                    <label>Video Search</label>
                    <input type={'text'}
                           value={this.state.userInput}
                           onChange={this.onInputChange}
                    />
                </div>
             </form>
            </div>
        );
    }
}

export default SearchBar;
