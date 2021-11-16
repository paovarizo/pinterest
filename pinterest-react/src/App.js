import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Login from './components/login/login';
import Home from './components/home/home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/auth" element={<Login/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
