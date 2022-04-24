import React,{ useState, useEffect } from 'react';
import './App.css'
import 'tachyons'; //stylesheet classes
import CardList from '../components/CardList';
//import { robots } from '../robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

/*
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
      const {robots, searchField} = this.state;
      console.log("render");
      const filteredRobots = robots.filter( (robot) => {        
          return robot.name.toLowerCase().includes(searchField.toLowerCase());
          });
      
      return (robots.length) ? (
          <>
              <h1 className="tc f1">Robot Friends</h1>
              <SearchBox searchChange={this.onSearchChange} />
              <Scroll>
                  <ErrorBoundry>
                      <CardList robots={filteredRobots} />
                  </ErrorBoundry>
              </Scroll>
          </>
      ) : (<h1 className="tc f1">Loading...</h1>);
    }
}
*/

const App = ()=> {
  const [ robots, setRobots ] = useState([]);
  const [ filteredRobots, setFilteredRobots ] = useState([]);

  const onSearchChange = (event) => {
    let searchField = event.target.value;
    if (robots.length) {
      let matchingRobots = robots.filter( (robot) => {        
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
      setFilteredRobots(matchingRobots);
    }    
  }

  useEffect(() => {
    if (!robots.length) {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then( (respose) => {
        return respose.json();
      })
      .then( (users) => {
        setRobots(users);
        setFilteredRobots(users);
        console.log('Fetch result:', users);
      })
      .catch(err => {
        console.log('Fetch error:', err);
      });      
    }    
  },[]); 
  //empty dependency array "[]" causes it to run once (like componentDidMount)
  //otherwise each change in state cause rerender and each rerender calls useeffect 
  //causing infinite loop, actually we have already prevented this with the
  //if statement *if (!robots.length)*

  return (robots.length) ? (
      <>
          <h1 className="tc f1">Robot Friends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
              <ErrorBoundry>
                  <CardList robots={filteredRobots} />
              </ErrorBoundry>
          </Scroll>
      </>
  ) : (<h1 className="tc f1">Loading...</h1>);
}

export default App;