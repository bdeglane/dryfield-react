import React from 'react';

export default class WaterTank extends React.Component {
	constructor() {
		super();
	}

	// long mais pas besoin de bind en ajoutant l'événement directement
	//componentDidMount() {
	//	document.getElementById('buy')
	//		.addEventListener('click', (e)=> {
	//			e.preventDefault();
	//			console.log('click sur buy');
	//		}, false);
	//}

	buyWater(event) {
		this.props.onBuyWater();
	}

	render() {
		return (
			<div id="water-tank" className="col-sm-4">
				<div className="panel panel-primary">
					<div className="panel-heading">
						Water Tank
					</div>
					<div className="panel-body">
						<h3 className="value">{ this.props.value }</h3>
						<a className="btn btn-default"
						   href="#"
						   role="button"
						   id="buy"
						   onClick={ this.buyWater.bind(this) }>
							Buy Water
						</a>
					</div>
				</div>
			</div>
		)
	}
}