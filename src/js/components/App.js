import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import Navbar from './Navbar';
import ProjectSlideNav from './ProjectSlideNav';
import Home from '../routes/Home';
import About from '../routes/About';
import Work from '../routes/Work';




class App extends React.Component {

	constructor() {
		super();

		this.state = {
			company: {
				logo: './assets/images/ch-logo.svg',
				headerBG: "url('./assets/images/ch-header-bg.png')",
				name: 'Collective Health'
			},
			project: {
				description: 'Collective Health gives companies a smarter way to provide healthcare coverage through technology. Powered by a platform that connects and administers the entire benefits ecosystem — health plan, benefits programs, spending accounts, employee support — their solution delivers an effortless experience for everyone.',
				tech: ['Backbone.js', 'GSAP', 'PHP/ACF', 'jQuery', 'CSS3(Sass)', 'Wordpress API', 'Grunt'],
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
			},
			slideNavIsOpen: false
		}

		this.changePage = this.changePage.bind(this);
		this.toggleSideNav = this.toggleSideNav.bind(this);
	}

	changePage(e) {
		this.setState({
			company: {
				logo: './assets/images/nutanix-logo.svg',
				headerBG: "url('./assets/images/nutanix-header-bg.jpg')",
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

	toggleSideNav(e) {
		// e.preventDefault();
		this.setState({
			slideNavIsOpen: !this.state.slideNavIsOpen
		});
	}

	render() {
		return (
			<BrowserRouter>
				<div>
				  <Navbar toggleSideNav={this.toggleSideNav} />
				  <CSSTransitionGroup
					transitionName="example"
		            transitionEnterTimeout={1300}
		            transitionLeaveTimeout={1300}
				  	>
				  { this.state.slideNavIsOpen && <ProjectSlideNav toggleSideNav={this.toggleSideNav} /> }
				  </CSSTransitionGroup>
			      <Route exact path="/" component={Home}/>
			      <Route path="/about" component={About}/>
			      <Route path="/work" render={() => <Work state={this.state} changePage={this.changePage}/>}/>
			    </div>
			</BrowserRouter>
		)
	}

}

export default App;