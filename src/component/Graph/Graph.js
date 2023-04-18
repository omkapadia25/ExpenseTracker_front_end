import React, { useEffect, useState } from 'react'
import './Graph.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "font-awesome/css/font-awesome.min.css";
import {Chart,ArcElement} from 'chart.js'
import {Doughnut} from 'react-chartjs-2'
import Labels from '../labels/Labels';
import { useUserContext } from '../../context/user_context';
Chart.register(ArcElement);

const Graph = () => {
  const {data}=useUserContext()

  const {Amount,ResultSet}=data;
  const {totalAmount,expense,savings,investment}=Amount

  // useEffect(()=>{
  //   data.ResultSet.map((v,i)=>{
  //       if(v.categories==='Expenses' || v.categories==='expenses'){
  //         setExpense((expense)=>(expense+parseInt(v.amount))
  //         )
  //       }
  //       if(v.categories==='Investment' || v.categories==='investment'){
  //         setInvestment((investment)=>(investment+parseInt(v.amount))
  //         )
  //       }
  //       if(v.categories==='Savings' || v.categories==='savings'){
  //         setSavings((savings)=>(savings+parseInt(v.amount))
  //         )
  //       }
  //   })

  // },[])


    const config = {
        data : {
          datasets: [{
              data: [savings,investment,expense],
              backgroundColor: [
                'rgb(255,99,132)',
                'rgb(54,162,235)',
                'rgb(255,205,86)'
              ],
              hoverOffset: 4,
              borderRadius : 30,
              spacing: 10
            }]
        },
        options : {
            cutout: 115
        }
    }


    




  return (
    <div className="flex justify-content max-w-xs mx-auto">
    <div className="item">
        <div className="chart relative">
            <Doughnut {...config}></Doughnut>
            <h3 className='mb-4 font-bold title'>Total
                <span className='block text-3xl text-emerald-400'>{totalAmount}</span>
            </h3>
        </div>   

        <div className="flex flex-col py-10 gap-4">
        <Labels props={{savings,expense,investment,totalAmount}}/>
        </div> 
    </div>
</div>
  )



}

export default Graph
