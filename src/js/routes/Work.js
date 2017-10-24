import React from 'react';

class Work extends React.Component {
	render() {

		const { screenshots, project, company } = this.props.state

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
							<a href="javascript:;" onClick={this.props.changePage}>See It Live</a>
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