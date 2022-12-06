import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown";

export const Navbar = () => {
	return (
		<div className="col-12 col-md-9 mx-auto">
			<nav className="navbar navbar-dark bg-dark mb-3 ">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
					<img 
						className="icono m-3" 
						src="https://www.aaddpa.org/ckfinder/userfiles/files/starwars.png" 
						alt="MDN"/>
					</span>
				</Link>
				<div className="ml-auto">
					<div class="dropdown">
						
						<Dropdown/>
					</div>
					
				</div>
			</nav>
		</div>	
	);
};
