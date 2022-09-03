import { Reducer } from "redux";
import { BLOGS_FETCHED } from "../actions/blogs";
import { useArrayToObject } from "../hooks/array";
import { blog } from "../modeles/blog";

type state={
   entities:{
   [id:string]:blog 
}
}
const initialState:state={
  entities:{},
  
}
export const blogsReducers:Reducer<state>=(state=initialState,action)=>{
   switch (action.type) {
    
     case BLOGS_FETCHED:{
   
        const blogs=useArrayToObject(action.payload)
        return {...state,entities:{...state.entities,...blogs}}
     }
    default:{
        return {...state}
    }
       
   }
}