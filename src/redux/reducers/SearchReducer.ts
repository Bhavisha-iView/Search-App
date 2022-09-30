import { SEARCH_DATA, STORE_DATA, SIGNUP, LOGIN, NEWS, NEWSQUERY, LOADING } from "../actions/SearchAction";

interface State {
    searchQuery : string,
    searchdata : any,
    signup : any,
    login : any,
    news : any,
    newsQuery : string,
    loading : boolean
}

const initialState : State = {
    searchQuery : "",
    searchdata : [],
    signup : [],
    login : [],
    news : [],
    newsQuery : "",
    loading : true
}

console.log(initialState)

export const searchReducer = (store = initialState, action : any) => {
    switch (action.type) {
        case SEARCH_DATA:
            return {
                ...store,
                searchQuery : action.payload
            }
            
        case STORE_DATA:
            return {
                ...store,
                searchdata : [...action.payload]
            }    
        case SIGNUP:
            return {
                ...store,
                signup : [{...action.payload}]
            }    
        case LOGIN:
            return {
                ...store,
                login : [{...action.payload}]
            }   
        case NEWSQUERY:
            return {
                ...store,
                newsQuery : action.payload
            }      
        case NEWS:
            return {
                ...store,
                news : [...action.payload]
            }  
        case LOADING :
            return { 
                ...store,
                loading : false
            }             
        default:
            return store
    }
}