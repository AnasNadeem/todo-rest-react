import { useState } from "react";
import { Link, Redirect } from "react-router-dom";

const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [userName, setUsername] = useState('')
    const [passWord, setPassword] = useState('')

    const [errMsg, setErrMsg] = useState(null)
    const [successMsg, setSuccessMsg] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        const authData = {
            username:userName,
            email:email,
            first_name:firstName,
            last_name:lastName,
            password:passWord
        }
        const header = {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(authData)
        }
        fetch('http://localhost:8000/api/auth/register', header)
        .then(resp => {
            if(resp.status===201){
                setSuccessMsg('Account Created');
                setFirstName('');
                setLastName('');
                setEmail('');
                setUsername('');
                setPassword('');
                document.getElementById('registerFormId').reset();
                return resp.json()
            }
            return Promise.reject(resp);
        })
        .then(data => {
            console.log(data)
        })
        .catch((errresp) => {
            errresp.json().then(err => {
                console.log('error:',err)
            })
        })
    }

    return (
        <div className="form-section">
            {successMsg&&<p>HORRAY!! {successMsg}.</p>}
            <form onSubmit={handleSubmit} id="registerFormId">
                <input type="text" onChange={(e) => setFirstName(e.target.value)} className="inputClass" placeholder="First Name"/>
                <input type="text" onChange={(e) => setLastName(e.target.value)} className="inputClass" placeholder="Last Name"/>
                <input type="text" onChange={(e) => setUsername(e.target.value)} className="inputClass" placeholder="Username"/>
                <input type="email" onChange={(e) => setEmail(e.target.value)} 
                className="inputClass" placeholder="Email"/>
                <input type="password" onChange={(e) => setPassword(e.target.value)} className="inputClass" placeholder="Password"/>
                <button className="button btn-full">Register</button>
            </form>
            <Link to="/login">
                <button className="button btn-full" >
                    Login
                </button>
            </Link>
        </div>

    );
}
 
export default Register;