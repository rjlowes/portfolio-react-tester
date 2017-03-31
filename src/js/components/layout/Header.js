'use strict';

import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';




export default class Header extends React.Component {

	constructor(props) {
		super(props);

		this.openMenu = this.openMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);

		this.state = {navClass: 'navbar'};
	}

	openMenu(e) {
		this.setState({navClass: 'navbar open'});
	}

	closeMenu(e) {
		this.setState({navClass: 'navbar'});
	}

	render() {
		return (
			<header className="global-header">
				<div className="global-header__logo">
					<img src="images/logo.png" width="70" />
				</div>
				<div className="global-header__menu-btn">
					<button className="icon-btn" onClick={this.openMenu}>
						Menu
						<svg className="icon-btn__icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
						    <path d="M0 0h24v24H0z" fill="none"/>
						    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
						</svg>
					</button>
				</div>
				<nav className={this.state.navClass}>
					<button className="icon-btn icon-btn--inverse" onClick={this.closeMenu}>
						Close
						<svg className="icon-btn__icon" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
						    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
						    <path d="M0 0h24v24H0z" fill="none"/>
						</svg>
					</button>
					<ul className="list-nav">
	                    <li className="list-nav__item"><Link to="/projects" className="list-nav__item-link" onClick={this.closeMenu}>Work</Link></li>
	                    <li className="list-nav__item"><Link to="/projects/1" className="list-nav__item-link">About</Link></li>
	                    <li className="list-nav__item"><Link to="/projects/1" className="list-nav__item-link">Contact Me</Link></li>
					</ul>
				</nav>
			</header>
		);
	}
}