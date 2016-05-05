import React from 'react';
import ReactDOM from 'react-dom';
import Store from '../core/Store.js';
import Action from '../container/Action.js';
import DryField from '../container/DryField.jsx';


export default class Game {

	constructor() {
		this.timer = null;
		this.dump = 1;
		this.store = new Store(Action.reducer);
	}

	init() {
		this.store.subscribe(()=> this.render());
		this.frame();
	}

	frame() {
		this.timer = setInterval(()=> {
			this.store.dispatch({type: 'GROW'})
		}, 1000);

		// run for only 15 sec
		setTimeout(()=> {
			clearInterval(this.timer);
			this.timer = null;
		}, 30000);
	}

	render() {
		console.log(this.store.getState());
		ReactDOM.render(
			<DryField
				state={ this.store.getState() }
				onIrriguer={ (params)=> this.store.dispatch({type:'IRRIGUER'},params) }
				onRecolter={ (params)=> this.store.dispatch({type:'RECOLTER'},params) }
				onBuyWater={ ()=> this.store.dispatch({type:'BUY_WATER'}) }
			/>,
			document.getElementById('app')
		);
	}
}