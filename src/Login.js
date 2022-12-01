import { useState } from "react";
import { Link } from "react-router-dom";
import { AUTH_URL } from "./constants";


const Login = () => {
    const [userName, setUsername] = useState('')
    const [passWord, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState(null)
    const LOGIN_URL_API = AUTH_URL + "login"; 

    const handleSubmit = (e) => {
        e.preventDefault();
        const authData = {username:userName, password:passWord}
        const header = {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(authData)
        }
        fetch(LOGIN_URL_API, header)
        .then(resp => {
            if(resp.ok){
                return resp.json();
            }
            return Promise.reject(resp);
        })
        .then(data => {
            setErrMsg(null);
            localStorage.setItem('user', data.username);
            localStorage.setItem('token', data.token);
            setUsername('');
            setPassword('');
        })
        .catch((errresp) => {
            errresp.json().then(err => {
                setErrMsg(err.error)
            })
        })
    }

    return ( 
        <div className="form-section">
            {errMsg && <p>{errMsg}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setUsername(e.target.value)} value={userName} className="inputClass" placeholder="Username"/>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={passWord} className="inputClass" placeholder="Password"/>
                <button disabled={!userName || !passWord} className="button btn-full" >Login</button>
            </form>
            <Link to="/register">
                <button className="button btn-full" >
                    Register
                </button>
            </Link>
        </div>
    );
}
 
export default Login;