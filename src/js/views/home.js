import "../../styles/home.css";
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getCharacters();
        actions.getVehicles();
        actions.getPlanets();
    }, []);

    return (
        <div className="text-center mt-5">
            <h1>
                <img className="logo" src="https://i.pinimg.com/564x/7b/f3/c3/7bf3c350b349551186ffb091a17e9645.jpg" alt="Star Wars Logo" />
            </h1>
            <div className="d-flex mx-5 p-2">
                <iframe
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
                    <div id="carouselExampleCaptions" className="carousel slide">
                        <div className="carousel-indicators">
                            {store.characters.map((item, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
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
                                        alt={item.name}
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <Link to={`/demo${item.uid}`} className="btn-info">
                                            {item.name}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
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
