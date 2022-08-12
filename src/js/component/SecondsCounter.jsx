import React from "react";
import propTypes from "prop-types";

const SecondsCounter = (props) => {
	return (
		<div
			className="col text-white bg-dark m-1">
			<div className="card-body d-flex justify-content-center">
				<h1 className="card-title">
					{props.icono}
					{props.numero}
				</h1>
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	icono: propTypes.object,
	numero: propTypes.number,
};

export default SecondsCounter;