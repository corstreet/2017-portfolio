import React from 'react';

import { NavLink } from 'react-router-dom';

class ProjectSlideNav extends React.Component {

	render() {
		return (
			<div id="project-nav-view">
				<div className="slide-nav-wrapper">
					<ul>
						<NavLink to="/work">
							<li className="project-nav-item" onClick={this.props.toggleSideNav}>Collective Health</li>
						</NavLink>
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