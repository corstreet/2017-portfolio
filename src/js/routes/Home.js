import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Particles from 'particles.js';

class Home extends React.Component {
	constructor(props){
		super(props);

		this.particlesInit = this.particlesInit.bind(this);
	}

	componentWillMount(){
		this.particlesInit();
	}

	particlesInit(){
		particlesJS.load('particles-js', 'particles.json', function(){
		  console.log('Have fun with the Particles!');
		});
	}

	render() {
		return (
			<div id="home">
				<div id="particles-js"></div>
				<CSSTransitionGroup
					transitionName='homeTitle'
					transitionAppear={true}
					transitionAppearTimeout={2300}
					transitionEnterTimeout={300}
					transitionLeaveTimeout={300}
					>
				<div className="home-content">
				  <h1 className="home-h1">Corwin Street<span className="name-period">.</span></h1>
				  <div className="home-subtext">Frontend Developer</div>
				</div>
				</CSSTransitionGroup>
				<div className="home-nav-wrap">
				  <div className="nav-link onHover work">
				    <a href="work.html">Contact<span className="right-bounce-arrow">&rarr;</span></a>
				  </div>
				  <div className="nav-link-border-bottom"></div>
				</div>
			</div>
		)
	}
}

export default Home;