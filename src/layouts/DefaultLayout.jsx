import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
	return (
		<div>
			<Header />
			<main className="container">
				<Outlet />
			</main>
		</div>
	);
};

export default DefaultLayout;
