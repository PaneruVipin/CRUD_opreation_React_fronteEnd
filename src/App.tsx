import { FC, useEffect, useState } from "react"
import { connect } from "react-redux"
import { blogAddAction } from "./actions/blogs"
import BlogsList from "./comonents/BlogsList"
import Footer from "./comonents/Footer"
import Header from "./comonents/Header"
import PostArea from "./comonents/popups/PostArea"
import { blogDetail } from "./modeles/blogs"
import { ADELoadingSelector } from "./seectors/blogs"
import { State } from "./store"
import {uniqueId} from 'lodash'
import AlertList from "./comonents/popups/AlertList"

type AppProps={
  addBlog:(data:blogDetail,ADELoading:boolean,alertId:string)=>void,
  ADELoading:boolean
}
const App:FC<AppProps>=({addBlog,ADELoading})=> {
  const alertId=uniqueId()
const [toggleCreatePost, setToggleCreatePost]=useState(false)
const cancelClick=()=>{
  setToggleCreatePost(!toggleCreatePost)
}
const blogAdd=(data:blogDetail)=>{
    addBlog(data,ADELoading,`A${alertId}`)
}

  return (
    <div className=" min-h-screen">
      <div className="sticky top-0">
    <Header/>
    </div>
   <AlertList/>
    {toggleCreatePost && <PostArea
    buttonName="upload"
     cancelclick={cancelClick}
      intialValues={{title:'',date:'',content:'',image:''}} 
      blogAdd={blogAdd}/>}
      <BlogsList/>
    <div className="fixed bottom-0 inset-x-0 z-0">
    <Footer addClick={cancelClick}/>
    </div>
    </div>
  )
 
}

const mapDispatchToProps={
  addBlog:blogAddAction,
}
const mapStateToProps=(s:State)=>{
  return{
  ADELoading:ADELoadingSelector(s)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
