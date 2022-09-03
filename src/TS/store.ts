import { applyMiddleware, combineReducers, createStore } from "redux"
import { blogsReducers } from "./reducers/blogReducers";
import { rootSaga, sagaMiddleware } from "./sagas";


const reducer= combineReducers({
   blogs:blogsReducers
})

export type State=ReturnType<typeof store.getState>;

export const store=createStore(
      reducer,applyMiddleware(sagaMiddleware)
     )
     sagaMiddleware.run(rootSaga)