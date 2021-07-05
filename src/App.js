import "./App.css";
import { Router } from "react-router-dom";
import Routes from "./router";
import history from "./router/history";
import "bootstrap/dist/css/bootstrap.min.css";
import { ContextProvider } from "./AppContext";

function App() {
	return (
		<ContextProvider>
			<Router history={history}>
				<Routes />
			</Router>
		</ContextProvider>
	);
}

export default App;
