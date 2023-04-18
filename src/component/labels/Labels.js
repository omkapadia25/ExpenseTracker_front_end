import React from "react";
// import './Labels.css'

const Labels = ({props}) => {
  const {savings,expense,investment,totalAmount}=props


  
const obj = [
  {
    type: "Savings",
    color: 'rgb(255,99,132)',
    percent:(savings*100)/totalAmount,
  },
  {
    type: "Investment",
    color: 'rgb(54,162,235)',
    percent: (investment*100)/totalAmount,
  },
  {
    type: "Expense",
    color:'rgb(255,205,86)',
    percent: (expense*100)/totalAmount,
  },
];

  return (
    <div>
      {obj.map((v, i) => {
        return <LabelComponent key={i} data={v}></LabelComponent>;
      })}
    </div>
  );
};

function LabelComponent({ data }) {
  if (!data) {
    return <></>;
  }
  return (
    <div className="labels flex justify-between my-2">
      <div className="flex gap-2">
        <div
          className="w-2 h-2 rounded py-3"
          style={{ background: data.color }}
        ></div>
        <h3 className="text-md">{data.type}</h3>
      </div>
      <h3 className="font-bold">{Math.ceil(data.percent*100)/100}%</h3>
    </div>
  );
}

export default Labels;
