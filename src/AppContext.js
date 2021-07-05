import React, { createContext } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

export const ContextProvider = (props) => {
	const abc = () => {};

	const contextVariables = {
		abc,
	};
	return (
		<AppContext.Provider value={contextVariables}>
			{props.children}
		</AppContext.Provider>
	);
};

ContextProvider.propTypes = {
	children: PropTypes.any,
};
