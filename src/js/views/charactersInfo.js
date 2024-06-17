import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
export const CharactersInfo = props => {

    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getCharactersInfo(params.uid)
        actions.getPhoto(params.uid)
    }, [])

    return (

        <div className="jumbotron mx-5 my-5">


            <div className="card mb-3 border border-1  rounded-start  border border-warning-subtle" style={{ width: "650px", height: "525px", background: "black", color: "#FFEB1F" }}>

                <div className="d-flex">
                    <div className="col-md-7">
                        <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" className="img-fluid rounded-start object-fit-cover" alt="..." />
                    </div>
                    <div className="col-md-5">
                        <div className="card-body">
                            <h5 className="card-title">CharactersInfo</h5>

                            <ul>
                                <li><h1>
                                    {store?.info?.birth_year}</h1>
                                </li>
                                <li><h1>
                                    {store?.info?.eye_color}</h1>
                                </li><h1>
                                    {store?.info?.films}</h1>
                                <li><h1>
                                    {store?.info?.gender}</h1>
                                </li>  <h1>
                                    {store?.info?.hair_color}</h1>
                                <li><h1>
                                    {store?.info?.height}</h1>
                                </li>
                                <li><h1>
                                    {store?.info?.homeworld}</h1>
                                </li>
                                <li><h1>
                                    {store?.info?.mass}</h1>
                                </li>
                                <li><h1>
                                    {store?.info?.name}</h1>
                                </li>
                                <li><h1>
                                    {store?.info?.skin_color}</h1>
                                </li>
                                <li><h1>
                                    {store?.info?.created}</h1>
                                </li>
                                <li><h1>
                                    {store?.info?.edited}</h1>
                                </li>
                                <li><h1>
                                    {store?.info?.species}</h1>
                                </li>
                                <li><h1>
                                    {store?.info?.starships}</h1>
                                </li>
                                <li><h1>
                                    {store?.info?.url}</h1>
                                </li>
                                <li><h1>
                                    {store?.info?.vehicles}</h1>
                                </li>
                            </ul>
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