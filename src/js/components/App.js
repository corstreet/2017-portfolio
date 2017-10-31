import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import Navbar from './Navbar';
import ProjectSlideNav from './ProjectSlideNav';
import Home from '../routes/Home';
import About from '../routes/About';
import Work from '../routes/Work';
import projects from '../projects';




class App extends React.Component {

	constructor() {
		super();

		this.state = {
			slideNavIsOpen: false
		};

		this.toggleSideNav = this.toggleSideNav.bind(this);
	}

	toggleSideNav(e) {
		// e.preventDefault();
		this.setState({
			slideNavIsOpen: !this.state.slideNavIsOpen
		});
	}

	render() {
		return (
			<BrowserRouter>
				<div>
				  <Navbar toggleSideNav={this.toggleSideNav} />
				  <CSSTransitionGroup
					transitionName="example"
		            transitionEnterTimeout={1300}
		            transitionLeaveTimeout={1300}
				  	>
				  { this.state.slideNavIsOpen && <ProjectSlideNav toggleSideNav={this.toggleSideNav} /> }
				  </CSSTransitionGroup>
				    <Route render={({ location }) => (
					    <CSSTransitionGroup
						transitionName='pagefade'
						transitionEnterTimeout={1500}
						transitionLeaveTimeout={1900}
					    >
					      <Switch location={location} key={location.key} >
						    <Route exact path="/" component={Home}/>
						    <Route path="/about" component={About}/>
						    <Route path="/work/:projectID" render={({match}) => (
						    	<Work projectFound={projects.find( project => project.id === match.params.projectID )} />
						    )} />
					      </Switch>
					    </CSSTransitionGroup>
					)}
				  />

			      
			      
			    </div>
			</BrowserRouter>
		)
	}

}

export default App;