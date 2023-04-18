import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js"
import "font-awesome/css/font-awesome.min.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Navbar = () => {
  const navigate=useNavigate()
  function handleLogout(){
    Cookies.remove('token')
    navigate('/')
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{background:"#d0dce5"}}>
        <div className="container-fluid ">
          <a className="navbar-brand mx-5 " style={{color:"#183153"}} href='/#'>
            ExpenseTracker
          </a>

          <div className='nav navbar-nav navbar-right d-flex justify-content-start py-2'>
              
                    <div className="mx-3 d-flex flex-row align-items-baseline">
                          <i className="fa-solid fa-right-to-bracket fa-lg mx-1" ></i>
                          <li  className='mr-2 '>
                         <button onClick={handleLogout}>Log Out</button>
                          {/* <a className='text-decoration-none text-white'href="#">Login</a> */}
                          </li>
                    </div>


          
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar
