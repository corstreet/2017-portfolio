import React from 'react';

class Work extends React.Component {
	constructor(){
		super();

		this.state = {
			company: {
				logo: './assets/images/ch-logo.svg',
				headerBG: "url('../../assets/images/ch-header-bg.png')",
				name: 'Collective Health'
			},
			project: {
				description: 'Collective Health gives companies a smarter way to provide healthcare coverage through technology. Powered by a platform that connects and administers the entire benefits ecosystem — health plan, benefits programs, spending accounts, employee support — their solution delivers an effortless experience for everyone.',
				tech: ['Backbone.js', 'PHP/ACF', 'jQuery', 'Sass/SCSS', 'Wordpress API', 'Grunt'],
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
				headerBG: "url('../../assets/images/nutanix-header-bg.jpg')",
				name: 'Nutanix'
			},
			project: {
				description: 'Nutanix makes infrastructure invisible, elevating IT to focus on the applications and services that power their business. The Nutanix enterprise cloud platform leverages web-scale engineering and consumer-grade design to natively converge compute, virtualization and storage into a resilient, software-defined solution with rich machine intelligence.',
				tech: ['Vanilla Javascript', 'Mustache.js', 'Pattern Lab 3', 'HTML5', 'CSS3/Sass', 'Wordpress API', 'GitFlow', 'Gulp', 'npm', 'PHP/ACF'],
				url: ''
			},
			screenshots: {
				small: {
					desktop: './assets/images/nutanix-desktop.png',
					tablet: './assets/images/nutanix-tablet.png',
					mobile: './assets/images/nutanix-mobile.png'
				},
				large: {
					desktop: './assets/images/nutanix-desktop-2.png',
					tablet: './assets/images/nutanix-tablet-2.png',
					mobile: './assets/images/nutanix-mobile-2.png'
				}
			}
		})
	}
	render() {


		const { screenshots, project, company } = this.state

		const headerStyle = {
			backgroundImage: company.headerBG
		}


		return (
			<div className="container work-container">
				<figure style={headerStyle} className="project-header">
					<object id="ch-svg" type="image/svg+xml" data={company.logo}/>
				</figure>
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
							<a href="javascript:;" onClick={this.changePage}>See It Live</a>
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
						<a href="javascript:;">More Projects</a>
					</div>
				</section>
			</div>
		)
	}
}

export default Work;