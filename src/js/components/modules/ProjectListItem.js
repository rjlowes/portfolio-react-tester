'use strict';

import React from 'react';
import { Link } from 'react-router-dom';


export default class ProjectListItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {clazz: this.createClazz()};
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate child');
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('componentWillUpdate child');
	}

	// Can have duplicates. Try and array with fixed values
	// and pop them off the end.
	createClazz() {
		var clazz = 'card card--timing-',
			rand = Math.round(Math.random() * 10) + 1;

		return clazz + rand;
	}

	render() {
		return (
			<article className={this.state.clazz}>
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