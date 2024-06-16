import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getInfo()
	}, []);

	return (
		<div className="container">
		





		</div>
	);
};
