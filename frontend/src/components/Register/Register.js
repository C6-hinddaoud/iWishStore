import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
const Register = () => {
  const navgate=new useNavigate()
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  

  const [message, setMesage] = useState("");

  
  const addusers = (req, res) => {
    console.log("jkjhj");
    axios
      .post(`http://localhost:5000/register`, {
        firstName,
       lastName,

        email,
        password,
        
      })
      .then((result) => {
        console.log(result);
        //GettALLspic()
      // setSpecialt(result.data.specialt);
      setMesage(result.data.messsge
        )
      })
      .catch((err) => {
        console.log(err.response.data

           )
        setMesage(err.response.data.massage
            )
        throw err;
      });
  };

  useEffect(() => {
  
  }, []);

  return (
    <div className="mainIntroDev">
      <div className="imgregester">
        <img  className="imgReg" src="https://res.cloudinary.com/ddsrkj1dx/image/upload/v1677074489/registration_process.4d8973f8_fox2u4.png" alt="pic"></img>
        <button className="goBakebtnReg" onClick={()=>{navgate(-1)}}>Go Back</button>
      </div>
      <div className="container">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr></hr>

        <label>
          <b>First Name</b>
        </label>
        <input 
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
          type="text"
          placeholder="Enter your Name"
         
          required
        ></input>

<label>
          <b>Last Name</b>
        </label>
        <input
          onChange={(e) => {
            setLastname(e.target.value);
          }}
          type="text"
          placeholder="Enter your Name"
         
          required
        ></input>

       
      
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
        

        <button onClick={addusers} className="registerbtnnew">
          Register
        </button>
        <p className="messagestyle">{message}</p>
      </div>
    </div>
  );
};
export default Register;