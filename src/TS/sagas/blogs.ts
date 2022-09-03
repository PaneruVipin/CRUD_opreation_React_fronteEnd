import { AnyAction } from "redux";
import { call, put } from "redux-saga/effects";
import { blogAddedAction, blogDeletedAction, blogEditedAction, blogsFetchedAction } from "../actions/blogs";
import { addBlog, deleteBlog, editBlog, getBlogs } from "../apis/blogs";
import { blog } from "../modeles/blog";


export function* getBlogsSaga(action:AnyAction):Generator{
 const data = yield call(getBlogs)
  yield put(blogsFetchedAction(data as blog[]))
  }

export function* deleteBlogsSaga(action:AnyAction):Generator{
  const data= yield call(deleteBlog, action.payload)
console.log('datadelet',data)
   yield put (blogDeletedAction())
}
export function* addBlogsaga(action:AnyAction):Generator{
  
yield call(addBlog, action.payload)
yield put (blogAddedAction())
}

export function* editBlogsSaga(action:AnyAction):Generator{
  const blog:blog=action.payload
  const data= yield call(editBlog, 
    {title:blog.title,image:blog.image,content:blog.content,date:blog.date},blog._id)
  console.log('data',data)
      yield put (blogEditedAction())
}
