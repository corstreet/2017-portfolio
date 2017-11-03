import React from 'react';

import { NavLink } from 'react-router-dom';

class ProjectSlideNav extends React.Component {

	render() {
		const { toggleSideNav } = this.props
		return (
			<div id="project-nav-view">
				<div className="slide-nav-wrapper">
					<ul>
						<NavLink to="/work/collective-health">
							<li className="project-nav-item" onClick={toggleSideNav}>Collective Health</li>
						</NavLink>
						<NavLink to="/work/nutanix">
							<li className="project-nav-item" onClick={toggleSideNav}>Esurance</li>
						</NavLink>
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