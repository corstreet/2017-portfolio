import React from 'react';

import * as FontAwesome from 'react-icons/lib/fa';
import { MdMenu } from 'react-icons/lib/md';
import { NavLink } from 'react-router-dom';

import { TweenMax } from 'gsap';
import { CSSTransition } from 'react-transition-group';

import SocialMobile from './SocialMobile';


const FadeInSocialNav = ({ children, isVisible, ...props }) => (
  <CSSTransition
    {...props}
    in={isVisible}
    timeout={500}
    unmountOnExit={true}
    classNames="example"
  >
    <SocialMobile isVisible={isVisible} />
  </CSSTransition>
);



class Navbar extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			socialMobileOpen: false
		}
	}

	closeSlideNav(e) {
		if (this.props.state.slideNavIsOpen){
			this.props.toggleSideNav();
		}
	}

	toggleSocialNav(e) {
		e.preventDefault();
		this.setState({socialMobileOpen:!this.state.socialMobileOpen});
	}

	render () {
		const { socialMobileOpen } = this.state;
		return (
			<section>
			<div id="nav-bar">
			  <NavLink exact to='/' className="logo">
			  	<FontAwesome.FaTerminal />
			  </NavLink>

			  <nav className="nav">
			    <NavLink activeClassName="active" exact to="/" onClick={this.closeSlideNav.bind(this)}><FontAwesome.FaHome /></NavLink>
			    <NavLink activeClassName="active" to="/about" onClick={this.closeSlideNav.bind(this)}><FontAwesome.FaCode /></NavLink>
			    <NavLink activeClassName="active noDisable" to="/work" onClick={this.props.toggleSideNav} ><FontAwesome.FaFolderO /></NavLink>
			  </nav>

			  <div className="nav-name vertical-text">corwin street</div>
			  <ul className="social">
			    <li>
			      <a href="//www.linkedin.com/in/corstreet/" target="blank" rel="noreferrer"><FontAwesome.FaLinkedinSquare /></a>
			    </li>
			    <li>
			      <a href="//github.com/corstreet/Portfolio-2017-REACTjs-" target="blank"><FontAwesome.FaGithub /></a>
			    </li>
			    <li>
			      <a href="//codepen.io/corstreet/" target="blank"><FontAwesome.FaCodepen /></a>
			    </li>
			    <li>
			      <a href="mailto:thecorwinstreet@gmail.com"><FontAwesome.FaEnvelopeO /></a>
			    </li>
			  </ul>
			  <div className="social--mobile">
			  	<a href="javascript:;" className="social--mobile-menu-icon" onClick={this.toggleSocialNav.bind(this)}><MdMenu className="md-24" /></a>
			  	<FadeInSocialNav isVisible={socialMobileOpen} />
			  </div>
			</div>
			</section>
		)
	}
}

export default Navbar;
