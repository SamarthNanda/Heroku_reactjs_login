
import React, { useState } from 'react'
import '../App.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Cookies from 'js-cookie'
import Decode from 'jwt-decode'


export default function Login(props) {

    // login route------------------------------------------------------------------------------
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    const [detail , setdetail] = useState("");
    const [userType , setUserType] = useState("") 

    function handleSubmit(e) {
        e.preventDefault();

        console.log("login is called");
        Axios.post( '/login', {
            username: username,
            password: password
        }).then(function (response) {
            if (response.data.message) {
                console.log(response.data.message);
                if (response.data.message === "wrong password") {
                    alert("Try logging in with a Correct Password");
                } else {
                    alert("Try logging in with a valid Username or Register yourself Now");
                }
            }
            else {
                // Cookies.set("refreshToken", refreshToken);

                // Cookies.set("email", decoded.email);
                // Cookies.set("userType", decoded.userType);
                // Cookies.set("token", token);
                // const decoded = Decode(token);
                
                // const { token } = response.data;
                
                localStorage.setItem("user" , JSON.stringify(response.data));
                setdetail(response.data.email);
                setUserType(response.data.userType);

                // console.log(decoded);
                setLoginStatus("/loggedin");

            }
        });

    }

    return (
        <div className="form">
            <br />
            <h1>Login Page</h1>
            <br />
            <form >
                <input type="text" id="login" className="form-control" name="username" placeholder="Username" required
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <input type="password" id="password" className="form-control" name="password" placeholder="password" required
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <br />
                <button type="submit" className="btn btn-success" onClick={handleSubmit}>Login</button><span>   </span>


                <Link to="/register">
                    <button type="submit" className="btn btn-info">Register Now</button>
                </Link>

            </form>
            <br />
            {loginStatus === "/loggedin" ? <div><h3>Hi {detail}</h3>
                <Link to={loginStatus}>
                    <button className="btn btn-info">continue As {userType}</button>
                </Link></div> : <span> </span>}

        </div >
    )
}

