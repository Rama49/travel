import React, {useState} from "react";
import "./navbar.scss";
import {MdOutlineTravelExplore} from "react-icons/md";
import {AiFillCloseCircle} from "react-icons/ai";
 import {TbGridDots} from "react-icons/tb";


const Navbar = () => {
  const [active ,  setActive] = useState("navBar");

  const showNav = () =>{
    setActive("navBar  activeNavbar")
  } 

  const removeNavbar = () =>{
    setActive("navBar")
  }


  return (
    <section className="navBarSection">
      <header className="header flex">

      <div className="logoDiv">
        <a href="#" className="logo flex text-decoration-none text-primary fs-6">
            <h1> <MdOutlineTravelExplore className="icon " /> <span className="y">Travel.</span> </h1>
        </a>
      </div>

  <div className={active}>
    <ul className="navLists flex">
        <li className="navItem">
            <a href="#" className="navLink text-decoration-none">Home</a>
        </li>
        <li className="navItem">
            <a href="#" className="navLink mx-3 text-decoration-none">Packages</a>
        </li>
        <li className="navItem">
            <a href="#" className="navLink mx-3 text-decoration-none text-transparent">Shop</a>
        </li>
        <li className="navItem">
            <a href="#" className="navLink mx-3 text-decoration-none text-transparent">About</a>
        </li>
        <li className="navItem">
            <a href="#" className="navLink mx-3 text-decoration-none text-transparent">Pages</a>
        </li>
        <li className="navItem">
            <a href="#" className="navLink mx-3 text-decoration-none text-transparent">News</a>
        </li>
        <li className="navItem">
            <a href="#" className="navLink ms-3 text-decoration-none text-transparent">Contacts</a>
        </li>
        <button className="btn ">
            <a href="#" className="text-decoration-none text-white rounded p-2 bg-primary"><span >Book Now</span></a>
        </button>
    </ul>

    <div onClick={removeNavbar} className="closeNavbar">
        <AiFillCloseCircle className="icon d-lg-none" />
    </div>
  </div>


  <div onClick={showNav} className="toggleNavbar">
    <TbGridDots className="icon d-lg-none" />
  </div>
      </header>
    </section>
  );
};

export default Navbar;