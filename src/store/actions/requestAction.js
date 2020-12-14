import axios from "axios"
import { setAuthToken } from "../../services/utilities"

export const requestCounter = () => {
    return (dispatch) => {
        axios({
            method: "GET",
            url: "http://localhost:3001/api/v1/request-counter",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            const { data } = response.data;
            dispatch({type: "REQUEST_COUNTER_SUCCESS", data})
        }).catch((error) => {
            const { message } = error.response.data;
            dispatch({type: "REQUEST_COUNTER_ERROR", message})
        })
    }
}

export const getRequest = () => {
    return (dispatch) => {
        axios({
            method: "GET",
            url: "http://localhost:3001/api/v1/requests",
            headers: {
                "Content-Type": "application/json",
                "Authorization": setAuthToken(),
            },
        }).then((response) => {
            const { data } = response;
            dispatch({type: "GET_REQUEST_SUCCESS", data})
        }).catch((error) => {
            const { message } = error.response.data;
            dispatch({type: "GET_REQUEST_ERROR", message})
        })
    }
}

export const singleRequest = (id) => {
    return (dispatch) => {
        axios({
            method: "GET",
            url: `http://localhost:3001/api/v1/requests/${id}`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": setAuthToken(),
            },
        }).then((response) => {
            const { data } = response;
            dispatch({type: "SINGLE_REQUEST_SUCCESS", data})
        }).catch((error) => {
            const { message } = error.response.data;
            dispatch({type: "SINGLE_REQUEST_ERROR", message})
        })
    }
}