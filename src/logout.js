import React, { useState } from "react";
import './logout.css';
import {Routes, Route, Link} from 'react-router-dom';
import Login from "./login";

function SignUp(){

    const [data,setData]=useState("")

    const alertt=()=>{
        alert("Data submitted successfully")
    }

    return(
        
       <div className="maincontainer2">
            <form action="" className="formlogin" >
                <input type="text" placeholder="first name" className="input2" required /> <br /><br /> <br />
                <input type="text" placeholder="last name" required /><br /><br /><br />
                <input type="password" placeholder="password"
                 required  />
                 <br /><br /><br />
                <input type="text" placeholder="email" required /><br /><br /><br />
                <input type="text" placeholder="cnic" required /><br /><br /><br />
                <button className="logoutbtn" onClick={alertt} >
                    <Link className="link" to="/login" >SignUp</Link>
                </button>
            </form>

   <Routes>
       <Route path="/login" element={<Login/>} />
   </Routes>

        </div>
    )
}
export default SignUp;