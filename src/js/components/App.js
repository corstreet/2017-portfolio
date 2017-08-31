import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from '../routes/Home';
import About from '../routes/About';
import Work from '../routes/Work';


class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
				  <Navbar />
			      <Route exact path="/" component={Home}/>
			      <Route path="/about" component={About}/>
			      <Route path="/work" component={Work}/>
			    </div>
			</BrowserRouter>
		)
	}
}

export default App;