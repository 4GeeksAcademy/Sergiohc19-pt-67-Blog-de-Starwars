// src/pages/Home.js
import "../../styles/home.css";
import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CharactersInfo } from "../views/charactersInfo.js";
import { VehiclesInfo } from "./vehiclesInfo.js"
import { PlanetsInfo } from "./planetsInfo.js"

export const Home = () => {
    const { store, actions } = useContext(Context);


    useEffect(() => {
        actions.getCharacters();
        actions.getVehicles();
        actions.getPlanets();
    }, []);

    return (
        <div className="text-center">

            <div className="d-flex mx-5 px-2 mt-0">
                <iframe
                    className=" mt-3  border border-1  rounded-start  border border-warning-subtle"
                    width="560"
                    height="340"
                    src="https://www.youtube.com/embed/xr3hPFJAHO4?si=Javg3k_2jBqfeE99"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
                <iframe
                    className=" mt-3 border border-1  rounded-start  border border-warning-subtle"
                    width="560"
                    height="340"
                    src="https://www.youtube.com/embed/beAH5vea99k?si=n-_t3UeKtXv5jbs6"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
                <iframe
                    className="mt-3 border border-1  rounded-start  border border-warning-subtle"
                    width="560"
                    height="340"
                    src="https://www.youtube.com/embed/yhuKapE-Bio?si=YjbTsvm1qaY0Y4SS"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="d-flex">
                <div className="characters">
                    <h2>Characters</h2>
                    <div id="carouselCharacters" className="carousel slide rounded-start">
                        <div className="carousel-indicators">
                            {store.characters.map((item, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    data-bs-target="#carouselCharacters"
                                    data-bs-slide-to={index}
                                    className={index === 0 ? "active" : ""}
                                    aria-label={`Slide ${index + 1}`}
                                ></button>
                            ))}
                        </div>
                        <div className="carousel-inner">
                            {store.characters.map((item, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                    <img
                                        src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
                                        className="d-block w-100"
                                        alt={""}
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <Link to={`/charactersInfo/${item.uid}`} className="btn-info">
                                            {item.name}
                                        </Link>
                                        <button onClick={() => actions.addFavorits(item.uid, item.name)} className="like"><i class="fa-solid fa-heart fa-2xl" style={{ color: "#FFD43B" }}></i></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselCharacters"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselCharacters"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>







                <div className="vehicles">
                    <h2>Vehicles</h2>
                    <div id="carouselVehicles" className="carousel slide rounded-start">
                        <div className="carousel-indicators 2">
                            {store.vehicles.map((item, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    data-bs-target="#carouselVehicles"
                                    data-bs-slide-to={index}
                                    className={index === 0 ? "active" : ""}
                                    aria-label={`Slide ${index + 1}`}
                                ></button>
                            ))}
                        </div>
                        <div className="carousel-inner">
                            {store.vehicles.map((item, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                    <img
                                        src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`}
                                        className="d-block w-100"
                                        alt={""}
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <Link to={`/vehiclesInfo/${item.uid}`} className="btn-info">
                                            {item.name}
                                        </Link>
                                        <button onClick={() => actions.addFavorits(item.uid, item.name)} className="like"><i class="fa-solid fa-heart fa-2xl" style={{ color: "#FFD43B" }}></i></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselVehicles"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselVehicles"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>








                <div className="planets">
                    <h2>Planets</h2>
                    <div id="carouselPlanets" className="carousel slide rounded-start">
                        <div className="carousel-indicators 3">
                            {store.planets.map((item, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    data-bs-target="#carouselPlanets"
                                    data-bs-slide-to={index}
                                    className={index === 0 ? "active" : ""}
                                    aria-label={`Slide ${index + 1}`}
                                ></button>
                            ))}
                        </div>
                        <div className="carousel-inner">
                            {store.planets.map((item, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                    <img
                                        src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
                                        className="d-block w-100"
                                        alt={""}
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <Link to={`/planetsInfo/${item.uid}`} className="btn-info">
                                            {item.name}
                                        </Link>
                                        <button onClick={() => actions.addFavorits(item.uid, item.name)} className="like"><i class="fa-solid fa-heart fa-2xl" style={{ color: "#FFD43B" }}></i></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselPlanets"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselPlanets"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>





















            </div>
        </div>
    );
};
