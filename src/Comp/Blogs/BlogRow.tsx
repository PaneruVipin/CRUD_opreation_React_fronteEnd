import { FC, memo, useState } from "react";
import { blog, blogDetail } from "../../TS/modeles/blog";
import {AiFillDelete} from 'react-icons/ai'
import {BiEdit} from 'react-icons/bi'
import { connect } from "react-redux";
import { blogDeleteAction, blogEditAction } from "../../TS/actions/blogs";
import WritingPopup from "./WritingPopup";
import Loader from "../../loader/Loader";
import { State } from "../../TS/store";
import { loadingSelector } from "../../TS/seectors/blogs";
type BlogRowProps = {
  blog:blog
  editBlog:(blog:blogDetail,id:string)=>void
  deleteBlog:(id:string)=>void,
  loading:boolean
};

const BlogRow: FC<BlogRowProps> = ({blog,editBlog,deleteBlog,loading}) => {
  
  const [toggleEdit,setToggleEdit]=useState(false)
  const cancelClick=()=>{
    setToggleEdit(!toggleEdit)
  }
  
const editClick =()=>{
 cancelClick()
}
const deleteClick =()=>{
deleteBlog(blog._id)
}
const intialValues:blogDetail={
title:blog.title,
image:blog.image,
date:blog.date,
content:blog.content
}
const blogEdit=(blogDetail:blogDetail)=>{
  console.log('blogpagedata',blogDetail,blog._id)
  editBlog(blogDetail,blog._id)
}
return (
  <div className="rounded-md shadow-md">
    {loading && <Loader/>}
    {toggleEdit && <WritingPopup
     intialValues={intialValues} cancelclick={cancelClick} blogEdit={blogEdit}/>}
    <div className="flex  justify-end">
    <BiEdit className="w-10 h-10 " onClick={editClick}/>
    <AiFillDelete className="w-10 h-10 ml-4" onClick={deleteClick}/>
    </div>
    <div className="md:flex gap-x-3 p-4 space-y-2  ">
    <img src={blog.image} className='w-64 h-64'/>
   <div>
     <h2 className="font-bold txt-2xl space-y-6">{blog.title}</h2>
     <span className="ml-10">{blog.date}</span>
     <p>{blog.content}</p>
    </div>
 </div>
 </div>
);
};

BlogRow.defaultProps = {};
const mapDispatchToProps={
  deleteBlog:blogDeleteAction,
  editBlog:blogEditAction
}
const mapStateToProps=(s:State)=>{
  return {
    loading:loadingSelector(s)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)((memo(BlogRow)));