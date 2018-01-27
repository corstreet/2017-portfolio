import React from 'react';
import Particles from 'particles.js';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { TweenMax } from 'gsap';

//ANIMATION COMPONENT
const SlideInTitle = ({ children, ...props }) => (
	<Transition
		{...props}
		timeout={900}
		appear
		unmountOnExit
		onEnter={n => {
			TweenMax.fromTo(n, .9, { y:"-125%", x:"-50%", autoAlpha:0 }, { y:"-50%", x:"-50%", autoAlpha:1 });
		}}
		>
		{ children }
	</Transition>
);

class Home extends React.Component {

	constructor(props){
		super(props);

		this.particlesInit = this.particlesInit.bind(this);
	}

	componentWillMount(){
		this.particlesInit();
	}

	particlesInit(){
		particlesJS.load('particles-js', 'particles.json', function(){});
	}

	render() {
		return (
			<div id="home">
				<div id="particles-js"></div>
				<SlideInTitle in={true} >
				<div className="home-content">
				  <h1 className="home-h1">Corwin&nbsp;Street<span className="name-period">.</span></h1>
				  <div className="home-subtext">Frontend Engineer</div>
				  <div className="home--cta">
					<Link to="/work" onClick={this.props.toggleSideNav}>Portfolio</Link>
				  </div>
				</div>
				</SlideInTitle>
			</div>
		)
	}
}

export default Home;