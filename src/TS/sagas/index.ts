import createSagaMiddleware from "redux-saga";
import { takeEvery, takeLatest, takeLeading } from "redux-saga/effects";
import {  BLOGS_FETCH, BLOG_ADD, BLOG_DELETE, BLOG_EDIT } from "../actions/blogs";
import { addBlogsaga, deleteBlogsSaga, editBlogsSaga, getBlogsSaga } from "./blogs";


export const sagaMiddleware=createSagaMiddleware()

export function* rootSaga():Generator{
yield takeLatest(BLOGS_FETCH,getBlogsSaga)
yield takeEvery(BLOG_ADD, addBlogsaga)
yield takeEvery(BLOG_DELETE, deleteBlogsSaga)
yield takeEvery(BLOG_EDIT, editBlogsSaga)
}