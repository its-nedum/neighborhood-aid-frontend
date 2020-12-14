const initState = {
    notification: null,
    loading: true,
    single_loading: true,
    request_counter: [],
    requests: [], // All requests
    request: [], // Single request
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
                requests: action.data,
                loading: false,
            }
        case "GET_REQUEST_ERROR":
            return {
                ...state,
                notification: action.message
            }
        case "SINGLE_REQUEST_SUCCESS":
            return {
                ...state,
                request: action.data,
                single_loading: false,
            }
        case "SINGLE_REQUEST_ERROR":
            return {
                ...state,
                notification: action.message
            }
        default:
        return state
    }
}

export default requestReducer