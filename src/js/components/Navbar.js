import React from 'react';
import { NavLink } from 'react-router-dom';

import ProjectSlideNav from './ProjectSlideNav';


class Navbar extends React.Component {

	constructor(props) {
		super(props);
	}

	render () {
		return (
			<section>
			<div id="nav-bar">
			  <a onClick={this.props.toggleSideNav} className="logo">
			    <i className="fa fa-terminal"></i>
			  </a>

			  <nav className="nav">
			    <NavLink activeClassName="active" exact to="/"><i className="fa fa-home"></i></NavLink>
			    <NavLink activeClassName="active" to="/about"><i className="fa fa-id-card"></i></NavLink>
			    <NavLink activeClassName="active" to="/work"><i className="fa fa-folder"></i></NavLink>
			  </nav>

			  <div className="nav-name vertical-text">corwin street</div>
			  <ul className="social">
			    <li>
			      <a href="javascript:;"><i className="fa fa-linkedin"></i></a>
			    </li>
			    <li>
			      <a href="javascript:;"><i className="fa fa-github"></i></a>
			    </li>
			    <li>
			      <a href="javascript:;"><i className="fa fa-envelope"></i></a>
			    </li>
			    <li>
			      <a href="javascript:;"><i className="fa fa-file"></i></a>
			    </li>
			  </ul>
			</div>
			</section>

		)
	}
}

export default Navbar;
