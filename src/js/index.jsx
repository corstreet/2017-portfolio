import React from 'react';
import {render} from 'react-dom';
import Navbar from './components/Navbar';

class App extends React.Component {
  render () {
    return (
	    <Navbar />
    )
  }
}

render(<App/>, document.getElementById('app'));