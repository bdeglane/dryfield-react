import React from 'react';

const ButtonWater = ({id,onClick})=> {
	return (
		<button type="button"
				className="btn btn-info"
				id={ 'irr' + id }
				onClick={ onClick }>
			<span className="glyphicon glyphicon-tint" aria-hidden="true"></span>
		</button>
	)
};
export default ButtonWater;