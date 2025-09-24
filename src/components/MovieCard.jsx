import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
	return (
		<div className="col-12 col-md-6 col-lg-4" key={movie.id}>
			<Link to={`/movies/${movie.id}`}>
				<div className="card my-3 position-relative">
					<img src={movie.image} className="card-img" alt={movie.title} />
					<div className="overlay position-absolute w-100 h-100"></div>
				</div>
			</Link>
		</div>
	);
};

export default MovieCard;
