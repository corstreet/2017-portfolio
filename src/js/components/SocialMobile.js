import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa';



class SocialMobile extends React.Component {

	render() {
		return (
			<div>
				<ul className="social--mobile-slideBox">
					<li>
						<a target="blank" href="//www.linkedin.com/in/corstreet/"><FontAwesome.FaLinkedinSquare /></a>
					</li>
					<li>
						<a target="blank" href="//github.com/corstreet/Portfolio-2017-REACTjs-"><FontAwesome.FaGithub /></a>
					</li>
					<li>
						<a target="blank" href="//codepen.io/corstreet/"><FontAwesome.FaCodepen /></a>
					</li>
					<li>
						<a target="blank" href="mailto:thecorwinstreet@gmail.com"><FontAwesome.FaEnvelopeO /></a>
					</li>
				</ul>
			</div>
		);
	}

}

export default SocialMobile;