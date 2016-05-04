import React from 'react';
import ReactDOM from 'react-dom';

// import {createStore} from '../core/_store.js';

import Store from '../core/Store.js';

import Action from '../container/Action.js';
import DryField from '../container/DryField.jsx';


export default class Game {

    constructor() {
        this.timer = null;
        this.dump = 1;
        this.store = new Store(this.reducer);
    }

    init() {
        this.store.subscribe(()=> this.render());
        // this.frame();
    }

    /**
     *
     * @param state
     * @param action
     * @param params
     * @returns {*}
     */
    reducer(state, action, params) {
        switch (action.type) {
            case 'IRRIGUER':
                return Action.irriguer(state, params);
                break;
            case 'RECOLTER':
                return Action.recolter(state, params);
                break;
            case 'BUY_WATER':
                return Action.buyWater(state);
                break;
            case 'GROW':
                return Action.grow(state);
                break;
            default:
                console.log('call unkown action current state return');
                return state;
                break;
        }
    }

    frame() {
        this.timer = setInterval(()=> {
            this.store.dispatch({type: 'GROW'})
        }, 1000);

        // run for only 15 sec
        setTimeout(()=> {
            clearInterval(this.timer);
            this.timer = null;
        }, 15000);
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