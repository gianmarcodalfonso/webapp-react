import axios from "axios";
import { useState, useEffect } from "react";

import MovieCard from "../components/MovieCard";

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
						return <MovieCard movie={movie} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Homepage;
