const initState = {
    notification: null,
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
            
        default:
        return state
    }
}

export default userReducer