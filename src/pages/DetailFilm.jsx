import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailFilm = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState({});

	const fetchMovie = () => {
		axios.get(`http://localhost:3000/api/movies/${id}`).then((resp) => {
			setMovie(resp.data);
		});
	};

	useEffect(fetchMovie, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="detail-card">
						<div className="d-flex">
							<div className="cover-image">
								<img src={movie.image} alt={movie.title} />
							</div>
							<div className="card-details">
								<h1>{movie.title}</h1>
								<p>{movie.director}</p>
								<p>{movie.release_year}</p>
								<p>{movie.genre}</p>
								<p>{movie.abstract}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailFilm;
