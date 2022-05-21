import React from "react";
import './login.css';

function Login(){
  
    return(
        <div className="maincontainer">
            <form action="" className="formlogin" >
                <input type="text" placeholder="email" className="input1" required /> <br /><br /> <br />
                <input type="password" placeholder="password" required /><br /><br /><br />
                <button className="loginbtn">Submit</button>
            </form>
        </div>
    )
}
export default Login;