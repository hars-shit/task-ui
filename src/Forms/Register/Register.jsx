import React, { useState } from "react";
import "./style.css";
import { BsFillShieldLockFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { GiConverseShoe } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    shoe_style: "",
  });
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    if (data.email && data.password && data.shoe_style) {
      if (data.password.length < 6) {
        return alert("Password must contain 6 characters");
      }
      setData(data);
      console.log(data);

      navigate("/");
    } else {
      alert("please provide each field");
    }
  };
  const handleEmail = (e) => {
    setData({ ...data, email: e.target.value });
  };
  const handlePassword = (e) => {
    setData({ ...data, password: e.target.value });
  };
  const handleStyle = (e) => {
    setData({ ...data, shoe_style: e.target.value });
  };
  return (
    <div className="register__container">
      <div className="register__heading">
        <p>Welcome to FootFlex</p>
        <p>Register now !!</p>
      </div>

      <form action="submit" className="register__input">
        <div className="register__input_box">
          <MdEmail />
          <input
            type="email"
            placeholder="Email ID"
            onChange={(e) => handleEmail(e)}
          />
        </div>
        <div className="register__input_box">
          <BsFillShieldLockFill />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => handlePassword(e)}
          />
        </div>

        {/* this will help you if you forgot your password in login  */}

        <div className="security_question">
          <div className="register__input_box">
            <GiConverseShoe />
            <input
              type="text"
              enterKeyHint="sneakers"
              placeholder="What is your favorite shoe style "
              onChange={(e) => handleStyle(e)}
            />
          </div>
        </div>
        <div className="register__button">
          <button onClick={(e) => handleClick(e)}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
