import axios from "axios";
import React from "react";
import { useState,useContext,useEffect } from "react";
import { authorContext } from "../../App";
import { useNavigate } from "react-router-dom";
import "./styless.css"
import Register from "../Register/Register";
const Login = () => {

const navgate=new useNavigate()
  const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[message,setMesage]=useState("")

   
   const author=useContext(authorContext)
const token=author.token
const setToken=author.setToken

const loginUser=(req,res)=>{
   
 
 
axios.post(`http://localhost:5000/login`,{
email,
password

})
.then((result) => {
    console.log("hid")
  console.log(result);
  //GettALLspic()
  setToken(result.data.token);
// setSpecialt(result.data.specialt);
localStorage.setItem("token",result.data.token)
navgate("/item")
setMesage(result.data.message)
console.log( "mnmn", token)

// {
//   navgate("/Category");
// }

})
.catch((err) => {
    console.log("hid")
  setMesage(err.response.data.message)
  throw err;
});

  

}


  return <div>


<div className="mainIntroDev">
      <div className="imgregester">
        <img  className="imgReg" src="https://res.cloudinary.com/ddsrkj1dx/image/upload/v1677084129/concept-shopping-black-friday-discounts_185193-93309_vmpy2y.jpg" alt="pic"></img>
        <button className="goBakebtnReg" onClick={()=>{navgate("/register")}}>Go Back</button>
      </div>
      <div className="container">
        <h1>Login</h1>
        <p>Please enter your correct email and password.</p>
        <hr></hr>
        <label >
          <b>Email</b>
        </label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="Enter Email"
          name="email"
          required
        ></input>

        <label >
          <b>Password</b>
        </label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Enter Password"
          name="psw"
          id="psw"
          required
        ></input>


        <hr></hr>
        <p>{message}</p>

        <button onClick={loginUser} className="registerbtn">
          Login
        </button>
      </div>


</div>






  </div>;
};
export default Login;