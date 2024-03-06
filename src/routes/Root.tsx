import React, { useContext, useEffect } from "react";
import { UserContext } from "../context";
import HomeRoute from "./HomeRoute";
import AuthRoute from "./AuthRoute";
import { useNavigate } from "react-router-dom";

const Root = () => {
	const { user } = useContext(UserContext);
	const navigate = useNavigate();
	useEffect(() => {
		if (window.location.href === "http://localhost:3000/") {
			if (!user.password) {
				navigate("/login");
			}
		}
	}, [user, navigate]);
	return user.password ? <HomeRoute /> : <AuthRoute />;
};

export default Root;
