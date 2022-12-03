import Login from "./Login";
import Register from "./Register";
import Task from './Task';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  // if(!localStorage.getItem('token')){
  //   document.location = '/login'
  // }
  return (
    <>
    <Router>
      <div className="app-container">
        <h1 className="app-title">React todo app
        <span>
          <Link to="/login">
                <button className="button btn" >
                    Login
                </button>
            </Link>
            <Link to="/register">
                <button className="button btn" >
                    Register
                </button>
            </Link>
        </span>
        </h1>
        <div className="card-section">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </div>
      </div>
    </Router>
    <Task />
    </>
  );
}

export default App;
