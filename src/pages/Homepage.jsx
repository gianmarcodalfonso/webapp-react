import axios from "axios";
import { useState, useEffect } from "react";

const Homepage = () => {
	const [movies, setMovies] = useState([]);

	const fetchMovies = () => {
		axios
			.get("http://localhost:3000/api/movies/")
			.then((resp) => {
				setMovies(resp.data);
				console.log(resp);
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
					<div className="col-12">
						{}
						<div className="card">
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text.</p>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
