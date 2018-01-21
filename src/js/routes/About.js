import React from 'react';
import * as d3 from 'd3';
import RadialProgressChart from 'radial-progress-chart';
import { Transition } from 'react-transition-group';
import { TweenMax } from 'gsap';




class About extends React.Component {

	constructor(props){
		super(props);
	}

	componentDidMount(){
		const radialJS = new RadialProgressChart('.rings-container--js', {
			series: [0, 0, 0]
		});
		const radialTools = new RadialProgressChart('.rings-container--tools', {
			series: [0, 0, 0]
		});
		const radialHTML = new RadialProgressChart('.rings-container--html', {
			series: [0, 0, 0]
		});	
		const radialCSS = new RadialProgressChart('.rings-container--css', {
			series: [0, 0, 0]
		});
		setTimeout(function(){
			radialJS.update([   92, 74, 86]);
			radialTools.update([96, 88, 69]);
			radialCSS.update([  71, 92, 97]);
			radialHTML.update([ 87, 89, 100]);
		}, 2000);	
		

	}

	render() {
		return(
			<div>
			<section className="container about-container">
			  <Transition
		        in={true}
		        timeout={500}
		        appear
				onEnter={n => {
					TweenMax.fromTo(n, .65, { autoAlpha: 0, x:-50 }, { autoAlpha: 1, x:0, delay: .8 });
				}}
			  >
			  <div className="about--wrapper">
				<div className="about--content">
					<img className="about--image" src="../assets/images/about--image.jpg" />
					<h1>Hi! I'm Corwin</h1>
					<p className="about--blurb">
						My passion is to thoughtfully transform creative ideas, designs and information 
						into tangible interactive experiences for the end user. Solving complex problems, 
						having to learn new technologies and methodologies, and optimizing my code for 
						performance are some of my favorite aspects of this profession. I strive to engineer elegant,  
						scalable solutions to all problems I encounter in my work.<br/>
						<br/>
						When I'm not sharpening my Javascript skills, you might find me exploring the world 
						with my amazing wife, enjoying nature, or piloting my drone.<br/>
						<br/>
						Feel free to <a href="javascript:;" className="bio-link">reach out</a> if you believe I can help in any way. 
					</p>
				</div>
				<div className="skills">
					{/* GOOD CANDIDATE FOR NEW COMPONENT */}
					<div className="skill-visual">
						<div className="rings-container rings-container--js">
							<div className="skill--category">Javascript</div>
						</div>
						<ul className="skill--legend">
							<li className="legend-item item-outer">Vanilla JS (86%)</li>
							<li className="legend-item item-middle">React (74%)</li>
							<li className="legend-item item-inner">jQuery (92%)</li>
						</ul>
					</div>
					<div className="skill-visual">
						<div className="rings-container rings-container--tools">
							<div className="skill--category">Tools</div>
						</div>
						<ul className="skill--legend">
							<li className="legend-item item-outer">npm/node (69%)</li>
							<li className="legend-item item-middle">Gulp/Webpack (88%)</li>
							<li className="legend-item item-inner">Git/SVN (96%)</li>
						</ul>
					</div>
					<div className="skill-visual">
						<div className="rings-container rings-container--css">
							<div className="skill--category">CSS</div>
						</div>
						<ul className="skill--legend">
							<li className="legend-item item-outer">CSS3 (97%)</li>
							<li className="legend-item item-middle">Preprocessors (92%)</li>
							<li className="legend-item item-inner">Animation (71%)</li>
						</ul>
					</div>
					<div className="skill-visual">
						<div className="rings-container rings-container--html">
							<div className="skill--category">HTML</div>
						</div>
						<ul className="skill--legend">
							<li className="legend-item item-outer">HTML5 (100%)</li>
							<li className="legend-item item-middle">Accessibility (89%)</li>
							<li className="legend-item item-inner">SEO (87%)</li>
						</ul>
					</div>
				</div>
			  </div>
			</Transition>
			</section>
			</div>
		)

	}
}

export default About;