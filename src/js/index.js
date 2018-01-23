import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import '../css/styles.scss';

import App from './components/App';

const app = document.getElementById('app');

render((
	<BrowserRouter>
		<App />
	</BrowserRouter>
), app);
