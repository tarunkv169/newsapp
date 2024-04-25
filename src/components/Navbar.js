import React from 'react'
import { Link } from "react-router-dom";
import home from "./home.gif";   //GIFER.COM  https://ezgif.com/
import about from "./about.gif";
import business from "./business.gif";
import entertainment from "./entertainment.gif";
import general from "./general.gif";
import health from "./health.gif";
import science from "./science.gif";
import sports from "./sports.gif";
import tech from "./tech.gif";

export default function Navbar(props){
    return (
      <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsVault</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/"><img src={home} alt="loading" />  <strong>Home</strong></Link> </li>
              <li className="nav-item"> <Link className="nav-link" to="/About"><img src={about} alt="loading" />  <strong>About</strong></Link> </li>
              <li className="nav-item"> <Link className="nav-link" to="/business"><img src={business} alt="loading" />  <strong>Business</strong></Link> </li>
              <li className="nav-item"> <Link className="nav-link" to="/entertainment"><img src={entertainment} alt="loading" />  <strong>Entertainment</strong></Link> </li>
              <li className="nav-item"> <Link className="nav-link" to="/general"><img src={general} alt="loading" />  <strong>General</strong></Link> </li>
              <li className="nav-item"> <Link className="nav-link" to="/health"><img src={health} alt="loading" />  <strong>Health</strong></Link> </li>
              <li className="nav-item"> <Link className="nav-link" to="/science"><img src={science} alt="loading" />  <strong>Science</strong></Link> </li>
              <li className="nav-item"> <Link className="nav-link" to="/sports"><img src={sports} alt="loading" />  <strong>Sports</strong></Link> </li>
              <li className="nav-item"> <Link className="nav-link" to="/technology"><img src={tech} alt="loading" />  <strong>Technology</strong></Link> </li>
            </ul>
            
            <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-3`}>
               <input onClick={props.togglemode} className="form-check-input" style={{backgroundColor: props.mode==="light"?'grey':'grey'}} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
               <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: props.mode==="light"?'black':'white'}}>DarkMode</label>
            </div>
          </div>
        </div>
      </nav>
    )
  
}
