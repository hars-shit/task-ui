import React from "react";
import "./style.css";

const Banner = () => {
  return (
    <div className="banner__container">
      <div className="banner__image-shoe">
        <img src="/shoe.jpg" alt="" />
      </div>
      <div className="banner__text-area">
        <div className="banner__heading">
          <p>Finding Your</p>
          <p>Perfect Shoes</p>
        </div>
        <div className="banner__subheading">
          <p>Step into style and comfort with our curated collection </p>
          <p>of trendy and quality footwear at FootFlex</p>
          
        </div>
        <div className="banner__shop">
          <button onClick={()=>alert("Not Ready Yet")}>SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
