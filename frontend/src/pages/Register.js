import React, { useState } from 'react'
import axios from 'axios';
import "../static/css/Login.css"
import { useNavigate } from 'react-router-dom';

function Register() {
    const [values, setValues] = useState({
        username: "",
        password: "",
        password2:""
    })
    const navigate = useNavigate()
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value }, console.log(values))
    }

    const handleSubmit= (event) => {
        if(values.password!= values.password2)
        {
            alert("Please enter same password")
        }
        axios.post('http://localhost:8000/api/register/', {
            username: values.username,
            password: values.password,
            password2: values.password2
        }).then(function (res) {
            console.log(res)
            navigate("/login")
        }).catch(function (err) {
            console.log(err)
            if(err.response.status=== 400)
            {
                const errors = [err.response.data.username].concat([err.response.data.password])
                let txt = "";
                errors.forEach(addErrors)
                function addErrors(value) {
                    if(typeof(value) !== "undefined")
                        txt += value + " "; 
                  }
                alert(txt)
            }
        })
        event.preventDefault();
    }

    return (
        <div>
            <div className="main">
                <p className="sign" align="center">Register</p>
                <form className="form1">
                    <input className="field " type="text" align="center" placeholder="Username" name="username" onChange={onChange}></input>
                    <input className="field" type="password" align="center" placeholder="Password" name="password" onChange={onChange}></input>
                    <input className="field" type="password" align="center" placeholder="Re-enter Password" name="password2" onChange={onChange}></input>
                    <button className="submit" align="center" onClick={handleSubmit}>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register