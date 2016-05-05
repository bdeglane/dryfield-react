'use strict';

import { ceil } from 'lodash';

export default class Action {
	/**
	 *
	 * @param state
	 * @param action
	 * @param params
	 * @returns {*}
	 */
	static reducer(state, action, params) {
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

	static irriguer(state, id) {
		if (state.game) {
			if (state.fields[id].water < 100)
				state.fields[id].water += 10;
		}
		return state;
	}

	static recolter(state, id) {
		if (state.game) {
			if (state.fields[id].harvest >= 100) {
				state.fields[id].harvest = 0;
				state.fields[id].increment *= 1.02;
			}
		}
		return state;
	}

	static buyWater(state) {
		if (state.game) {
			if (state.score > 0) {
				state.waterTank += 100;
				state.score -= 1;
			}
		}
		return state;
	}

	static score(state) {
		if (state.game) {
			state.score += 1;
			return state;
		}
	}

	static grow(state) {
		if (state.game) {
			for (let field in state.fields) {

				// if timer ended
				// reset field
				if (state.fields[field].timer <= 0) {
					state.fields[field].harvest = 0;
					state.fields[field].timer = 4;
					state.fields[field].maturity = false;
				}

				// check maturity
				if (state.fields[field].maturity) {
					state.fields[field].timer -= 1;
				}

				// increment
				if (
					state.fields[field].water > 0 &&
					state.fields[field].harvest < 100
				) {
					state.fields[field].water = ceil((state.fields[field].water - state.fields[field].increment), 2);
					state.fields[field].harvest += 10;
				}

				// check maturity
				if (state.fields[field].harvest >= 100) {
					state.fields[field].maturity = true;
				} else {
					state.fields[field].maturity = false;
				}
			}
		}
		return state;
	}
}