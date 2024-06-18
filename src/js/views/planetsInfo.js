import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetsInfo = props => {

    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {

        actions.getPlanetsInfo(params.uid)

    }, [])

    return (

        
        <div className="jumbotron mx-5 my-5">


            <div className="card mb-3 border border-1  rounded-start  border border-warning-subtle" style={{ width: "1260px", height: "555px", background: "black", color: "#FFEB1F" }}>

                <div className="d-flex ">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/4.jpg`} className="img-fluid rounded-start object-fit-cover" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">

                            <div className="d-flex">
                                <ul>

                                    <li className="p-3" ><h6> "climate":
                                        {store?.infoplanets?.climate}</h6>
                                    </li>

                                    <li className="p-3"><h6>"created":
                                        {store?.infoplanets?.created}</h6>
                                    </li>

                                    <li className="p-3"><h6> "diameter":
                                        {store?.infoplanets?.diameter}</h6>
                                    </li>

                                    <li className="p-3"><h6>   "edited":
                                        {store?.infoplanets?.edited}</h6>
                                    </li>

                                    <li className="p-3"><h6>   "films":
                                        {store?.infoplanets?.films}</h6>
                                    </li>

                                    <li className="p-3"><h6>"gravity":
                                        {store?.infoplanets?.gravity}</h6>
                                    </li>

                                    <li className="p-3"><h6> "name":
                                        {store?.infoplanets?.name}</h6>
                                    </li>

                                    <li className="p-2"><h6>   "orbital_period":
                                        {store?.infoplanets?.orbital_period}</h6>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="p-3"><h6>    "population":
                                        {store?.infoplanets?.population}</h6>
                                    </li>

                                    <li className="p-3"><h6>  "residents":
                                        {store?.infoplanets?.residents}</h6>
                                    </li>

                                    <li className="p-3"><h6>  "rotation_period":
                                        {store?.infoplanets?.rotation_period}</h6>
                                    </li>

                                    <li className="p-3"><h6> "surface_water":
                                        {store?.infoplanets?.surface_water}</h6>
                                    </li>

                                    <li className="p-3"><h6>  "terrain":
                                        {store?.infoplanets?.terrain}</h6>
                                    </li>

                                    <li className="p-3"><h6> "url":
                                        {store?.infoplanets?.url}</h6>
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
