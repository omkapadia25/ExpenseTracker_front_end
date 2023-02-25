import React,{useState} from "react";
import "./signIn.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import validator from "validator";

const SignIn = () => {
  const [emailError,setEmailError]=useState();
  const [passwordError,setPasswordError]=useState();

  const validatePassword=(e)=>{
    if(validator.isStrongPassword(e.target.value)){
      setPasswordError("Strong Password")

    }else{
      setPasswordError("Passwords must have at least 8 characters and contain the following: uppercase letters, lowercase letters, numbers, and symbols*")
    }
  }

  const validateEmail=(e)=>{
    if(validator.isEmail(e.target.value)){
      setEmailError("Valid Email");
    }else{
      setEmailError("Invalid Email*");
    }
  }

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fa fa-facebook"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fa fa-twitter"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fa fa-linkedin"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fa fa-google"></i>
                  </button>
                </div>

                <div className="divider d-flex align-items-center mt-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

        <div className="d-flex justify-content-around mb-2 ">

                <div class="form-check ">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label class="form-check-label" for="flexRadioDefault1">
                    Member
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label class="form-check-label" for="flexRadioDefault2">
                    Creator
                </label>
                </div>
        </div>
        <span className={emailError==="Valid Email"?"text-success":"text-danger"}>{emailError}</span>
                <div className="form-group mb-2">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control "
                    placeholder="Enter a valid email address"
                    onChange={validateEmail}
                  />
                </div>
        <span className={passwordError==="Strong Password"?"text-success":"text-danger"}>{passwordError}</span>
                <div className="form-group mb-2">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={validatePassword}
                  />
                </div>


                <div className="text-center text-lg-start mt-3 pt-2 d-flex justify-content-center flex-column ">
                  <button type="button" className="btn btn-primary" disabled={(emailError==="Valid Email" && passwordError==="Strong Password")?false:true} >
                    Login
                  </button>
                  <div className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?
                    &nbsp;
                    <Link to="/register" className="text-decoration-none">Register</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          <div className="text-white mb-3 mb-md-0"></div>

          <div>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
