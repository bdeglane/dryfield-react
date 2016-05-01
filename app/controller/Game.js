import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from '../core/Store.js';
import DryField from '../container/DryField.jsx';


export default class Game {
	constructor() {
		this.timer = null;
		this.dump = 1;
		this.store = createStore(Game.reducer);
	}

	init() {
		this.store.subscribe(this.render.bind(this));
	}

	static reducer(state = {
		score: 0,
		waterTank: 100,
		fields: [
			{
				water: 100,
				harvest: 10
			}, {
				water: 100,
				harvest: 10
			}, {
				water: 100,
				harvest: 10
			},
		]
	}, action) {
		switch (action.type) {
			case 'IRRIGUER':
				//return state + 1;
				console.log('call action IRRIGUER');
				Game.water(state);
				break;
			case 'RECOLTER':
				//return state + 1;
				console.log('call action RECOLTER');
				Game.harvest(state);
				break;
			case 'BUY_WATER':
				//return state + 1;
				console.log('call action BUY_WATER');
				return state;
				break;
			default:
				console.log('call unnkown action current state return');
				return state;
				break;
		}
	}

	static water(state) {
		state.fields[0].water += 10;
		console.log(state);
		return state;
	}

	static harvest(state) {
		state.fields[0].harvest = 0;
		console.log(state);
		return state;
	}

	render() {
		ReactDOM.render(
			<DryField
				state={ this.store.getState() }
				onIrriguer={ ()=> this.store.dispatch({type:'IRRIGUER'}) }
				onRecolter={ ()=> this.store.dispatch({type:'RECOLTER'}) }
				onBuyWater={ ()=> this.store.dispatch({type:'BUY_WATER'}) }
			/>,
			document.getElementById('app')
		);
	}
}