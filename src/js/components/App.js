import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, Transition, CSSTransition } from "react-transition-group";
import { TweenMax } from 'gsap';

import Navbar from './Navbar';
import ProjectSlideNav from './ProjectSlideNav';
import Home from '../routes/Home';
import About from '../routes/About';
import Work from '../routes/Work';
import projects from '../projects';


const FadeInProjectNav = ({ children, isVisible, ...props }) => (
  <CSSTransition
    {...props}
    in={isVisible}
    timeout={500}
    unmountOnExit={true}
    classNames="example"
  >
    <ProjectSlideNav isVisible={isVisible} />
  </CSSTransition>
);

class App extends React.Component {

	constructor(props) {
		super(props);

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
			<div>
			  <Navbar state={this.state} toggleSideNav={this.toggleSideNav} />
			  {/* Conditionally render slideNav if opened */}
			  <TransitionGroup>
			  <FadeInProjectNav isVisible={this.state.slideNavIsOpen} toggleSideNav={this.toggleSideNav} />
			  </TransitionGroup>
		      <Route render={({ location }) => (
			  <TransitionGroup>
	    	  <CSSTransition
	    	  			key={location.key + "n"}
	    	  			timeout={{enter:1000,exit:200}}
	    	  			appear
						classNames="example"
				>
				<div>
			      <Switch location={location} key={location.key}>
					    <Route exact path="/" component={Home}/>
					    <Route path="/about" component={About}/>
			      </Switch>
			    </div>
		      </CSSTransition>
			  </TransitionGroup>
				)}/>

		    <Route path="/work/:projectID" render={({match}) => (
		    	<Work toggleSideNav={this.toggleSideNav} projectFound={projects.find( project => project.id === match.params.projectID )} />
		    )} />
	        </div>

		)
	}

}

export default App;