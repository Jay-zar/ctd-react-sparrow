import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Login.module.css'
const LoginMessage = () => {
    //Faux user states and login state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setLoggedIn] = React.useState(false);
    //useNaviagte must be declared in the main function to work, does not work in handler functin alone
    const navigate = useNavigate();
    //Handler that checks if the form is empty and sets state
    const handleLogin = (e) => {
        e.preventDefault();
        if (username.trim().length > 0 && password.trim().length > 0) {
            console.log("Login Successful")
            setLoggedIn(true);
            
        }
        else {
            alert("Please enter a username and password.");
        }
        navigate("/Home");
    }
    return(
        <div className={style.LoginElements}>
            <h1>Welcome</h1>
            <h3>Please enter your information</h3>
            <input placeholder="Username" type="text" onChange={(e)=> setUsername(e.target.value)}/>
            <input placeholder="Password" type="text" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button className={style.LoginButton} onClick={handleLogin}>Login</button>
        </div>
    )
};

export default LoginMessage;