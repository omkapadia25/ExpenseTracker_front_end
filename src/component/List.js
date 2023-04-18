import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUserContext } from "../context/user_context";
import { useNavigate } from "react-router-dom";
let bColor = "";
const List = () => {
  const { data, setData } = useUserContext();
  const { Amount, ResultSet,pagination } = data;
  let { totalAmount, expense, savings, investment } = Amount;
  let {count,pageCount}=pagination

  async function handleDelete(v) {
    console.log(v);
    const res = await axios.delete(
      `http://localhost:5000/api/v1/dashboard/${v}`,
      { withCredentials: true }
    );
    for (let i = 0; i < ResultSet.length; i++) {
      if (ResultSet[i]._id === v) {
        if (
          ResultSet[i].categories === "expenses" ||
          ResultSet[i].categories === "Expenses"
        ) {
          expense -= parseInt(ResultSet[i].amount);
        } else if (
          ResultSet[i].categories === "savings" ||
          ResultSet[i].categories === "Savings"
        ) {
          savings -= parseInt(ResultSet[i].amount);
        } else {
          investment -= parseInt(ResultSet[i].amount);
        }
        totalAmount -= parseInt(ResultSet[i].amount);
      }
    }
    const Amount = {
      totalAmount: totalAmount.toString(),
      expense: expense.toString(),
      savings: savings.toString(),
      investment: investment.toString(),
    };
    const pagination={
        count:count-1,
        pageCount: Math.ceil((count-1) / 7)
    }
    // console.log(pagination);

    setData({
      Amount,pagination,
      ResultSet: data.ResultSet.filter((item) => item._id !== v),
    });
  }

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {data.ResultSet.map((v, i) => {
        return <Transaction key={i} data={v}></Transaction>;
      })}
    </div>
  );

  function Transaction({ data }) {
    if (data.categories === "expense" || data.categories === "Expense") {
      bColor = "rgb(255,205,86)";
    } else if (data.categories === "Savings" || data.categories === "savings") {
      bColor = "rgb(255,99,132)";
    } else {
      bColor = "rgb(54,162,235)";
    }

    if (!data) return null;
    return (
      <>
        <div
          className="item flex justify-around bg-gray-50 py-2 rounded-r"
          style={{ borderRight: `8px solid ${bColor}` }}
        >
          <button className="px-3">
            <i
              className="fa-sharp fa-solid fa-trash"
              onClick={() => {
                handleDelete(data._id);
              }}
            ></i>
          </button>
          <div className="block w-4/5 flex justify-around">
            <span>{data.name ?? ""}</span>
            <span>{data.amount}</span>
          </div>

        </div>
      </>
    );
  }
};

export default List;
