import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../loading/Loading";
import axios from "axios";
import Graph from "../Graph/Graph";
import List from "../List";
import Pagination from "../Pagination";
import { useUserContext } from "../../context/user_context";

const Details = () => {
const [page, setPage] = useState(1);
// const [pageCount, setPageCount] = useState(0);
const {data,setData}=useUserContext()
const navigate=useNavigate()

  const { index } = useParams();
  let url = "";
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    switchCase();
    getData();
    console.log("useEffect");
  }, [page,data.pagination.count]);

  const getData = async () => {
    // console.log("heelo")
    if (url !== "") {
      try {
        setLoading(true);
        const res = await axios.get(url, { withCredentials: true });
        setData(res.data);
        setLoading(false);
        // setPageCount(res.data.pagination.pageCount);
      } catch (error) {
        navigate('/')
        console.log(error);
      }
    }
  };

  function handlePrevious() {
    setPage((page) => {
      if (page === 1) return page;
      return page - 1;
    });
  }
  function handleNext() {
    setPage((page) => {
      if (page === data.pagination.count) return page;
      return page + 1;
    });
  }

  const switchCase = () => {
    switch (index) {
      case "0":
        // setUrl(`/api/v1/dashboard/dailyTransaction?page=${page}`);
        url = `/api/v1/dashboard/dailyTransaction?page=${page}`;
        break;
      case "1":
        // setUrl(`/api/v1/dashboard/weeklyTransaction?page=${page}`);
        url = `/api/v1/dashboard/weeklyTransaction?page=${page}`;
        break;
      case "2":
        // setUrl(`/api/v1/dashboard/monthlyTransaction?page=${page}`);
        url = `/api/v1/dashboard/monthlyTransaction?page=${page}`;
        break;
      case "3":
        // setUrl(`/api/v1/dashboard/yearlyTransaction?page=${page}`);
        url = `/api/v1/dashboard/yearlyTransaction?page=${page}`;
        break;
    }
  };


  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
          <div className="grid md:grid-cols-2 gap-4 py-10">
            <Graph/>
            <List props={{index}}/>
          </div>
          <Pagination props={{ page, handlePrevious, handleNext }} />
        </div>
      </>
    );
  }
};

export default Details;
