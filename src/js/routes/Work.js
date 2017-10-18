import React from 'react';

class Work extends React.Component {
	constructor(){
		super();

		this.state = {
			company: {
				logo: './assets/images/ch-logo.svg',
				name: 'Collective Health'
			},
			project: {
				description: 'Collective Health gives companies a smarter way to provide healthcare coverage through technology. Powered by a platform that connects and administers the entire benefits ecosystem — health plan, benefits programs, spending accounts, employee support — their solution delivers an effortless experience for everyone.',
				tech: ['Backbone.js', 'PHP', 'jQuery', 'Sass/SCSS', 'Custom WP', 'Grunt'],
				url: 'http://www.collectivehealth.com'
			},
			screenshots: {
				small: {
					desktop: './assets/images/ch-desktop.png',
					tablet: './assets/images/ch-tablet.png',
					mobile: './assets/images/ch-mobile.png'
				},
				large: {
					desktop: './assets/images/ch-desktop-2.png',
					tablet: './assets/images/ch-tablet-2.png',
					mobile: './assets/images/ch-mobile-2.png'
				}
			}
		}
		this.changePage = this.changePage.bind(this);
	}
	changePage(e) {
		this.setState({
			company: {
				logo: './assets/images/nutanix-logo.svg',
				name: 'Nutanix'
			},
			project: {
				description: 'Nutanix makes infrastructure invisible, elevating IT to focus on the applications and services that power their business. The Nutanix enterprise cloud platform leverages web-scale engineering and consumer-grade design to natively converge compute, virtualization and storage into a resilient, software-defined solution with rich machine intelligence.',
				tech: ['Mustache.js', 'Pattern Lab 3', 'Vanilla Javascript', 'HTML5', 'CSS3', 'Wordpress API', 'GitFlow', 'Gulp'],
				url: ''
			}
		})
	}
	render() {
		return (
			<div className="container work-container">
				<figure className="project-header">
					<object id="ch-svg" type="image/svg+xml" data={this.state.company.logo}/>
				</figure>
				<section className="project-wrapper">
					<h1 className="headline-company">{this.state.company.name}</h1>
					<div className="project-details">
						<p>{this.state.project.description}</p>
						<ul className="tech-list">
							{this.state.project.tech.map((techItem, i) => {
								return <li key={i} className="tech-item">{techItem}</li>
							})}
						</ul>
						<div className="view-project-link">
							<a href="javascript:;" onClick={this.changePage}>See It Live</a>
						</div>
					</div>
					<div className="project-screens">
						<img className="screen desktop" src={this.state.screenshots.small.desktop} alt=""/>
						<img className="screen tablet" src={this.state.screenshots.small.tablet} alt=""/>
						<img className="screen mobile" src={this.state.screenshots.small.mobile} alt=""/>
					</div>
					<div className="screenshots">
						<img className="screenshots--desktop" src={this.state.screenshots.large.desktop} alt=""/>
						<img className="screenshots--tablet" src={this.state.screenshots.large.tablet} alt=""/>
						<img className="screenshots--mobile" src={this.state.screenshots.large.mobile} alt=""/>
					</div>
					<div className="more-projects-link">
						<a href="javascript:;">More Projects</a>
					</div>
				</section>
			</div>
		)
	}
}

export default Work;