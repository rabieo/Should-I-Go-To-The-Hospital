import React, { Component } from "react";
import "./questionPage.css";

// react component to render question page
// properties:
// -string (string)
// -handleYes (function)
// -handleNo (function)
// -id (integer)
// this react component renders a question string and 2 buttons.

export default class QuestionPage extends Component {
	render() {
		return (
			<div>
				<div className="question">
					<h1>{this.props.string}</h1>
				</div>
				<div className="flex">
					<div>
						<button
							className="btn btn-primary btn-lg"
							onClick={this.props.handleYes}
							id={this.props.id}
						>
							Yes
						</button>
					</div>
					<button
						className="btn btn-danger btn-lg"
						onClick={this.props.handleNo}
						id={this.props.id}
					>
						No
					</button>
				</div>
			</div>
		);
	}
}
