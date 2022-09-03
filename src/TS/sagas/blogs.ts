import { AnyAction } from "redux";
import { call, put } from "redux-saga/effects";
import { blogAddedAction, blogDeletedAction, blogEditedAction, blogsFetchedAction } from "../actions/blogs";
import { addBlog, deleteBlog, editBlog, getBlogs } from "../apis/blogs";
import { blog } from "../modeles/blog";


export function* getBlogsSaga(action:AnyAction):Generator{
 const data = yield call(getBlogs)
 console.log('data',data)
  yield put(blogsFetchedAction(data as blog[]))
  }

export function* deleteBlogsSaga(action:AnyAction):Generator{
   yield call(deleteBlog, action.payload)
   yield put (blogDeletedAction())
}
export function* addBlogsaga(action:AnyAction):Generator{
  
yield call(addBlog, action.payload)
yield put (blogAddedAction())
}

export function* editBlogsSaga(action:AnyAction):Generator{
  const data= yield call(editBlog, action.payload,action.payload.id)
      yield put (blogEditedAction())
}
