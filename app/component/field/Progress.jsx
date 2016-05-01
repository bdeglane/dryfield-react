import React from 'react';

const Progress = ({value,type})=> {
	return (
		<div className="progress">
			<div className={ 'progress-bar progress-bar-' + type + ' progress-water-0' }
				 role="progressbar"
				 aria-valuenow={ value }
				 aria-valuemin="0"
				 aria-valuemax="100"
				 style={{ width: value +'%' }}>
				{ value }
			</div>
		</div>
	);
};
export default Progress;