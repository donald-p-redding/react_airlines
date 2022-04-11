import { configureStore } from '@reduxjs/toolkit'
import routeReducer from './reducers/routeReducer'
import viewReducer from './reducers/viewReducer'
import filterReducer from './reducers/filterReducer'

const store = configureStore({
  reducer:{
    routes: routeReducer,
    view: viewReducer,
    filter: filterReducer
  }
})

export default store