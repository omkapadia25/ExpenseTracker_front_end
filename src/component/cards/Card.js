import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./card.css"



const Card = (props) => {

    const {dailyAmount,weeklyAmount,monthlyAmount,yearlyAmount}=props.data;
    const data=
        [
            { title: "Today's Expenses", amount: dailyAmount},
            { title: "Last 7 day's Expenses", amount: weeklyAmount},
            { title: "Last 30 day's Expenses", amount: monthlyAmount},
            { title: "Last 365 day's Expenses", amount: yearlyAmount},
        ]
  return (
    <div className="cards mx-0">
      {data.map((item, i) => {
        return (
          <>
            <div className="card" key={i}>
              <h4>{item.title}</h4>
              <div className=" d-flex justify-content-between">
                <h2 className="">{item.amount}</h2>
                <h2>
                  <i className="fa-sharp fa-solid fa-indian-rupee-sign"></i>
                </h2>
              </div>
              <Link to={`/details/${i}`} className="text-decoration-none link">
                Details
              </Link>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Card;
