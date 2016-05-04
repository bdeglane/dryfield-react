'use strict';
export default class Action {
	constructor() {
	}

	static water(state, id) {
		if (state.fields[id].water < 100)
			state.fields[id].water += 10;

		return state;
	}

	static harvest(state, id) {
		if (state.fields[id].harvest >= 100) {
			state.fields[id].harvest = 0;
			state.fields[id].maturity = false;
		}

		return state;
	}

	static grow(state) {
		for (let field in state.fields) {
			// check maturity
			if (state.fields[field].maturity = true) {
				state.fields[field].timer -= 1;
			}

			// if timer ended, reset field
			if (state.fields[field].timer <= 0) {
				state.fields[field].harvest = 0;
			}

			// increment
			if (
				state.fields[field].water > 0 &&
				state.fields[field].harvest < 100
			) {
				state.fields[field].water -= 10;
				state.fields[field].harvest += 10;
			}

			// check maturity
			if (state.fields[field].harvest >= 100) {
				state.fields[field].maturity = true;
			} else {
				state.fields[field].maturity = false;
			}
		}
		return state;
	}
}