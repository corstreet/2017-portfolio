import React from 'react';

class ProjectSlideNav extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div id="project-nav-view">
				<div className="slide-nav-wrapper">
					<ul>
						<li className="project-nav-item">Collective Health</li>
						<li className="project-nav-item">Esurance</li>
						<li className="project-nav-item">Totango</li>
						<li className="project-nav-item">Nutanix</li>
						<li className="project-nav-item">Big Dog HQ</li>
						<li className="project-nav-item">Nuvasive</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default ProjectSlideNav;