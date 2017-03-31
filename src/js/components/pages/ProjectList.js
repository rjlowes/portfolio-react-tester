'use strict';

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import ProjectListItem from '../modules/ProjectListItem';


export default class ProjectList extends React.Component {

	constructor(props) {
		super(props);

		this.projectsPerPage = 6;
		this.projects = null;
		this.pages = [];
		this.idx = 0;
		this.state = {
			projects: []
		};

		this.prev = this.prev.bind(this);
		this.next = this.next.bind(this);
	}

	componentDidMount() {
		this.loadProjects();
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate');
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('componentWillUpdate');
	}

	componentWillAppear() {
		console.log('anim componentWillAppear');
	}
	componentDidAppear() {
		console.log('anim componentDidAppear');
	}
	componentWillEnter() {
		console.log('anim componentWillEnter');
	}	
	componentDidEnter() {
		console.log('anim componentDidEnter');
	}
	componentWillLeave() {
		console.log('anim componentWillLeave');
	}
	componentDidLeave() {
		console.log('anim componentDidLeave');
	}

	loadProjects() {
		var data = [];
		for(var i = 0; i <= 13; i++) {
			data.push({
				id: i,
				title: 'Project ' + i,
				tech: 'HTML / Sass / JavaScript / JSP'
			});
		}

		this.projects = data;
		this.setState({projects: data});
		this.paginate();
	}

	paginate() {
		var d = JSON.parse(JSON.stringify(this.projects));
		while(d.length) {
			this.pages.push(d.splice(0, this.projectsPerPage));
		}
	}

	prev() {
		this.idx = this.idx - 1 <= 0 ? 0 : this.idx - 1;
		this.choosePage();
	}

	next() {
		this.idx = this.idx + 1 >= this.pages.length ? this.pages.length - 1 : this.idx + 1;
		this.choosePage();
	}

	choosePage() {
		this.setState({
			projects: this.pages[this.idx]
		});
	}

	render() {
		return (
			<div>
				<h1>Project list</h1>
				<ReactCSSTransitionGroup
					component="ul" className="row"
		          transitionName="example"
		          transitionEnterTimeout={1000}
		          transitionLeaveTimeout={1000}>
		          {this.state.projects.map(function (project, index) {
						return <li key={index} className="col-sm-3"><ProjectListItem project={project} /></li>
					})}
		        </ReactCSSTransitionGroup>
				<ul>
					<li onClick={this.prev}>prev</li>
					<li onClick={this.next}>next</li>
				</ul>
			</div>
		)
	}
}
