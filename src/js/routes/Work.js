import React from 'react';

class Work extends React.Component {

	render() {
		return (
			<div className="container work-container">
				<div className="row">
					<figure className="project-image">
						<img src="./assets/images/ch-grab.jpg" alt=""/>
					</figure>
					<div className="project-details">
						<h1 className="h1">Collective Health</h1>
						<p>Collective Health gives companies a smarter way to provide healthcare coverage through technology. During my time there, I was able to contribute to many front end initiatives.</p>
						<ul className="tech-list">
							<li className="tech-item">Backbone.js</li>
							<li className="tech-item">PHP</li>
							<li className="tech-item">jQuery</li>
							<li className="tech-item">Sass/SCSS</li>
							<li className="tech-item">Custom WP</li>
							<li className="tech-item">Grunt</li>
						</ul>
						<div className="project-link">
							<a href="javascript:;">View Project</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Work;