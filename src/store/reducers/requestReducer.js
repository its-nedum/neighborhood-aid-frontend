const initState = {
    notification: null,
    request_counter: [],
    requests: [],
}

const requestReducer = (state = initState, action) => {
    switch (action.type){
        case "REQUEST_COUNTER_SUCCESS":
            return {
                ...state,
                request_counter: action.data,
            }
        case "REQUEST_COUNTER_ERROR":
            return {    
                ...state,
                notification: action.message
            }
        case "GET_REQUEST_SUCCESS":
            return {
                ...state,
                requests: action.data
            }
        case "GET_REQUEST_ERROR":
            return {
                ...state,
                notification: action.message
            }
        default:
        return state
    }
}

export default requestReducer