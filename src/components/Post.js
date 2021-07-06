import React from "react";
import history from "../router/history";
import PropTypes from "prop-types";

export default function Post() {
	return (
		<>
			<h3>Raw JSON</h3>
			<p>{JSON.stringify(history.location.state.post)}</p>
		</>
	);
}

Post.propTypes = {
	xyz: PropTypes.array,
	abc: PropTypes.string,
	def: PropTypes.number,
	lmn: PropTypes.bool,
	pqr: PropTypes.func,
};

Post.defaultProps = {
	xyz: [],
	abc: "",
	def: 0,
	lmn: true,
	pqr: () => {},
};
