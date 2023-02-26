import React, {useState} from "react";
import "./signIn.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import { useUserContext } from "../../context/user_context";
import axios from "axios";

const SignIn = () => {
  const navigate=useNavigate();
  const [emailError,setEmailError]=useState();
  const [passwordError,setPasswordError]=useState();
  const{email,password,setEmail,setPassword}=useUserContext()

  const validatePassword=(e)=>{
    setPassword(e.target.value)
    if(validator.isStrongPassword(e.target.value)){
      setPasswordError("Strong Password")

    }else{
      setPasswordError("Passwords must have at least 8 characters and contain the following: uppercase letters, lowercase letters, numbers, and symbols*")
    }
  }

  const validateEmail=(e)=>{
    setEmail(e.target.value)
    if(validator.isEmail(e.target.value)){
      setEmailError("Valid Email");
    }else{
      setEmailError("Invalid Email*");
    }
  }
  const handleSignInClick=async()=>{
    try {
      const data={email,password};
      console.log(data);
      const res=await axios.post("api/v1/auth/login",data);
      if(res){
        console.log("s");
        navigate("/dashboard");
      }
      else{

      }
    } catch (error) {
      // console.log("here");
      console.log(error)
    }

  }

  return (
    <>
        <div className="container-fluid mt-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-75">
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

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 ">Or</p>
                </div>

                { 
                email && <span className={emailError==="Valid Email"?"text-success":"text-danger"}>{emailError}</span>
                }

                <div className="form-group mb-2">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control "
                    placeholder="Enter a valid email address"
                    onChange={validateEmail}
                  />
                </div>
                {
               password && <span className={passwordError==="Strong Password"?"text-success":"text-danger"}>{passwordError}</span>
                }
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
                  <button 
                    type="button" 
                    className="btn btn-primary" 
                    disabled={(emailError==="Valid Email" && passwordError==="Strong Password")?false:true} 
                    onClick={handleSignInClick}
                    >
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
    </>
  );
};

export default SignIn;
