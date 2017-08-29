import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Navbar from '../components/Navbar';

class Home extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path="/home" component={Home}/>
					<Navbar />
					<div>HELLO!!</div>
				</div>
			</BrowserRouter>
		)
	}
}

export default Home;