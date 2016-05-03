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
        if (state.fields[id].harvest >= 100)
            state.fields[id].harvest = 0;

        return state;
    }

    static grow(state) {
        for (let field in state.fields) {
            state.fields[field].water -= 10;
            state.fields[field].harvest += 10;
        }
        return state;
    }
}