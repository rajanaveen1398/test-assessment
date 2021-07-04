import './App.css';
import {Router} from 'react-router-dom';
import Routes from './router';
import history from './router/history';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
