import axios from "axios"


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