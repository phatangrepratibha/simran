import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logi from "../images/logo.jpg"

import Logout from './Logout';
import { useAuth } from '../context/AuthProvider';
function Nav() {
 const[authUser,setAuthUser]=useAuth();

  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid " >
    <img src={logi} height="30px" width="30px" />
    <a className="navbar-brand ms-3 " href="#">KORECIPE</a>      
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">      
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/recipe">Recipe</a>
        </li>
       
      </ul>

 {      
  authUser?(<Logout/>)
  :
  (
  <Link to="/login">
  <button className="btn btn-outline-primary ms-auto px-4 rounded-pill">
    <i className="fa fa-sign-in me-2"></i>Login</button>
  </Link>
)}

</div>
  </div>
</nav> 
    
  )
}

export default Nav;
