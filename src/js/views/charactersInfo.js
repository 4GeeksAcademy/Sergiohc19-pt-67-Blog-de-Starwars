import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/charactersInfo.css";

export const CharactersInfo = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharactersInfo()
	}, []);

	return (

		
		<div className="container">

			<div className="card mb-3" >
				<div className="row g-0">
					<div className="col-md-4">
						<img src="..." className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							
						</div>
					</div>
				</div>
			</div>




		</div>
	);
};
