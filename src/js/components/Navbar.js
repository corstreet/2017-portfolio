import React from 'react';

class Navbar extends React.Component {

	constructor(props) {
		super(props);

		this.handleNavClick = this.handleNavClick.bind(this);
	}

	handleNavClick (e) {
		console.log(e.target);
		const activeNavItem = document.querySelector('.nav a.active');
		if (activeNavItem) {
			activeNavItem.classList.remove('active');
		}
		e.target.classList.add('active');
	}

	render () {
		return (

			<div id="nav-bar">
			  <a href="javascript:;" className="logo">
			    <i className="fa fa-terminal"></i>
			  </a>

			  <nav onClick={this.handleNavClick} className="nav">
			    <a href="javascript:;"><i className="fa fa-home"></i></a>
			    <a href="javascript:;"><i className="fa fa-code"></i></a>
			    <a href="javascript:;"><i className="fa fa-folder"></i></a>
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

		)
	}
}

export default Navbar;