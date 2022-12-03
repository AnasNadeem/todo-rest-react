import { useState } from "react";
import { BASE_API } from "./constants";
import { Button, Card, Form } from 'react-bootstrap';

const Task = () => {
    const TASK_URL_API = BASE_API + "api/todoslist";
    const token = localStorage.getItem('token')
    const headersData = {"Authorization": `Bearer ${token}`, "Content-Type": "application/json"}

    const [tasks, setTask] = useState('')

    if (!tasks){
        // GET TASK
        const headersMethodGet = {method:'GET', headers: headersData}
        fetch(TASK_URL_API, headersMethodGet)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            setTask(data);
        })
    }
    // DELETE TASK
    const deleteTask = (id) => {
        const headersMethodDelete = {method:'DELETE', headers: headersData}
        fetch(`${TASK_URL_API}/${id}`, headersMethodDelete)
        .then(resp => {
            if (resp.ok){
            return resp
            }}
        )
    }
    console.log(tasks);
    return ( 
        <div className="card">
		    <ul className="list-group list-group-flush">
                {tasks && tasks.map((task) => (
                    <li className="list-group-item" key={task.id}>
                        {task.name}
                    <i className="fa-solid fa-trash float-end"></i>
                </li>
                ))
                }
            </ul>
        </div>
    );
}

export default Task;


// // CREATE TASK 
// const createTask = (e) => {
//     e.preventDefault();
//     let taskName = document.getElementById('taskName');
//     const todoslistData = {
//         'name': taskName.value
//     }

//     const header = {
//         method: 'POST',
//         headers: headersData,
//         body: JSON.stringify(todoslistData)
//     }
//     fetch(TASK_URL_API, header)
//     .then(response => {
//         if (response.ok){
//           taskName.value = '';
//             return response.json()
//         }
//         return Promise.reject(response);
//     })
//     .then(data => {
//         taskListId.innerHTML += `
//         <li class="list-group-item" id="task${data.id}">
//           ${data.name}
//         <i class="fa-solid fa-trash float-end"></i>
//         </li>`;
//         return data;
//     })
//     .catch((errresp) => {
//         errresp.json().then(err => {
//             let errorMessageAlert = document.getElementById('errorMessageAlert');
//             let errorMsg = document.getElementById('errorMsg');
//             for (const error in err) {
//               errorMsg.innerHTML += `${error} ${err[error]}`;
//             }
//             if (errorMessageAlert.style.display != 'block'){
//                 errorMessageAlert.style.display = 'block';
//             }
//         })
//     })
// };

// let taskFormId = document.getElementById('taskFormId');
// taskFormId.addEventListener('submit', createTask)

