import React from 'react'
import component from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default function LoggedIn(props) {
    console.log(props);

    const userData = JSON.parse(localStorage.getItem('user'));

    function handleSubmit() {
        localStorage.removeItem("user");
    }


    return (
        <div>
            <br />
            <h1>You are Logged In as {userData.userType}</h1>
            <br />
            <h3>Id :- {userData.id}</h3>
            <br />
            <h3>Username :- {userData.email}</h3>
            <br />
            {userData.userType === "Admin" ? <textarea  >If You are Admin You Can Change This Text and is you are a student you are only allowed to read only!!</textarea>
                : <textarea readOnly="true" >If You are Admin You Can Change This Text and if you are a student you are allowed to read only!!</textarea>
            }
            <br />
            <br />

            <Link to="/">
                <button className="btn btn-success" onClick={handleSubmit}>Logout</button>
            </Link>
        </div>
    )
}

