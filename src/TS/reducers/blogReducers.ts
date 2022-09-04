import { Reducer } from "redux";
import { BLOGS_FETCHED, BLOG_ADD, BLOG_ADDED, BLOG_DELETE, BLOG_DELETED, BLOG_EDIT, BLOG_EDITED } from "../actions/blogs";
import { useArrayToObject } from "../hooks/array";
import { blog } from "../modeles/blog";

type state={
   entities:{
   [id:string]:blog 
},
ADELoading:boolean,   // ADDED DELETED EDITED 
loading:boolean
}
const initialState:state={
  entities:{},
  ADELoading:false,
  loading:false
}
export const blogsReducers:Reducer<state>=(state=initialState,action)=>{
   switch (action.type) {
    
     case BLOGS_FETCHED:{
        const blogs=useArrayToObject(action.payload)
        return {...state,entities:blogs}
     }
     
     case BLOG_ADDED:{
      const {ADELoading,loading}=action.payload
      return {...state,ADELoading:ADELoading,loading:loading }
     }
     case BLOG_DELETED:{
      const {ADELoading,loading}=action.payload
      return {...state, ADELoading:ADELoading,loading:loading }
     }
     case BLOG_EDITED:{
      const {ADELoading,loading}=action.payload
      return {...state,ADELoading:ADELoading,loading:loading }
     }
     case BLOG_ADD:{
      return {...state,loading:action.payload.loading}
     }
     case BLOG_EDIT:{
      return {...state,loading:action.payload.loading}
     }
     case BLOG_DELETE:{
      return {...state,loading:action.payload.loading}
     }
    default:{
        return {...state}
    }
       
   }
}