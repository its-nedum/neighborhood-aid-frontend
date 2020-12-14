const initState = {
    notification: null,
}

const messageReducer = (state = initState, action) => {
    switch (action.type){
        case "MESSAGE_SUCCESS":
            return {
                ...state,
                notification: action.message
            }
        case "MESSAGE_ERROR":
            return {
                ...state,
                notification: action.message
            }
        default:
        return state
    }
}

export default messageReducer