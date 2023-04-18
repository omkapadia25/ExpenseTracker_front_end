import React,{useEffect, useState} from "react";
import "./Registration.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "font-awesome/css/font-awesome.min.css";
import  validator  from 'validator';
import { useUserContext } from "../../context/user_context";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
// import { Link } from "react-router-dom";

const Registration = () => {
  useEffect(()=>{
    setEmail("");
    setPassword("");
  },[])
  
  const navigate=useNavigate();
  const {name,email,password,number,setName, setNumber,setEmail,setPassword}=useUserContext();
  const [emailError,setEmailError]=useState();
  const [passwordError,setPasswordError]=useState();
  const [numberError,setNumberError]=useState();


  const validateEmail=(e)=>{
    setEmail(e.target.value)
    if(validator.isEmail(e.target.value)){
      setEmailError("Valid Email");
    }else{
      setEmailError("Invalid Email*");
    }
  }

  const validateNumber=(e)=>{
    setNumber(e.target.value);
    if(e.target.value.length===10)
    {
      setNumberError("Phone Number Valid")
    }
    else{
      setNumberError("Number should have 10 digit*")
    }

  }
  const validatePassword=(e)=>{
    setPassword(e.target.value);
    if(validator.isStrongPassword(e.target.value)){
      setPasswordError("Strong Password")

    }else{
      setPasswordError("Passwords must have at least 8 characters and contain the following: uppercase letters, lowercase letters, numbers, and symbols*")
    }
  }

  const handleRegisterClick=async()=>{
    const data={name,email,password,number}
    try {
      const res=await axios.post("api/v1/auth/register",data);
      if(res){
        setEmail("");
        setPassword("");
        setName("");
        setNumber("");
        alert("Register Succesfully")

      }else{
        console.log("something went wrong")
      }
    } catch (err) {
      
    }
    console.log(data)
  }


  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://cdn.pixabay.com/photo/2019/06/19/07/13/email-4284157_960_720.png"
                className="img-fluid"
                alt="Sample"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign up with</p>
                  <button
                    type="button"
                    className="btn  btn-floating mx-1"
                 
                  >
                    <i className="fa fa-facebook"></i>
                  </button>

                  <button
                    type="button"
                    className="btn  btn-floating mx-1"
                    // style={{backgroundColor:"#d0dce5"}}
                  >
                    <i className="fa fa-twitter"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-floating mx-1"
                  
 
                  >
                    <i className="fa fa-linkedin"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-floating mx-1"
                  
                  >
                    <i className="fa fa-google"></i>
                  </button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 ">Or</p>
                </div>
                <div className="form-group mb-2">
                  <input
                  value={name}
                    type="text"
                    id="form3Example6"
                    className="form-control"
                    placeholder="Enter Your Name"
                    onChange={(e)=>{
                      setName(e.target.value);
                    }}
                  />
                </div>

          { 
          email && <span className={emailError==="Valid Email"?"text-success":"text-danger"}>{emailError}</span>
          }
                <div className="form-group mb-2">
                  <input
                  value={email}
                    type="email"
                    id="form3Example3"
                    className="form-control "
                    placeholder="Enter valid email address"
                    onChange={validateEmail}
                  />
                </div>
                {
                 password && <span className={passwordError==="Strong Password"?"text-success":"text-danger"}>{passwordError}</span>
                }
                <div className="form-group mb-2">
                  <input
                  value={password}
                    type="password"
                    id="form3Example4"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={validatePassword}
                  />
                </div>
                {
                  number && <span className={numberError==="Phone Number Valid"?"text-success":"text-danger"}>{numberError}</span>
                }

                <div className="form-group mb-2">
                  <input
                  value={number}
                    type="number"
                    id="form3Example5"
                    className="form-control"
                    placeholder="Enter Phone"
                    onChange={validateNumber}
                  />
                </div>


                <div className="text-center text-lg-start mt-3 pt-2 d-flex justify-content-center flex-column ">
                  <button 
                  type="button" 
                  className=" btn" 
                  disabled={(emailError==="Valid Email" && numberError==="Phone Number Valid"&& passwordError==="Strong Password")?false:true}
                  onClick={handleRegisterClick}
                  style={{backgroundColor:"#d0dce5" ,color:"#183153",fontWeight:"900"}}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Registration;
