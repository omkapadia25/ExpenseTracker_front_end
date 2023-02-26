import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js"
import "font-awesome/css/font-awesome.min.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand mx-5 text-white" href='/#'>
            Project Planning
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                {/* <a class="nav-link active mx-2 text-white" aria-current="page" href="#">
                  Dashboard
                </a> */}
                <Link to="/dashboard" className=" nav-link active mx-2 text-white ">Dashboard</Link>

              </li>
              <li class="nav-item px-2">
                <a class="nav-link active mx-2 text-white" aria-current="page" href="/#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active mx-2 text-white" aria-current="page" href="/#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className='justify-content-end d-flex'>
          <ul class="nav navbar-nav navbar-right align-items-center">
          <div className="mx-3 d-flex flex-row align-items-center">
                <i class="fa-solid fa-right-to-bracket fa-lg mx-2 text-white"></i>
                <li  className='mr-2 '>
                <Link to="/" className="text-decoration-none text-white">Login</Link>
                {/* <a className='text-decoration-none text-white'href="#">Login</a> */}
                </li>
          </div>

          <div className="mx-3 d-flex flex-row align-items-center text-white">
                <i class="fa-solid fa-user-plus fa-lg mx-1"></i>
                <li>
                <Link to="/register" className="text-decoration-none text-white">Register</Link>
                {/* <a className="text-decoration-none text-white"href="#">Register</a> */}
                </li>
          </div>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar
