import React from "react";
import {AiFillLinkedin , AiFillInstagram} from 'react-icons/ai'
import {BsFacebook,BsPinterest} from 'react-icons/bs'
import './style.css'
const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__about">
        <p>FootFlex</p>
      </div>
      <div className="footer__desc">
        <article>
          Step into Style. Your go-to destination for fashionable and
          comfortable footwear, where every step is a statement in quality and
          trend.
        </article>
      </div>
      <div className="footer__icons">
      <button><BsFacebook /></button>
        <button><AiFillInstagram /></button>
        <button><BsPinterest /></button>
        <button><AiFillLinkedin /></button>
      </div>
      <div className="footer__bottom">
        <p>Copyright @2023 FootFlex. Design by</p>&nbsp;<p id="name">Harshit</p>
      </div>
    </div>
  );
};

export default Footer;
