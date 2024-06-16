import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light  rounded-5 rounded-top-0">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="social-media">
		  <a href="https://x.com/starwars" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter fa-2xl p-3" style={{color: "#FFD43B"}}></i></a>
		  <a href="https://www.instagram.com/starwars/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram fa-2xl p-3" style={{color: "#FFD43B"}}></i></a>
		  <a href="https://www.youtube.com/@StarWars" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube fa-2xl p-3" style={{color: "#FFD43B"}}></i></a>
		  <a href="https://www.facebook.com/starwars.es/?locale=es_ES" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-facebook fa-2xl p-3" style={{color: "#FFD43B"}}></i></a>
		  <a href="https://www.tiktok.com/@starwars?lang=es" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-tiktok fa-2xl p-3" style={{color: "#FFD43B"}}></i></a>
		  </div>
			
			<div className="container-logo">
				<img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX6MK34zw_YfhT1F26_4dFyF5Rc8v8_ZexPg&s" alt="Star Wars Logo" />
			</div>
		</nav>
	);
};
