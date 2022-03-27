import React from 'react';
import './App.css'
import 'tachyons'; //stylesheet classes
import CardList from './CardList';
//import { robots } from './robots';
import SearchBox from './SearchBox';


class App extends React.Component {
    
    constructor () {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
        console.log("constructor");
    }

    //if this function is not in => format this=undefined
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then( (respose) => {return respose.json();})
        .then( (users) => {this.setState({robots: users});});        
        console.log("componentDidMount");
    }

    render() {
        console.log("render");
        const filteredRobots = this.state.robots.filter( (robot) => {        
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
            });

        return(
            <>
                <h1 className="tc f1">Robot Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>   
                <CardList robots={filteredRobots}/>
            </>
        );
    }

}

export default App;