import React from 'react';
import * as d3 from 'd3';
import RadialProgressChart from 'radial-progress-chart';




class About extends React.Component {

	constructor(props){
		super(props);
	}

	componentDidMount(){
		const radialJS = new RadialProgressChart('.rings-container--js', {
			series: [0, 0, 0],
			center: 'nope'
		});
		const radialTools = new RadialProgressChart('.rings-container--tools', {
			series: [0, 0, 0],
			center: 'nope'
		});
		const radialHTML = new RadialProgressChart('.rings-container--html', {
			series: [0, 0, 0],
			center: 'nope'
		});	
		const radialCSS = new RadialProgressChart('.rings-container--css', {
			series: [0, 0, 0],
			center: 'nope'
		});	
		radialJS.update([   92, 74, 86]);
		radialTools.update([69, 88, 65]);
		radialCSS.update([  71, 92, 97]);
		radialHTML.update([ 87, 89, 100]);

	}

	render() {
		return(
			<div>
			<section className="container about-container">
			  <div className="about--wrapper">
				<div className="about--content">
					<h1>Hi, I'm Corwin!</h1>
					<p className="about--blurb">
						My passion is to thoughtfully transform creative ideas, designs and information 
						into tangible interactive experiences for the end user. Being stuck on a hard problem, 
						having to learn a new technology or methodology, and/or finding ways to make my code more 
						efficient are some of my favorite parts of this profession. I strive to engineer elegant,  
						scalable solutions to all problems I encounter in my career.<br/>
						<br/>
						When I'm not sharpening my Javascript skills, you might find me exploring the world 
						with my amazing wife, enjoying nature, piloting my drone, or cheering for the Philadelphia Eagles!<br/>
						<br/>
						Feel free to <a href="javasccript:;">reach out</a> if you believe I can help in any way. 
					</p>
					<img className="about--image" src="../assets/images/about--image.jpg" />
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
							<li className="legend-item item-outer">Webpack (65%)</li>
							<li className="legend-item item-middle">Gulp/Grunt (88%)</li>
							<li className="legend-item item-inner">npm/node (69%)</li>
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
			</section>
			</div>
		)

	}
}

export default About;