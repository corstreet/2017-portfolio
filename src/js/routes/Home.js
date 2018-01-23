import React from 'react';
import Particles from 'particles.js';
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
			TweenMax.fromTo(n, .7, { yPercent:125, autoAlpha:0 }, { yPercent:0, autoAlpha:1 });
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
		particlesJS.load('particles-js', 'particles.json', function(){
		  console.log('Spread ❤️');
		});
	}

	render() {
		return (
			<div id="home">
				<div id="particles-js"></div>
				<SlideInTitle in={true} >
				<div className="home-content">
				  <h1 className="home-h1">Corwin&nbsp;Street<span className="name-period">.</span></h1>
				  <div className="home-subtext">Frontend Developer</div>
				</div>
				</SlideInTitle>
			</div>
		)
	}
}

export default Home;