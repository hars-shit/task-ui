import React from "react";
import { FaUser } from "react-icons/fa";
import {AiFillLinkedin , AiFillInstagram} from 'react-icons/ai'
import {BsFacebook,BsPinterest} from 'react-icons/bs'
import './style.css'
const Drawer = ({ setOpen }) => {
  return (
    <div className="dailog__container">
       
       
      <div className="dailog__header">
        <FaUser />
      </div>

      <div className="dailog__items">
        <button>New Collections</button>
        <button>Accessories</button>
        <button>Contact Us</button>
        <button>About</button>
      </div>
        <div className="dailog__heading_follow">
            <p>Follow Us :</p>
        </div>
      <div className="dailog__icons">
        <button><BsFacebook /></button>
        <button><AiFillInstagram /></button>
        <button><BsPinterest /></button>
        <button><AiFillLinkedin /></button>

      </div>
    </div>
  );
};

export default Drawer;
