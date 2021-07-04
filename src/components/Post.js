import React from "react";
import history from "../router/history";

export default function Post() {
	return (
		<>
			<h3>Raw JSON</h3>
			<p>{JSON.stringify(history.location.state.post)}</p>
		</>
	);
}
