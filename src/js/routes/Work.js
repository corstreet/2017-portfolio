import React from 'react';

class Work extends React.Component {

	render() {
		return (
			<div className="container work-container">
				<div className="row">
					<img className="project-image" src="./assets/images/ch-desktop.png" alt=""/>
					<div className="project-details">
						<div className="project-tools">
							<h1>Collecalth</h1>
							<p>Words for you. Some more for me the doctor. Hamburgers, with corn sauce aoili and broccoli bread.</p>
						</div>
						<div className="project-blurb">
							<h1>Collective Health</h1>
							<p>Words for you. Some more for me the doctor. Hamburgers, with corn sauce aoili and broccoli bread.</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Work;