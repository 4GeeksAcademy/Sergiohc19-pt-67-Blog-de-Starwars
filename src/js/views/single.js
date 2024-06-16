import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	

	return (
		<div className="jumbotron">
		
		</div>
	);
};


