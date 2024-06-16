import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
export const CharactersInfo = props => {
	
    const { store, actions } = useContext(Context);
    const [peopleViews, setPeopleViews] = useState({})
    useEffect(()=>{
        console.log('se cargo la vista de Personajes')
        fetch('https://www.swapi.tech/api/people/' + params.people_id)
                    .then((response) => response.json())
                    .then((data)=> setPeopleViews(data.result.properties))
    },[])
    const params = useParams();
    return (
        <div className="jumbotron mx-5">
            <h1 className="display-4">Vista people: {params.people_id}</h1>
            <hr className="my-4" />
            <img src="" id="imagenes"></img>
            <p> eye_color:{peopleViews.eye_color} </p>
            <p> url:{peopleViews.url} </p>
            <p> name:{peopleViews.name} </p>
            <p> height:{peopleViews.height} </p>
            <p> properties:{peopleViews.properties} </p>
            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};