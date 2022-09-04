import createSagaMiddleware from "redux-saga";
import { takeEvery, takeLatest, takeLeading } from "redux-saga/effects";
import {  BLOGS_FETCH, BLOG_ADD, BLOG_DELETE, BLOG_EDIT } from "../actions/blogs";
import { addBlogSaga, deleteBlogSaga, editBlogSaga, getBlogsSaga } from "./blogs";


export const sagaMiddleware=createSagaMiddleware()

export function* rootSaga():Generator{
yield takeLatest(BLOGS_FETCH,getBlogsSaga)
yield takeEvery(BLOG_ADD, addBlogSaga)
yield takeEvery(BLOG_DELETE, deleteBlogSaga)
yield takeEvery(BLOG_EDIT, editBlogSaga)
}