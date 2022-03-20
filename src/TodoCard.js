
const TodoCard = ({todos, title}) => {
    return (
        <div>
            <h1>{title}</h1>
            {todos.map((todo) => (
            <a href="" className="cardAnchor" key={todo.id}>
                <div className="card">
                    <h4 className="card-title">{todo.title}</h4>
                    <p className="card-subtitle">Created by: {todo.creator}</p>
                    <div className="button-container">
                        <button className="button">Edit</button>
                        <button className="button button-delete">Delete</button>
                    </div>
                </div>
            </a>
            ))}
        </div>
    );
}
 
export default TodoCard;