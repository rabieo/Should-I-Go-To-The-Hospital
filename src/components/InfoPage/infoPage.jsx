import React, { Component } from 'react';
import "./infoPage.css"

// react component to render info page
// properties:
// -answer (string)
// -info (string)

export default class InfoPage extends Component {
	render() {
		return (
			<div className="info">
				<h1>{this.props.answer}</h1>
				<div className="info1">
				<div className="card text-white bg-info mb-3">
					<h4>{this.props.info}</h4>
				</div>
				</div>
			</div>
		);
	}
}
