
export const SEARCH_DATA = 'SEARCH_DATA';
export const STORE_DATA = 'STORE_DATA';
export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const WEATHER = 'WEATHER';
export const NEWS = 'NEWS';
export const NEWSQUERY = 'NEWSQUERY'
export const LOADING = 'LOADING'


export const searchData = (payload : string) => ({
    type : SEARCH_DATA,
    payload
})

export const storeData = (payload : []) => ({
    type : STORE_DATA,
    payload
})
     
export const signUp = (payload : any) => ({
    type : SIGNUP,
    payload
})

export const login = (payload : any) => ({
    type : LOGIN,
    payload
})

export const weather = (payload : any) => ({
    type : WEATHER,
    payload
})

export const newsQuery = (payload : any) => ({
    type : NEWSQUERY,
    payload
})

export const news = (payload : any) => ({
    type : NEWS,
    payload
})

export const loading = (payload : boolean) => ({
    type : LOADING,
    payload
})