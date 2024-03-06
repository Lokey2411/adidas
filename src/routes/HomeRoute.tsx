import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const HomeRoute = () => {
	return (
		<Routes>
			<Route
				path="/*"
				element={<Home />}
				key="home"
			/>
			<Route
				path="/detail/:id"
				element={<Detail />}
				key="detail"
			/>
		</Routes>
	);
};

export default HomeRoute;
