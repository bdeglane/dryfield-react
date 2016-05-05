import React from 'react';

const ButtonHarvest = ({id,onClick,enable})=> {
	return (
		<button type="button"
				className={ 'btn btn-success ' + enable }
				id={ 'rec' + id }
				onClick={ onClick }>
			<span className="glyphicon glyphicon-leaf" aria-hidden="true"></span>
		</button>
	)
};
export default ButtonHarvest;