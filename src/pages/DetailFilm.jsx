import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailFilm = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState({});
	const [reviews, setReviews] = useState([]);

	const fetchMovie = () => {
		axios.get(`http://localhost:3000/api/movies/${id}`).then((resp) => {
			setMovie(resp.data);
			setReviews(resp.data.resultReviews);
			console.log(resp.data.resultReviews);
		});
	};

	useEffect(fetchMovie, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="detail-card">
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
						{reviews.map((review) => {
							return (
								<div key={review.id} className="card">
									<div className="card-header">{review.vote}/5</div>
									<div className="card-body">
										<p>{review.text}</p>
										<p>-{review.name}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailFilm;
