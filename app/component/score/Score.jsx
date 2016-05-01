import React from 'react';

export default class Score extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div id="score" className="col-sm-4 score">
				<div className="panel panel-primary">
					<div className="panel-heading">
						Score
					</div>
					<div className="panel-body">
						<h3 className="value">{ this.props.value }</h3>
					</div>
				</div>
			</div>
		)
	}
}