import { FC, memo, useState } from "react";
import { blog, blogDetail } from "../../TS/modeles/blog";
import {AiFillDelete} from 'react-icons/ai'
import {BiEdit} from 'react-icons/bi'
import { connect } from "react-redux";
import { blogDeleteAction, blogEditAction } from "../../TS/actions/blogs";
import WritingPopup from "./WritingPopup";
import { State } from "../../TS/store";
import { ADELoadingSelector } from "../../TS/seectors/blogs";
type BlogRowProps = {
  blog:blog
  editBlog:(blog:blogDetail,id:string,ADELoading:boolean)=>void
  deleteBlog:(id:string,ADELoading:boolean)=>void,
  ADELoading:boolean
};

const BlogRow: FC<BlogRowProps> = ({blog,editBlog,deleteBlog,ADELoading}) => {
  
  const [toggleEdit,setToggleEdit]=useState(false)
  const cancelClick=()=>{
    setToggleEdit(!toggleEdit)
  }
  
const editClick =()=>{
 cancelClick()
}
const deleteClick =()=>{
deleteBlog(blog._id,ADELoading)
}
const intialValues:blogDetail={
title:blog.title,
image:blog.image,
date:blog.date,
content:blog.content
}
const blogEdit=(blogDetail:blogDetail)=>{
  console.log('blogpagedata',blogDetail,blog._id)
  editBlog(blogDetail,blog._id,ADELoading)
}
return (
  <div className="rounded-md shadow-md">
    {toggleEdit && <WritingPopup
    buttonName="update"
     intialValues={intialValues} cancelclick={cancelClick} blogEdit={blogEdit}/>}
    <div className="flex  justify-end">
    <BiEdit className="w-10 h-10 hover:text-red-300" title="edit" onClick={editClick}/>
    <AiFillDelete className="w-10 h-10 ml-4 hover:text-red-300 " title="delete" onClick={deleteClick}/>
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
    ADELoading:ADELoadingSelector(s)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)((memo(BlogRow)));