import React, { useContext, useReducer } from 'react';
import reducer from "../reducer/user_reducer";
import {
set_Email,
set_Password,
set_Number,
set_Name,
set_Data
}
from "../action";


const initialState = {
    name: "",
    email: "",
    password: "",
    number: "",
    data:{
        Amount:{
            totalAmount:0,
            expense:0,
            savings:0,
            investment:0

        },pagination:{
            count:0,
        },
        ResultSet:[

        ]
    }
    
}

const UserContext = React.createContext()


export const UserProvider = ({ children }) => {
    const [state, dispath] = useReducer(reducer, initialState);
    
    

    const setName = (val) => {
        dispath({type: set_Name, payload: val})
    }
    const setNumber = (val) => {
        dispath({type: set_Number, payload: val})
    }
    const setEmail = (val) => {
        dispath({type: set_Email, payload: val})
    }
    const setPassword = (val) => {
        dispath({type: set_Password, payload: val})
    }
    const setData=(val)=>{
        dispath({type:set_Data,payload:val})
    }
    

    

    return (
        <UserContext.Provider value={{...state, setName, setNumber, setEmail, setPassword,setData}}>{children}</UserContext.Provider>
      )
}

export const useUserContext = () => {
    return useContext(UserContext)
}