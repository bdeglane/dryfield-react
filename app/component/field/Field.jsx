import React from 'react';
import './field.scss';

import { irriguerAction,recolterAction } from '../../action/action.js';

import ButtonWater from './ButtonWater.jsx';
import ButtonHarvest from './ButtonHarvest.jsx';
import Progress from './Progress.jsx';

export default class Field extends React.Component {
	constructor(props) {
		super(props);
	}

	irriguer(event) {
		this.props.onIrriguer(this.props.id)
	}

	recolter(event) {
		this.props.onRecolter(this.props.id)
	}

	render() {
		return (
			<div id={ 'field-' + this.props.id } className="col-sm-4 field">
				<div className="panel panel-primary">
					<div className="panel-heading">
						Field
					</div>
					<div className="panel-body">
						<div className="row">
							<div className="col-sm-12">
								<div className="btn-group btn-group-justified marge" role="group" aria-label="...">
									<div className="btn-group" role="group">
										<ButtonWater onClick={ this.irriguer.bind(this)  } id={ this.props.id }/>
									</div>
									<div className="btn-group" role="group">
										<ButtonHarvest onClick={ this.recolter.bind(this) } id={ this.props.id }/>
									</div>
								</div>
								<Progress value={ this.props.water } type="info"/>
								<Progress value={ this.props.harvest } type="success"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}