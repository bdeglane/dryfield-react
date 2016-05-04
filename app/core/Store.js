'use strict';

export default class Store {
    /**
     *
     * @param reducer
     */
    constructor(reducer) {
        this.reducer = reducer;
        // initial state of the application
        // need immutability
        this.state = {
            score: 0,
            waterTank: 100,
            fields: [
                {
                    water: 100,
                    harvest: 0,
                    mature: false
                }, {
                    water: 100,
                    harvest: 0,
                    mature: false
                }, {
                    water: 100,
                    harvest: 0,
                    mature: false
                }
            ]
        };
        this.listeners = [];
        // initial dispatch
        // this.dispatch({});
    }

    /**
     * Retourne l'etat courant
     *
     * @returns {Object}
     */
    getState() {
        return this.state;
    }

    /**
     * Declare le declenchement d'une action et
     * transmet eventuellement le(s) parametre(s)
     *
     * @param action string|const action name
     * @param params *
     */
    dispatch(action, params) {
        this.state = this.reducer(this.state, action, params);
        this.listeners.forEach(listener => listener());
    }

    /**
     * Un listener est une callback executer
     * lors de l'appel d'une action
     *
     * @param listener
     */
    subscribe(listener) {
        this.listeners.push(listener);
        return ()=> {
            this.listeners = this.listeners.filter(l => l !== listener);
        }
    }
}