import React, { useEffect, useState } from "react";
import Loading from "../component/loading/Loading";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../component/Navbar";
import axios from "axios";
import Card from "../component/cards/Card";
import { useNavigate } from "react-router-dom";
  import Form from "../component/Form";

const Dashboard = () => {
  const navigate = useNavigate();
  const [flag,setFlag]=useState(0)
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const handleFlag=()=>{
    setFlag(()=>flag+1)
    }
  const getData = async () => {
    try {
      const response = await axios.get("/api/v1/dashboard", {
        withCredentials: true,
      });
      setData(response.data);
      setLoading(false);
    } catch (error) {
      navigate("/");
    }
  };

  useEffect(() => {
    getData();
  }, [flag],[]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <Navbar />
        <div className="container" style={{ height: "80%" }}>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "20%" }}
          >
            <h2 style={{fontWeight:"bold",fontSize:"3rem"}}>Dashboard</h2>
          </div>
          <div className=" container row ">
          <div className="col-lg-6">
            <Card data={data} />
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
            <Form handleFlag={handleFlag}/>
          </div>
          </div>
        </div>
      </>
    );
  }
};

export default Dashboard;
