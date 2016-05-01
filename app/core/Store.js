/**
 *
 * @param reducer
 * @returns {{getState: getState, dispatch: dispatch, subscribe: subscribe}}
 */
export const createStore = (reducer) => {
	let state;
	let listeners = [];

	/**
	 * @returns {state}
	 */
	const getState = () => state;

	/**
	 *
	 * @param action
	 */
	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach(listener => listener());
	};

	/**
	 *
	 * @param listener
	 * @returns {Function}
	 */
	const subscribe = (listener)=> {
		listeners.push(listener);
		return ()=> {
			listeners = listeners.filter(l => l !== listener);
		}
	};

	/**
	 * first render
	 */
	dispatch({});

	return {getState, dispatch, subscribe};

};