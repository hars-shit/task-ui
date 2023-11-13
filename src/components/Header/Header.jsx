import React, { useState } from 'react'
import {BiCart} from 'react-icons/bi'
import {GiRunningShoe} from 'react-icons/gi'
import {FaUser} from 'react-icons/fa'
import {HiMenuAlt1} from 'react-icons/hi'
import { RxCross2 } from "react-icons/rx";
import './style.css'
import Drawer from '../Drawer/Drawer'
const Header = () => {
  const[open,setOpen]=useState(false);
  const handleClick=()=>{
    setOpen(!open);
  }
  return (
    <>
   <div className="header__container">
    
    <div className="header__heading">
      <GiRunningShoe />
      <p>FootFlex</p>
    </div>

    <div className="header__items">
      <button>New Collections</button>
      <button>Accessories</button>
      <button>About</button>
      <button>Contact Us</button>
    </div>

    <div className="header__cart sidebar">
      <button><BiCart /></button>
      <button><FaUser /></button>
      <button onClick={handleClick}>
        {
          open ? <RxCross2 />
          :
          <HiMenuAlt1 />
        }
        </button>
    </div>
   </div>
    {
      open &&
      <Drawer setOpen={setOpen}/>
    }
    </>
  )
}

export default Header