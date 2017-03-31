'use strict';

import React from 'react';


export default class HashTag extends React.Component {
	constructor(props) {
		super(props);
		this.state = {display: ''};

		this.message = 'of #JavaScript';

		this.messages = [
			'of #JavaScript',
			'#frontend and #backend',
			'#HTML #Sass #JavaScript',
			'#ReactJS #Angular'
		];
		this.pointer = 0;
		this.interval = null;
	}

	componentDidMount() {
		this.printLetters();
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	getNextMessage() {
		var msg = this.messages[this.pointer++];
		if(this.pointer > this.messages.length - 1) {
			this.pointer = 0;
		}
		return msg;
	}

	printLetters() {
		var i = 0;
		var _this = this;
		var display = '';
		this.message = this.getNextMessage();
	    this.interval = setInterval(function () {
	    	display = display += _this.message.charAt(i);
	        _this.setState({display: display});
	        i++;
	        if (i > _this.message.length){
	            clearInterval(_this.interval);
	            _this.deleteLetters();
	        }
	    }, 100);
	}

	deleteLetters() {
		var i = 0;
		var _this = this;
		var display = this.state.display;
		var displayArray = this.state.display.split('');
	    this.interval = setInterval(function () {
	    	displayArray.pop();

	    	if(displayArray.length == 0) {
	    		clearInterval(_this.interval);
	    		_this.printLetters();
	    	}

	    	_this.setState({display: displayArray.join('')});
	    }, 3);
	}

	render() {
		return (
			<p className="hashtag">{this.state.display}</p>
		);
	}
}