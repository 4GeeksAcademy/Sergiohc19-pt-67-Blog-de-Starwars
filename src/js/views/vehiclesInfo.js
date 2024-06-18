import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehiclesInfo = props => {

	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {

		actions.getVehiclesInfo(params.uid)
	

	}, [])

	return (

		<div className="jumbotron mx-5 my-5">


			<div className="card mb-3 border border-1  rounded-start  border border-warning-subtle" style={{ width: "1260px", height: "555px", background: "black", color: "#FFEB1F" }}>

				<div className="d-flex ">
					<div className="col-md-4">
						<img src="https://starwars-visualguide.com/assets/img/vehicles/18.jpg" className="img-fluid rounded-start object-fit-cover" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">

							<div className="d-flex">
								<ul>

									<li className="p-3" ><h6>"Cargo_capacity":
										{store?.infovehicles?.cargo_capacity}</h6>
									</li>

									<li className="p-3"><h6>  "consumables":
										{store?.infovehicles?.consumables}</h6>
									</li>

									<li className="p-3"><h6> "cost_in_credits":
										{store?.iinfovehicles?.cost_in_credits}</h6>
									</li>

									<li className="p-3"><h6> "created":
										{store?.infovehicles?.created}</h6>
									</li>

									<li className="p-3"><h6>   "crew":
										{store?.infovehicles?.crew}</h6>
									</li>

									<li className="p-3"><h6>"edited":
										{store?.infovehicles?.edited}</h6>
									</li>

									<li className="p-3"><h6>   "length":
										{store?.infovehicles?.length}</h6>
									</li>

									<li className="p-2"><h6>    "manufacturer":
										{store?.infovehicles?.manufacturer}</h6>
									</li>
								</ul>
								<ul>
									<li className="p-3"><h6>  "max_atmosphering_speed":
										{store?.infovehicles?.max_atmosphering_speed}</h6>
									</li>

									<li className="p-3"><h6>   "model":
										{store?.infovehicles?.model}</h6>
									</li>

									<li className="p-3"><h6>  "name":
										{store?.infovehicles?.name}</h6>
									</li>

									<li className="p-3"><h6>  "passengers":
										{store?.infovehicles?.passengers}</h6>
									</li>

									<li className="p-3"><h6> "pilots":
										{store?.infovehicles?.pilots}</h6>
									</li>

									<li className="p-3"><h6> "films":
										{store?.infovehicles?.films}</h6>
									</li>

									<li className="p-3"><h6>  "url":
										{store?.infovehicles?.url}</h6>
									</li>

									<li className="p-3"><h6>  "vehicle_class":
										{store?.infovehicles?.vehicle_class}</h6>
									</li>


								</ul>
							</div>/
						</div>
					</div>
				</div>
			</div>

			<Link to="/">
				<span className="btn btn-warning btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>


	);
};
