import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar-light rounded-5 rounded-top border border-warning-subtle">
			<div className="navbar">
				<div className="social-media">
					<a href="https://x.com/starwars" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter fa-2xl p-2"></i></a>
					<a href="https://www.instagram.com/starwars/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram fa-2xl p-2"></i></a>
					<a href="https://www.youtube.com/@StarWars" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube fa-2xl p-2"></i></a>
					<a href="https://www.facebook.com/starwars.es/?locale=es_ES" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-facebook fa-2xl p-2"></i></a>
					<a href="https://www.tiktok.com/@starwars?lang=es" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-tiktok fa-2xl p-2"></i></a>
				</div>

				<div className="Wars">
					<img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX6MK34zw_YfhT1F26_4dFyF5Rc8v8_ZexPg&s" alt="Star Wars Logo" />
				</div>

				<div className="dropdown-container">
					<div className="dropdown">
						<a className="btn btn-warning dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorits ({store.charactersfavorist.length})
						</a>
						<ul className="dropdown-menu bg-warning">
							{store.charactersfavorist.map((item, index) => {
								return (
									<li key={index}>
										<Link to={`/charactersInfo/${item.id}`} className="dropdown-item bg-warning fw-bold">{item.name}</Link>
										<button className="delete" onClick={() => actions.setDeletF(item)}><i className="fa-solid fa-trash-can fa-2xl" style={{ color: "#000000" }}></i></button>
									</li>
								)
							})}
						</ul>


						<ul className="dropdown-menu bg-warning">
							{store.vehiclesfavorist.map((item, index) => {
								return (
									<li key={index}>
										<Link to={`/vehiclesInfo/${item.id}`} className="dropdown-item bg-warning fw-bold">{item.name}</Link>
										<button className="delete" onClick={() => actions.setDeletF(item)}><i className="fa-solid fa-trash-can fa-2xl" style={{ color: "#000000" }}></i></button>
									</li>
								)
							})}
						</ul>
					</div>

			

					
				</div>
			</div>
		</nav>
	);
};
