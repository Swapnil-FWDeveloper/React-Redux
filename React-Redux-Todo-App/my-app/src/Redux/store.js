import {legacy_createStore} from "redux"
import { reducer } from "./TodoApp/Reducer/reducer"

const initialState=[
    {id:1,todo:'Buy Thing 1', completed:false},
    {id:2,todo:'Buy Things 2', completed:true},
    {id:3,todo:'Buy Things 3', completed:false},
    {isLoading:false,isError:false,}

    // isLoading:false,
    // isError:false,
]

export const store=legacy_createStore(reducer,initialState)