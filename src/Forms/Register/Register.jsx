import React from 'react'
import './style.css'
import { BsFillShieldLockFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {GiConverseShoe} from 'react-icons/gi'
const Register = () => {
  return (
    <div className="register__container">
      <div className="register__heading">
        <p>Welcome to FootFlex</p>
        <p>Register now !!</p>
      </div>

      <form action='submit' className="register__input">
        <div className="register__input_box">
          <MdEmail />
        <input type="email" placeholder='Email ID'/>
        </div>
        <div className="register__input_box">
        <BsFillShieldLockFill />
        <input type="password" placeholder='Password'/>
        </div>

        {/* this will help you if you forgot your password in login  */}

        <div className="security_question">
        <div className="register__input_box">
        <GiConverseShoe />
        <input type="text" placeholder='What is your favorite shoe style '/>
        </div>
        </div>
        <div className="register__button">
          <button onClick={(e)=>handleClick(e)}>Register</button>
        </div>
      </form>


    </div>
  )
}

export default Register