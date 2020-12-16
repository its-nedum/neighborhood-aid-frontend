const initState = {
    notification: null,
    messages: [],
    loading: true,
    message_count: 0,
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
        case "GET_MESSAGES_SUCCESS":
            return {
                ...state,
                messages: action.data,
                loading: false
            }
        case "GET_MESSAGES_ERROR":
            return {
                ...state,
                notification: action.message,
                loading: false
            }
        case "NOTIFICATION_SUCCESS":
            return {
                ...state,
                message_count: action.data,
            }
        case "NOTIFICATION_ERROR":
            return {
                ...state,
                notification: action.message,
            }
        default:
        return state
    }
}

export default messageReducer