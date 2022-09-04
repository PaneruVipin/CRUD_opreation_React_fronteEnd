import { FC, useState } from "react"
import { connect } from "react-redux"
import BlogSPage from "./Comp/Blogs/BlogsPage"
import Footer from "./Comp/Blogs/Footer"
import Header from "./Comp/Blogs/Header"
import WritingPopup from "./Comp/Blogs/WritingPopup"
import { blogAddAction } from "./TS/actions/blogs"
import { blogDetail } from "./TS/modeles/blog"
import { ADELoadingSelector } from "./TS/seectors/blogs"
import { State } from "./TS/store"

type AppProps={
  addBlog:(data:blogDetail,ADELoading:boolean)=>void,
  ADELoading:boolean
}
const App:FC<AppProps>=({addBlog,ADELoading})=> {
const [toggleCreatePost, setToggleCreatePost]=useState(false)
const cancelClick=()=>{
  setToggleCreatePost(!toggleCreatePost)
}
const blogAdd=(data:blogDetail)=>{
    addBlog(data,ADELoading)
}
  return (
    <div className=" min-h-screen">
      <div className="sticky top-0">
    <Header/>
    </div>
    {toggleCreatePost && <WritingPopup
    buttonName="upload"
     cancelclick={cancelClick}
      intialValues={{title:'',date:'',content:'',image:''}} 
      blogAdd={blogAdd}/>}
      <BlogSPage/>
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
