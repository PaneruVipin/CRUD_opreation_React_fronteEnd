import { FC, memo, useState } from "react";
import { blog, blogDetail } from "../modeles/blogs";
import {AiFillDelete} from 'react-icons/ai'
import {BiEdit} from 'react-icons/bi'
import { connect } from "react-redux";
import { blogDeleteAction, blogEditAction } from "../actions/blogs";
import PostArea from "./PostArea";
import { State } from "../store";
import { ADELoadingSelector } from "../seectors/blogs";
import Confirmation from "./Confirmation";
import {uniqueId} from 'lodash'
type BlogRowProps = {
  blog:blog
  editBlog:(blog:blogDetail,id:string,ADELoading:boolean,alertId:string)=>void
  deleteBlog:(id:string,ADELoading:boolean,alertId:string)=>void,
  ADELoading:boolean
};

const BlogRow: FC<BlogRowProps> = ({blog,editBlog,deleteBlog,ADELoading}) => {
  const alertId=uniqueId()
  const [toggleEdit,setToggleEdit]=useState(false)
  const [toggleDelete,setToggleDelete]=useState(false)
  const toggleEditClick=()=>{
    setToggleEdit(!toggleEdit)
  }
  const toggleDeleteClick=()=>{
      setToggleDelete(!toggleDelete)
  }
  

const intialValues:blogDetail={
title:blog.title,
image:blog.image,
date:blog.date,
content:blog.content
}
const handleBlogEdit=(blogDetail:blogDetail)=>{
  editBlog(blogDetail,blog._id,ADELoading,`E${alertId}`)
}
const handleConfirmDelete=()=>{
  deleteBlog(blog._id,ADELoading,`D${alertId}`)
}
return (
  <div className="rounded-md shadow-md">
    {
      toggleDelete && <Confirmation 
      cancelClick={toggleDeleteClick} 
      confirmClck={handleConfirmDelete}
       message="you want to delete this item"/>
    }
    {toggleEdit && <PostArea
    buttonName="update"
     intialValues={intialValues} cancelclick={toggleEditClick} blogEdit={handleBlogEdit}/>}
    <div className="flex  justify-end">
    <BiEdit className="w-10 h-10 hover:text-red-300" title="edit" onClick={toggleEditClick}/>
    <AiFillDelete className="w-10 h-10 ml-4 hover:text-red-300 " title="delete" onClick={toggleDeleteClick}/>
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