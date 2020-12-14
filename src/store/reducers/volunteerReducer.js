const initState = {
    notification: null,
    volunteer_btn: false,
}

const volunteerReducer = (state = initState, action) => {
    switch (action.type){
        case "VOLUNTEER_SUCCESS":
            return {
                ...state,
                notification: action.message
            }
        case "VOLUNTEER_ERROR":
            return {
                ...state,
                notification: action.message
            }
        case "PROCESSING":
            return {
                ...state,
                volunteer_btn: true
            }  
        case "DONE":
            return {
                ...state,
                volunteer_btn: false
            }
        default:
        return state
    }
}

export default volunteerReducer