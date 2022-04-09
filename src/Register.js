import { useState } from "react";
import { Link } from "react-router-dom";

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
                setErrMsg(err)
                console.log('i am errMsg',errMsg)
            })
        })
    }

    return (
        <div className="form-section">
            {/* {errMsg && 
                errMsg.map((errName)=>(<p className="color:red">{errName}</p>))
            } */}
            {successMsg&&<p>HORRAY!! {successMsg}.</p>}
            <form onSubmit={handleSubmit} id="registerFormId">
                <input type="text" onChange={(e) => setFirstName(e.target.value)} className="inputClass" value={firstName} placeholder="First Name"/>
                <input type="text" onChange={(e) => setLastName(e.target.value)} className="inputClass" value={lastName} placeholder="Last Name"/>
                <input type="text" onChange={(e) => setUsername(e.target.value)} className="inputClass" value={userName} placeholder="Username"/>
                <input type="email" onChange={(e) => setEmail(e.target.value)} 
                className="inputClass" value={email} placeholder="Email"/>
                <input type="password" onChange={(e) => setPassword(e.target.value)} className="inputClass" value={passWord} placeholder="Password"/>
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