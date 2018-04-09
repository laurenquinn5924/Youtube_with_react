import React, { Component } from 'react'; //const Component = React.Component => same as importing the component

class SearchBar extends Component { //just a JS object, define new class called searchbar and give it access to all functionaly that react.component has
    //every component we create that is class based must have a defined render method and return some JSX
    constructor(props) { //constructor is reserved for doing setup inside of class
        super(props); 

        this.state = {term: '' }; //how to initialize state
    }

    render() { //defining methods of a class
        return (
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;