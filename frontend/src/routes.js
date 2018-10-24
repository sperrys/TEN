
import React from 'react';
import { Route } from 'react-router';
import App from './App.js';
import NavigationBar from './NavigationBar.js';

export default (
	<Route path='/' component={App}>
		<Route path='contact' component={App} />
	</Route>
);
