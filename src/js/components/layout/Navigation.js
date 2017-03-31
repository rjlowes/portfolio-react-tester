'use strict';

import React from 'react';

import { Link } from 'react-router-dom';


export default class Navigation extends React.Component {
	constructor(props) {
		super(props);

		this.openMenu = this.openMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);

		this.state = {navClass: 'global-nav__container'};
	}

	openMenu(e) {
		this.setState({navClass: 'global-nav__container open'});
	}

	closeMenu(e) {
		this.setState({navClass: 'global-nav__container'});
	}

	render() {
		return (
			<div className="global-nav">
				<button className="global-nav__open-btn" onClick={this.openMenu}>Menu open</button>
				<nav className={this.state.navClass}>
					<button className="global-nav__close-btn" onClick={this.closeMenu}>Menu close</button>
					<ul className="list-nav">
						<li className="list-nav__item"><Link to="/" className="list-nav__item-link">Home</Link></li>
	                    <li className="list-nav__item"><Link to="/projects">Projects</Link></li>
	                    <li className="list-nav__item"><Link to="/projects/1">Project 1</Link></li>
					</ul>
				</nav>
			</div>
		);
	}
}
