/*
 * action types
 */

export const IRRIGUER = 'IRRIGUER';
export const RECOLTER = 'RECOLTER';

/*
 * action creators
 */

/**
 *
 * @param water
 * @returns {{type: string, water: *}}
 */
export function irriguerAction(water) {
	return {type: IRRIGUER, water}
}
/**
 *
 * @param harvest
 * @returns {{type: string, harvest: *}}
 */
export function recolterAction(harvest) {
	return {type: RECOLTER, harvest}
}


/*
 * Reducer
 */

/**
 *
 * @param state
 * @param action
 */
export function irriguerP(state, action) {

	// si l'etat est indéfini,
	// on retourne l'etat initial
	if (typeof state === 'undefined') {
		return 0;
	}

	if (action.type === 'IRRIGUER') {
		return state + 1;
	}
	// if action is not known
	else {
		return state;
	}
}

// better
export const dryFieldAction = (state = 0, action) => {
	switch (action.type) {
		case 'IRRIGUER':
			return state + 1;
			break;
		case 'RECOLTER':
			return state + 1;
			break;
		default:
			return state;
			break;
	}
};