const initState = {
    notification: false,
    user_counter: [],
}

const userReducer = (state = initState, action) => {
    switch (action.type){
        case "USER_COUNTER_SUCCESS":
            return {
                ...state,
                user_counter: action.data,
            }
        case "USER_COUNTER_ERROR":
            return {    
                ...state,
                notification: action.message
            }
        case "PROCESSING":
            return {
                ...state,
                notification: true
            }  
        case "DONE":
            return {
                ...state,
                notification: false
            }
        case "LOGIN_SUCCESS":
            return {
                ...state,
                notification: action.message
            }
        case "LOGIN_ERROR":
            return {
                ...state,
                notification: action.message
            }
        case "SIGNUP_SUCCESS":
            return {
                ...state,
                notification: action.message
            }
        case "SIGNUP_ERROR":
            return {
                ...state,
                notification: action.message
            }        
        default:
        return state
    }
}

export default userReducer