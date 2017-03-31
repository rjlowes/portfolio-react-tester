'use strict';

import React from 'react';

import HashTag from '../modules/HashTag';


export default class Home extends React.Component {

	render() {
		return (
			<div className="jumbo-banner">
				<h1>We are an agency</h1>
				<HashTag />
			</div>
		)
	}
}