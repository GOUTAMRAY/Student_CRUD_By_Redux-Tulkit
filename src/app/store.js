import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../features/studentSlice"


// create store 
const store = configureStore({
   reducer : {
    student : studentReducer,
   }
})


// export default store 
export default store;






