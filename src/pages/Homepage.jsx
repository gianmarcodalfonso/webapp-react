import axios from "axios";
import { useState, useEffect } from "react";

const Homepage = () => {
	const [movies, setMovies] = useState([]);

	const fetchMovies = () => {
		axios
			.get("http://localhost:3000/api/movies/")
			.then((resp) => {
				setMovies(resp.data);
				console.log(resp.data);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h1>Film disponibili</h1>
					</div>
					{movies.map((movie) => {
						return (
							<div className="col-12 col-md-6 col-lg-4" key={movie.id}>
								<div className="card">
									<img src="..." className="card-img-top" alt={movie.title} />
									<div className="card-body">
										<h5 className="card-title">{movie.title}</h5>
										<p className="card-text">{movie.director}</p>
										<p className="card-text">{movie.genre}</p>
										<p className="card-text">{movie.reales_year}</p>
									</div>
								</div>
								;
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Homepage;
