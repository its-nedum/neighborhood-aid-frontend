import axios from "axios"
import {saveToken} from "../../services/utilities"
import { toast } from "react-toastify";

const successMsg = (message) => toast.success(message);
const errorMsg = (message) => toast.error(message);

export const userCounter = () => {
    return (dispatch) => {
        axios({
            method: "GET",
            url: "http://localhost:3001/api/v1/users",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            const { data } = response.data;
            dispatch({type: "USER_COUNTER_SUCCESS", data})
        }).catch((error) => {
            const { message } = error.response.data;
            dispatch({type: "USER_COUNTER_ERROR", message})
        })
    }
}

export const login = (user, ownProps) => {
    return (dispatch) => {
        dispatch({type: "PROCESSING"})
        axios({
            method: "POST",
            url: "http://localhost:3001/api/v1/login",
            headers: {
                'Content-Type': 'application/json',
            },
            data: user
        }).then((response) => {
            const { token, message } = response.data
            dispatch({type: "LOGIN_SUCCESS", message})
            dispatch({type: "DONE"})
            saveToken(token)
            successMsg(message)
            setTimeout(() => {
                ownProps.history.push("/me/dashboard")
            }, 2000);
        }).catch((error) => {
            const { message } = error.response.data
            errorMsg(message)
            dispatch({type: "LOGIN_ERROR", message})
            dispatch({type: "DONE"})
        })
    }
}