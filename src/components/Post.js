import React, { useContext } from "react";
import history from "../router/history";
import PropTypes from "prop-types";
import { AppContext } from "../AppContext";

export default function Post() {
	const { abc } = useContext(AppContext);
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
