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

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter( (robot) => {        
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
            });

        return(
            <>
                <h1 className="tc">Robot Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>   
                <CardList robots={filteredRobots}/>
            </>
        );
    }

}

export default App;