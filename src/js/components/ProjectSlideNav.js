import React from 'react';

import { NavLink } from 'react-router-dom';

class ProjectSlideNav extends React.Component {

	render() {
		return (
			<div id="project-nav-view">
				<div className="slide-nav-wrapper">
					<ul>
						<li className="project-nav-item" onClick={this.props.toggleSideNav}><NavLink to="/work">Collective Health</NavLink></li>
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