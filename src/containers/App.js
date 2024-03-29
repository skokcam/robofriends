import React from 'react';
import { connect } from 'react-redux';
//import { useState, useEffect } from 'react';
import CardList from '../components/CardList';
//import { robots } from '../robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import 'tachyons'; //stylesheet classes
import './App.css'

import { setTextField, requestAPI } from '../actions';

const robotsFetchURL = 'https://jsonplaceholder.typicode.com/users';
const robotsFetchOptions = {};

const mapStateToProps = (state) => {
  //takes state as param and returns an object
  return {
    searchField: state.textFieldReducer.textField,
		robots: state.requestAPIreducer.data,
		isPending: state.requestAPIreducer.isPending,
		error: state.requestAPIreducer.error
  }
}

const mapDispatchToProps = (dispatch) => {
  //returns an object
  return { 
		onSearchChange: (event) => dispatch(setTextField(event.target.value)),
		onRequestRobots: () => dispatch(requestAPI(robotsFetchURL, robotsFetchOptions))
	 }
}

class App extends React.Component {
	//we no longer need constructor, our state is now managed by redux

  componentDidMount(){
		this.props.onRequestRobots(); //request our robots
    console.log("componentDidMount");
  }

	render() {
		const { searchField, onSearchChange, robots, isPending } = this.props;
		console.log("render");

		const filteredRobots = robots.filter( (robot) => {        
				return robot.name.toLowerCase().includes(searchField.toLowerCase());
				});
		
		return isPending ? 
			(<h1 className="tc f1">Loading...</h1>) 
			: 
			(
					<>
							<h1 className="tc f1">Robot Friends</h1>
							<SearchBox searchChange={onSearchChange} />
							<Scroll>
									<ErrorBoundry>
											<CardList robots={filteredRobots} />
									</ErrorBoundry>
							</Scroll>
					</>
			);
	}
}

/*
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
*/
export default connect(mapStateToProps, mapDispatchToProps)(App);
//connect() is a higher level function that takes App as parameter and returns App
//with this now App has subscribed to any changes in redux store