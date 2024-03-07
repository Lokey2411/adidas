import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Profile from "../pages/Profile";

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
			<Route
				path="/profile/:id"
				element={<Profile />}
				key="detail"
			/>
		</Routes>
	);
};

export default HomeRoute;
