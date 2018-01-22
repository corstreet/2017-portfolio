import React from 'react';
import { TweenMax } from 'gsap';
import { Transition, TransitionGroup } from 'react-transition-group';
import { NavLink } from 'react-router-dom';

const SlideInOutNav = ({ children, ...props }) => (
	<Transition
		{...props}
		timeout={900}
		appear
		onEnter={n => {
			TweenMax.fromTo(n, .25, {x: -350, ease: Expo.easeIn}, {x: 0, delay: .2});
		}}
		onExiting={n => {
			TweenMax.fromTo(n, .3, {x: 0}, {x: -350});
		}}
	>
	{ children }
	</Transition>
)


class ProjectSlideNav extends React.Component {


	render() {
		const { toggleSideNav, isVisible } = this.props
		return (
			<div id="project-nav-view">
			<SlideInOutNav in={isVisible}>
				<div className="slide-nav-wrapper">
					<ul>
						<NavLink to="/work/collective-health">
							<li className="project-nav-item" onClick={toggleSideNav}>Collective Health</li>
						</NavLink>
						<NavLink to="/work/nutanix">
							<li className="project-nav-item" onClick={toggleSideNav}>Nutanix</li>
						</NavLink>
						<NavLink to="/work/totango">
							<li className="project-nav-item" onClick={toggleSideNav}>Totango</li>
						</NavLink>
						<NavLink to="/work/nuvasive">
							<li className="project-nav-item" onClick={toggleSideNav}>NuVasive</li>
						</NavLink>
						<li className="project-nav-item">Esurance</li>
						<li className="project-nav-item">Big Dog HQ</li>
					</ul>
				</div>
			</SlideInOutNav>
			</div>
		)
	}
}

export default ProjectSlideNav;