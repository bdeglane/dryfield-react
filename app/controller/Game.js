import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from '../core/Store.js';
import DryField from '../container/DryField.jsx';


export default class Game {
    constructor() {
        this.timer = null;
        this.dump = 1;
        this.store = createStore(Game.reducer);
    }

    init() {
        this.store.subscribe(()=> this.render());
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
    }, action, params) {
        switch (action.type) {
            case 'IRRIGUER':
                //return state + 1;
                console.log('call action IRRIGUER');
                return Game.water(state, params);
                break;
            case 'RECOLTER':
                //return state + 1;
                console.log('call action RECOLTER');
                return Game.harvest(state, params);
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

    static water(state, id) {
        state.fields[id].water += 10;
        console.log(state, id);
        return state;
    }

    static harvest(state, id) {
        state.fields[id].harvest = 0;
        console.log(state, id);
        return state;
    }

    render() {
        console.log(this, this.store.getState());
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