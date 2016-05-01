import React from 'react';

import Field from '../component/field/Field.jsx';
import Score from '../component/score/Score.jsx';
import WaterTank from '../component/waterTank/WaterTank.jsx';

export default class DryField extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let fields = this.props.state.fields.map((item, id)=> {
			return (
				<Field
					key={ id }
					id={ id }
					water={ item.water }
					harvest={ item.harvest }
					onRecolter={ this.props.onRecolter }
					onIrriguer={ this.props.onIrriguer }
				/>
			);
		});

		return (
			<div className="dryfield" id="dryfield">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<div className="panel panel-primary">
								<div className="panel-heading">
									Game
								</div>
								<div className="panel-body">
									<h3 className="value">Dry Field</h3>
									<p>Example Game using React.</p>
								</div>
							</div>
						</div>
						<Score value={ this.props.state.score }/>
						<WaterTank value={ this.props.state.waterTank } onBuyWater={ this.props.onBuyWater }/>
					</div>
				</div>
				<div className="container">
					<div className="row">
						{ fields }
					</div>
				</div>
			</div>
		)
	}
}