import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import DetailFilm from "./pages/DetailFilm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<DefaultLayout />}>
						<Route path="/" element={<Homepage />} />
						<Route path="/movies/:id" element={<DetailFilm />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
