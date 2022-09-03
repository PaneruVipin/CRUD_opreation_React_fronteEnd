import { FC, useState } from "react"
import { connect } from "react-redux"
import BlogSPage from "./Comp/Blogs/BlogsPage"
import Footer from "./Comp/Blogs/Footer"
import Header from "./Comp/Blogs/Header"
import WritingPopup from "./Comp/Blogs/WritingPopup"
import { blogAddAction } from "./TS/actions/blogs"
import { blogDetail } from "./TS/modeles/blog"

type AppProps={
  addBlog:(data:blogDetail)=>void
}
const App:FC<AppProps>=({addBlog})=> {
const a:blogDetail={title:'djj',date:'',content:'',image:''}
const [toggleCreatePost, setToggleCreatePost]=useState(false)
const cancelClick=()=>{
  setToggleCreatePost(!toggleCreatePost)
}
const blogAdd=(data:blogDetail)=>{
    addBlog(data)
}
  return (
    <div className=" min-h-screen">
      <div className="sticky top-0">
    <Header/>
    </div>
    {toggleCreatePost && <WritingPopup
     cancelclick={cancelClick}
      intialValues={{title:'',date:'',content:'',image:''}} 
      blogAdd={blogAdd}/>}
      <BlogSPage/>
    <div className="fixed bottom-0 inset-x-0">
    <Footer addClick={cancelClick}/>
    </div>
    </div>
  )
 
}

const mapDispatchToProps={
  addBlog:blogAddAction
}

export default connect(undefined,mapDispatchToProps)(App)
