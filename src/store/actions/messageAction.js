import axios from "axios"
// import { toast } from "react-toastify";
import { setAuthToken } from "../../services/utilities"

// const successMsg = (message) => toast.success(message);
// const errorMsg = (message) => toast.error(message);

export const sendMessage = (mesg) => {
    return (dispatch) => {
        dispatch({type: "PROCESSING"})
        axios({
            method: "POST",
            url: "http://localhost:3001/api/v1/messages",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': setAuthToken()
            },
            data: mesg
        }).then((response) => {
            const { message } = response.data
            dispatch({type: "MESSAGE_SUCCESS", message})
            dispatch({type: "DONE"})
        }).catch((error) => {
            const { message } = error.response.data
            dispatch({type: "MESSAGE_ERROR", message})
            dispatch({type: "DONE"})
        })
    }
}

export const getMessages = () => {
    return (dispatch) => {
        axios({
            method: "GET",
            url: "http://localhost:3001/api/v1/my-messages",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': setAuthToken()
            },
        }).then((response) => {
            const { data } = response
            dispatch({type: "GET_MESSAGES_SUCCESS", data})
        }).catch((error) => {
            const { message } = error.response.data
            dispatch({type: "GET_MESSAGES_ERROR", message})
        })
    }
}

export const messageNotification = () => {
    return (dispatch) => {
        axios({
            method: "GET",
            url: "http://localhost:3001/api/v1/notifications",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': setAuthToken()
            },
        }).then((response) => {
            const { data } = response.data
            dispatch({type: "NOTIFICATION_SUCCESS", data})
        }).catch((error) => {
            const { message } = error.response.data
            dispatch({type: "NOTIFICATION_ERROR", message})
        })
    }
}