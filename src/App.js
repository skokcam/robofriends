import React from 'react';
import 'tachyons'; //stylesheet classes
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';


class App extends React.Component {
    
    constructor () {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange(event) {
        console.log(event);
    }

    render() {
        return(
            <>
                <h1 className="tc">Robot Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>   
                <CardList robots={this.state.robots}/>
            </>
        );
    }

}

export default App;