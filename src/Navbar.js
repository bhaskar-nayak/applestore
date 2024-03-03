import React from "react";
import { Link } from "react-router-dom";
import './styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightToBracket}from '@fortawesome/free-solid-svg-icons';
function Navbar(){

    return(
        <>
       <nav className="navbar navbar-expand-lg bg-body-teritary">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}>< img src={"images/applelogo.jpg"} alt="logo" width="50px"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Store</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Mac</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Airpods</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Ipods</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Watch</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Iphones</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Tv & Laptops</a>
        </li>
        <li className="nav-item">
          <Link to ="login" className="nav-link"><FontAwesomeIcon icon={faRightToBracket}/></Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> 
  </>
    )
}
export default Navbar;