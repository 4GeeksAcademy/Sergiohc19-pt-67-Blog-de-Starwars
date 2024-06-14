
import "../../styles/home.css";
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getCharacters()
		actions.getVehicles()
		actions.getPlanets()
	}, []);

	return (
		<div className="text-center mt-5">

			<h1>Star Wars!</h1>
			
			<div className="d-flex">
				
			
			<div className="characters">
				<h2>Characters</h2>
			</div>


			<div className="vehicles">
				<h2>Vehicles</h2>
			</div>



			<div className="planets"> 
				<h2>Planets</h2>
			</div>

			</div>


		</div>


	);
};
