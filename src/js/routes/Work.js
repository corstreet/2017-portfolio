import React from 'react';

class Work extends React.Component {

	render() {
		return (
			<div className="container work-container">
				<figure className="project-header">
					<object id="ch-svg" type="image/svg+xml" data="./assets/images/ch-logo.svg"/>
				</figure>
				<section className="project-wrapper">
					<h1 className="headline-company">Collective Health</h1>
					<div className="project-details">
						<p>Collective Health gives companies a smarter way to provide healthcare coverage through technology. During my time there, I was able to contribute to many front end initiatives.</p>
						<ul className="tech-list">
							<li className="tech-item">Backbone.js</li>
							<li className="tech-item">PHP</li>
							<li className="tech-item">jQuery</li>
							<li className="tech-item">Sass/SCSS</li>
							<li className="tech-item">Custom WP</li>
							<li className="tech-item">Grunt</li>
						</ul>
						<div className="view-project-link">
							<a href="javascript:;">View Project</a>
						</div>
					</div>
					<div className="project-screens">
						<img className="screen desktop" src="./assets/images/ch-desktop.png" alt=""/>
						<img className="screen tablet" src="./assets/images/ch-tablet.png" alt=""/>
						<img className="screen mobile" src="./assets/images/ch-mobile.png" alt=""/>
					</div>
				</section>
			</div>
		)
	}
}

export default Work;