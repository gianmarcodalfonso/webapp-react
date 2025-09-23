import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
	return (
		<div className="col-12 col-md-6 col-lg-4" key={movie.id}>
			<Link to={`/movies/${movie.id}`}>
				<div className="card my-3">
					<img src={movie.image} className="card-img-top" alt={movie.title} />
					<div className="card-body">
						<h5 className="card-title">{movie.title}</h5>
						<p className="card-text">{movie.director}</p>
						<p className="card-text">{movie.genre}</p>
						<p className="card-text">{movie.release_year}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default MovieCard;
