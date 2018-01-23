import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../projects';
import { TweenMax } from 'gsap';
import { Transition } from 'react-transition-group';

class Work extends React.Component {

	render() {

		const { screenshots, project, company, isSVG } = this.props.projectFound

		const headerStyle = {
			backgroundImage: company.headerBG
		}

		return (
			<Transition
		        in={true}
		        timeout={300}
		        appear
				onEnter={n => {
					TweenMax.fromTo(n, 1.65, { autoAlpha: 0 }, { autoAlpha: 1, delay: .8 });
				}}>

				<div className="container work-container">
					<Transition
						in={true}
						appear
						timeout={300}
						onEnter={n => {
							TweenMax.fromTo(n, 1.1, {y:-600}, {y:0, delay:.3});
						}}>
					<figure style={headerStyle} className="project-header">
						{isSVG
							? <object id="project-svg" type="image/svg+xml" data={company.logo}/>
							: <img className="project-logo" src={company.logo} alt="company logo"/>
						}
					</figure>
					</Transition>
					<Transition
						in={true}
						appear
						timeout={300}
						onEnter={n => {
							TweenMax.fromTo(n, 1.65, {y:300}, {y:0});
							const screens = Array.from(n.children[2].children)
							screens.map(screen => {
								TweenMax.staggerFromTo(screens, .8, {rotationX:45, rotationY:0, scale:.5 }, {rotationX:5, rotationY:-30, scale:1, delay:.7, ease: Power4.easeIn }, .25);
							});
						}}
					>
					<section className="project-wrapper">
						<h1 className="headline-company">{company.name}</h1>
						<div className="project-details">
							<p>{project.description}</p>
							<ul className="tech-list">
								{project.tech.map((techItem, i) => {
									return <li key={i} className="tech-item">{techItem}</li>
								})}
							</ul>
							<div className="view-project-link">
								<a href="javascript:;">See It Live</a>
							</div>
						</div>
						<div className="project-screens">
							<img className="screen desktop" src={screenshots.small.desktop} alt=""/>
							<img className="screen tablet" src={screenshots.small.tablet} alt=""/>
							<img className="screen mobile" src={screenshots.small.mobile} alt=""/>
						</div>
						<div className="screenshots">
							<img className="screenshots--desktop" src={screenshots.large.desktop} alt=""/>
							<img className="screenshots--tablet" src={screenshots.large.tablet} alt=""/>
							<img className="screenshots--mobile" src={screenshots.large.mobile} alt=""/>
						</div>
						<div className="more-projects-link">
							<Link to="/work" onClick={this.props.toggleSideNav}>More Projects</Link>
						</div>
					</section>
					</Transition>
				</div>

			</Transition>
		)
	}
}

export default Work;