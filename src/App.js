import Login from "./Login";
import TodoCard from "./TodoCard";
import Register from "./Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  // const { data, err, errMsg } = useFetch('api/todoslist/');
  // const [todos, setTodos] = useState([
  //   {title:'Morning list', creator:'Saif', id:1},
  //   {title:'Series list', creator:'Anas', id:2},
  //   {title:'Anime list', creator:'Saif', id:3}
  // ])
  return (
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
          {/* {err ? <p>{errMsg}</p> : <TodoCard todos={todos} title="All Todos"/>} */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
          </Routes>
          {/* <TodoCard todos={todos} title="All Todos"/>
          <TodoCard todos={todos.filter((todo) => todo.creator==='Saif')} title="Saif Todos"/> */}
        </div>
      </div>
      
    </Router>
  );
}

export default App;
