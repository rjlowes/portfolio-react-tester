'use strict';

import React from 'react';
import { Link } from 'react-router-dom';


export default class ProjectListItem extends React.Component {

	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate child');
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('componentWillUpdate child');
	}

	render() {
		return (
			<article className="card">
				<Link to="/projects/1" className="card__img">
					<img src="images/placeholder.png" />
					<div className="card__screen">
						<h2>{ this.props.project.title }</h2>
					</div>
				</Link>
				
			</article>
		);
	}
}