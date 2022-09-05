import { useState } from "react";
import { AnyAction } from "redux";
import { call, put } from "redux-saga/effects";
import { blogAddedAction, blogDeletedAction, blogEditedAction, blogsFetchedAction } from "../actions/blogs";
import { addBlog, deleteBlog, editBlog, getBlogs } from "../apis/blogs";
import { blog } from "../modeles/blogs";


export function* getBlogsSaga(action:AnyAction):Generator{
 const data = yield call(getBlogs)
  yield put(blogsFetchedAction(data as blog[]))
  }

export function* deleteBlogSaga(action:AnyAction):Generator{
  const data= yield call(deleteBlog, action.payload.id)
   yield put (blogDeletedAction(action.payload.ADELoading,action.payload.alertId) )
}
export function* addBlogSaga(action:AnyAction):Generator{
  
yield call(addBlog, action.payload.blog)
yield put (blogAddedAction(action.payload.ADELoading,action.payload.alertId))
}

export function* editBlogSaga(action:AnyAction):Generator{
  const blog:blog=action.payload.blog
  const data= yield call(editBlog, 
    {title:blog.title,image:blog.image,content:blog.content,date:blog.date},blog._id)
      yield put (blogEditedAction(action.payload.ADELoading,action.payload.alertId))
}
