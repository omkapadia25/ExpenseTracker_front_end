import {
   set_Email,
   set_Name,set_Number,set_Password
}
from "../action";





const user_reducer = (state, action) => {
    
    
    

    
if(action.type===set_Name){
    // console.log(action.payload);
    return{...state,name:action.payload}
}

    if(action.type === set_Number){
        // console.log(action.payload);
        return {...state, number: action.payload}
    }
    if(action.type === set_Email){
        // console.log(action.payload);
        return {...state, email: action.payload}
    }
    if(action.type === set_Password){
        // console.log(action.payload);
        return {...state, password: action.payload}
    }





    return state;
}


export default user_reducer