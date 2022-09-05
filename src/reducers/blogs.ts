import { Reducer } from "redux";
import { ALERT_REMOVE, BLOGS_FETCH, BLOGS_FETCHED, BLOG_ADD, BLOG_ADDED, BLOG_DELETE, BLOG_DELETED, BLOG_EDIT, BLOG_EDITED } from "../actions/blogs";
import Alert from "../comonents/popups/Alert";
import { useArrayToObject } from "../hooks/arrays";
import { alert, blog } from "../modeles/blogs";

type state={
   entities:{
   [id:string]:blog 
},
ADELoading:boolean,   // ADDED DELETED EDITED 
loading:boolean
alerts:alert[]
}
const initialState:state={
  entities:{},
  ADELoading:false,
  loading:false,
  alerts:[]
  
}
export const blogsReducers:Reducer<state>=(state=initialState,action)=>{
   switch (action.type) {
    
     case BLOGS_FETCHED:{
        const blogs=useArrayToObject(action.payload.blogs)
        return {...state,entities:blogs,loading:action.payload.loading}
     }
     case BLOGS_FETCH:{
      return{...state,loading:action.payload}
     }
     case BLOG_ADDED:{
      const {ADELoading,loading}=action.payload
      return {...state,ADELoading:ADELoading,loading:loading,alerts:[...state.alerts,action.payload.alert] }
     }
     case BLOG_DELETED:{
      const {ADELoading,loading}=action.payload
      return {...state, ADELoading:ADELoading,loading:loading,alerts:[...state.alerts,action.payload.alert]}
     }
     case BLOG_EDITED:{
      const {ADELoading,loading}=action.payload
      return {...state,ADELoading:ADELoading,loading:loading,alerts:[...state.alerts,action.payload.alert] }
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
     case ALERT_REMOVE:{
      return {...state,alerts:action.payload}
     }
    default:{
        return {...state}
    }
       
   }
}