const initState = {
    notification: null,
    loading: true,
    single_loading: true,
    request_counter: [],
    requests: [], // All requests
    request: [], // Single request
    my_requests: [], // My requests
    my_requests_loading: true,
    fulfilled: false,
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
        case "MY_REQUESTS_SUCCESS":
            return {
                ...state,
                my_requests: action.data,
                my_requests_loading: false,
            }
        case "MY_REQUESTS_ERROR":
            return {
                ...state,
                notification: action.message
            }
        case "MARK_AS_FULFILLED_SUCCESS":
            return {
                ...state,
                notification: action.message,
            }
        case "MARK_AS_FULFILLED_ERROR":
            return {
                ...state,
                notification: action.message
            }
        case "PROCESSING":
            return {
                ...state,
                fulfilled: true
            }  
        case "DONE":
            return {
                ...state,
                fulfilled: false
            }
        default:
        return state
    }
}

export default requestReducer