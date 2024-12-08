export const FETCH_REQUEST = "FETCH_REQUEST"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE"


export const fetch_request = () =>{
    return{
        type:FETCH_REQUEST
    }
}


export const fetch_success = (users) =>{
    return{
        type:FETCH_SUCCESS,
        payload:users
    }
}


export const fetch_failure = (error) =>{
    return{
        type:FETCH_FAILURE,
        payload:error
    }
}

export const fetchUsers = () =>{
    return async(dispatch)=>{
        dispatch(fetch_request());
        try{
            let res= await fetch("https://jsonplaceholder.typicode.com/users")
            let data = await res.json()
            dispatch(fetch_success(data))
        }
        catch{
            let error = "Somethings Went Wrong!!!"
            dispatch(fetch_failure(error))
        }
    }
}