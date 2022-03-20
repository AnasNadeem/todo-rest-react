import { useState, useEffect } from "react";
import TodoCard from "./TodoCard";

function App() {
  const apiBaseUrl = "http://127.0.0.1:8000/"
  const [todos, setTodos] = useState([
    {title:"Morning list", creator:"anas", id:1},
    {title:"Anime list", creator:"saif", id:2},
    {title:"Series list", creator:"anas", id:3},
    {title:"Book list", creator:"falak", id:4},
  ])
  const [err, setErr] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  const fetchTodoList = () => {
    fetch(apiBaseUrl+"api/todoslist/")
    .then(response => {
      console.log(response);
      if(response.ok){
        setErr(false);
        return response.json();
      }
      setErrMsg(response.status+ ' ' + response.statusText)
    })
    .then(data => {
      {data && console.log(data)}
    })
    .catch(error => {
      setErrMsg(error.message)
    })
  }
  useEffect(() => {
    fetchTodoList()
  }, []);

  return (
    <div className="app-container">
      <h1 className="app-title">React todo app</h1>
      <div className="card-section">
        {err ? <p>{errMsg}</p> : <TodoCard todos={todos} title="All Todos"/>}
        
        {/* <TodoCard todos={todos.filter((todo) => todo.creator==='anas')} title="Anas Todos"/> */}
      </div>
    </div>
  );
}

export default App;
