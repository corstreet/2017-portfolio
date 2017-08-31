import React from 'react';


class Home extends React.Component {
	render() {
		return (
			<div>
				<div id="particles-js"></div>
				<div className="home-content">
				  <h1 className="home-h1">Corwin Street<span className="name-period">.</span></h1>
				  <div className="home-subtext">Frontend Developer</div>
				</div>
				<div className="home-nav-wrap">
				  <div className="nav-link onHover work">
				    <a href="work.html">Work<span className="right-bounce-arrow">&rarr;</span></a>
				  </div>
				  <div className="nav-link-border-bottom"></div>
				</div>
			</div>
		)
	}
}

export default Home;