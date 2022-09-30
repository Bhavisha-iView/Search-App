import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./reducers/SearchReducer";
import {combineReducers, createStore} from 'redux'

const reducer = combineReducers({ 
    searchReducer : searchReducer
})

export const Store = configureStore({reducer})

export type RootState = ReturnType<typeof Store.getState>

export type AppDispatch = typeof Store.dispatch 