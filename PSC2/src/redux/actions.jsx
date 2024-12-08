export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';


export const fetchUsersRequest=()=>{
    return{
    type:FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess=(users)=>{
    return{
    type:FETCH_USERS_SUCCESS,
    payload:users
    }
}

export const fetchUsersFailure=(error)=>{
    return{
    type:FETCH_USERS_FAILURE,
    payload:error
    }
}

export const fetchUsers = () => {
    return async(dispatch)=>{
        dispatch(fetchUsersRequest());
        try{
            let res = await fetch("https://jsonplaceholder.typicode.com/users");
            let data = await res.json()
            dispatch(fetchUsersSuccess(data))
        }catch(error){
            dispatch(fetchUsersFailure("Failed to fetch"))
        }
    }
}