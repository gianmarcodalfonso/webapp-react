import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="container-fluid">
			<div className="row">
				<div className="col-12 d-flex justify-content-between align-items-center">
					<div className="d-flex align-items-center">
						<img
							className="logo"
							src="../public/imgs/Minimalist_logo.png"
							alt=""
						/>
						<h1>Flixteca</h1>
					</div>
					<div>
						<Link className="btn btn-primary" to="/">
							Home
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
