import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar-light  rounded-5 rounded-top  border border-warning-subtle">
			{/* <Link to="/"> */}
			{/* <span className="navbar-brand mb-0 h1">React Boilerplate</span> */}
			{/* </Link> */}
			<div className="container-nav">
				<div className="social-media">
					<a href="https://x.com/starwars" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter fa-2xl p-2" style={{ color: "#FFD43B" }}></i></a>
					<a href="https://www.instagram.com/starwars/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram fa-2xl p-2" style={{ color: "#FFD43B" }}></i></a>
					<a href="https://www.youtube.com/@StarWars" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube fa-2xl p-2" style={{ color: "#FFD43B" }}></i></a>
					<a href="https://www.facebook.com/starwars.es/?locale=es_ES" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-facebook fa-2xl p-2" style={{ color: "#FFD43B" }}></i></a>
					<a href="https://www.tiktok.com/@starwars?lang=es" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-tiktok fa-2xl p-2" style={{ color: "#FFD43B" }}></i></a>
				</div>

				<div className="container-logo">
					<img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX6MK34zw_YfhT1F26_4dFyF5Rc8v8_ZexPg&s" alt="Star Wars Logo" />
				</div>



				<div class="dropdown">
					<a class="btn btn-warning dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorits
					</a>

					<ul class="dropdown-menu bg-warning">
						{store.favorits.map((item, index) => { return (<li><Link to={`/charactersInfo/${item.id}`} class="dropdown-item bg-warning fw-bold" >{item.name}</Link></li>) })}



					</ul>

				</div>


			</div>
		</nav>
	);
};
