import { Reducer } from "redux";
import { BLOGS_FETCHED, BLOG_ADD, BLOG_ADDED, BLOG_DELETE, BLOG_DELETED, BLOG_EDIT, BLOG_EDITED } from "../actions/blogs";
import { useArrayToObject } from "../hooks/array";
import { blog } from "../modeles/blog";

type state={
   entities:{
   [id:string]:blog 
},

anyAttempt:boolean,
loading:boolean
}
const initialState:state={
  entities:{},
anyAttempt:false,
loading:false
}
export const blogsReducers:Reducer<state>=(state=initialState,action)=>{
   switch (action.type) {
    
     case BLOGS_FETCHED:{
        const blogs=useArrayToObject(action.payload)
        return {...state,entities:blogs}
     }
     
     case BLOG_ADDED:{
      return {...state,anyAttempt:!state.anyAttempt,loading:false }
     }
     case BLOG_DELETED:{
      console.log('blog deletd')
      return {...state, anyAttempt:!state.anyAttempt,loading:false }
     }
     case BLOG_EDITED:{
      return {...state,anyAttempt:!state.anyAttempt,loading:false }
     }
     case BLOG_ADD:{
      return {...state,loading:true}
     }
     case BLOG_EDIT:{
      return {...state,loading:true}
     }
     case BLOG_DELETE:{
      return {...state,loading:true}
     }
    default:{
        return {...state}
    }
       
   }
}