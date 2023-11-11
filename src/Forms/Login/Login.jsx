import React, { useState } from "react";
import { BsFillShieldLockFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "./style.css";
const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="login__container ">
      <div className="login__heading">
        <p className="login__heading_text">Welcome Back!! Login To Continue</p>
      </div>

      <form action="" className="login__form">
        <div className="login__form_box">
          <MdEmail />
          <input
            type="email"
            placeholder="Email ID"
            className="login__form_input email"
          />
        </div>
        <div className="login__form_box">
          <BsFillShieldLockFill />
          <input
            type="password"
            placeholder="Password"
            className="login__form_input password"
          />
        </div>
        <div className="login__function">
        <div className="login__function_items">
          <button onClick={()=>setShow(!show)}>
            {
                show ? "Hide Password" : "Show Password"
            }
             </button>
        </div>
        <div className="login__function_items">
         <button>
            Forgot Password?
         </button>
        </div>
      </div>
      </form>

      

      <div className="login__button">
        <button className="login__button_login">Login</button>
      </div>
    </div>
  );
};

export default Login;
