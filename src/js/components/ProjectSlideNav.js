import React from 'react';
import { TweenMax } from 'gsap';
import { Transition, TransitionGroup } from 'react-transition-group';
import { NavLink } from 'react-router-dom';


class ProjectSlideNav extends React.Component {


	render() {
		const { toggleSideNav, isVisible } = this.props
		return (
	      <Transition
	        in={true}
	        timeout={700}
	        appear={true}
			onEnter={n => {
				console.log('isVisible');
				TweenMax.to(n, .7, { autoAlpha: 1 });
			}}
			onExit={n => {
				console.log('not visible');
				TweenMax.to(n, .9, { autoAlpha: 0 });
			}}
	      >
			<div id="project-nav-view" ref={c => this.container = c}>
				<Transition
						in={!!isVisible}
						timeout={500}
						appear={true}
						onEnter={n => {
							console.log('second that!');
							TweenMax.fromTo(n, .5, {x: -350}, {x: 0, delay:0.3});
						}}
						onExiting={n => {
							console.log('third that!');
							TweenMax.to(n, .5, {x: -350});
						}}
						>
				<div className="slide-nav-wrapper">
					<ul>
						<NavLink to="/work/collective-health">
							<li className="project-nav-item" onClick={toggleSideNav}>Collective Health</li>
						</NavLink>
						<NavLink to="/work/nutanix">
							<li className="project-nav-item" onClick={toggleSideNav}>Nutanix</li>
						</NavLink>
						<li className="project-nav-item">Totango</li>
						<li className="project-nav-item">Esurance</li>
						<li className="project-nav-item">Big Dog HQ</li>
						<li className="project-nav-item">Nuvasive</li>
					</ul>
				</div>
				</Transition>
			</div>
		  </Transition>
		)
	}
}

export default ProjectSlideNav;