import axios from "axios";
import React, { useState } from "react";

const Form = ({handleFlag}) => {

    const [name,setName]=useState("");
    const [categories,setcategories]=useState("Investment");
    const [amount,setAmount]=useState("");

    const handleTransaction=async(e)=>{
        handleFlag()
        e.preventDefault()

        try {
            const response =await axios.post('/api/v1/dashboard',{name,categories,amount},{withCredentials:true})
            if(response){
                alert("Transaction Added")
            }
        } catch (error) {
            console.log(error)
        }

    }


  return (
    <div>
      <form>
        <div class="form-group my-4 ">
          <input
            type="text"
            class="form-control"
            placeholder="Sallary, House Rend, SIP"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
          />
        </div>

        <div class="form-group my-4">
          <select class="form-control" onChange={(e)=>{setcategories(e.target.value)}}>
            <option value="Investment" defaultValue>
              Investment
            </option>
            <option value="Expense">Expense</option>
            <option value="Savings">Savings</option>
          </select>
        </div>

        <div class="form-group my-4 ">
          <input
            type="number"
            class="form-control"
            placeholder="Amount"
            value={amount}
            onChange={(e)=>{setAmount(e.target.value)}}
          />
        </div>
        <button className="btn w-100"  disabled={(name==="" || amount==="")?true:false}  onClick={handleTransaction}>Add Transaction</button>


      </form>
    </div>
  );
};

export default Form;
