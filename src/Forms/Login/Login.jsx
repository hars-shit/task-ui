import React, { useState } from "react";
import { BsFillShieldLockFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({email:"",password:""});
  const navigate=useNavigate();

  const handlePassword = (e) => {
    e.preventDefault();
    if(data.password){
        setShow(!show);
    }
    else{
        alert("Enter password first!!")
    }
  };

  const handleForget = (e) => {
    e.preventDefault();
  };

  const handleLogin = (e) => {
    e.preventDefault();
   console.log("data",data)
   if(data.email && data.password){
       if(data.password.length<6){
        alert("Password must contain 6 characters")
       }
       else {
           navigate('/home');
        }
    }
    else{
        alert("please provide each field")
    }
    
   

  };

  // for  inputs

  const handleChangePassword = (e) => {
    setData({...data,password:e.target.value});
  };

  const handleChangeEmail=(e)=>{
    setData({...data,email:e.target.value})
  }
  return (
    <div className="login__container ">
      <div className="login__heading">
        <p className="login__heading_text">Welcome Back!!</p>
        <p className="login__heading_text">Login To Continue</p>
      </div>

      <form action="submit" className="login__form">
        <div className="login__form_box">
          <MdEmail />
          <input
            type="email"
            placeholder="Email ID"
            className="login__form_input email"
            onChange={(e)=>handleChangeEmail(e)}
          />
        </div>
        <div className="login__form_box">
          <BsFillShieldLockFill />
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            className="login__form_input password"
            onChange={(e) => handleChangePassword(e)}
          />
        </div>
        <div className="login__function">
          <div className="login__function_items">
            <button onClick={(e) => handlePassword(e)}>
              {show ? "Hide Password" : "Show Password"}
            </button>
          </div>
          <div className="login__function_items">
            <button onClick={(e) => handleForget(e)}>Forgot Password?</button>
          </div>
        </div>

        <div className="login__button">
          <button className="login__button_login" onClick={(e)=>handleLogin(e)}>
            Login
          </button>
        </div>
      </form>

      {/* for register */}

      <div className="login__redirect_signup">
        <Link to={"/register"} className="login__redirect_button">
          <p>New User? &nbsp;</p>
          <p>Register Account</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
