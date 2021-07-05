import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Post from "../components/Post";

export default function Routes() {
	return (
		<Switch>
			<Route exact path="/" component={(props) => <Home {...props} />} />
			<Route exact path="/post" component={(props) => <Post {...props} />} />
		</Switch>
	);
}
