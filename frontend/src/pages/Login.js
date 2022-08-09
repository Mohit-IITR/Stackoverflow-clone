import React, { useState } from 'react'
import axios from 'axios';
import "../static/css/Login.css"
import { useNavigate } from 'react-router-dom';

function Login() {
    const [values,setValues] = useState({
        username:"",
        password:""
    })
    const navigate = useNavigate()
    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value }, console.log(values))
    }
    const handleSubmit = (event) => {
        axios.post('http://localhost:8000/api/token/', {
            username: values.username,
            password: values.password,
        }).then(function (res) {
            console.log(res)
            localStorage.setItem('token', res.data.access);
            localStorage.setItem('user', res.config.data);
            navigate("/")
            window.location.reload()
            console.log(res.data.access)
        }).catch(function (err) {
            console.log(err)
        })
        event.preventDefault();
    }

    return (
        <div className="main"> 
            <p className="sign" align="center">Login</p>
            <form className="form1">
                <input className="field " type="text" align="center" placeholder="Username" name="username" onChange={onChange}></input>
                <input className="field" type="password" align="center" placeholder="Password" name="password" onChange={onChange}></input>
                <button className="submit" align="center" onClick={handleSubmit}>Sign in</button>
            </form>
        </div>
    )
}

export default Login