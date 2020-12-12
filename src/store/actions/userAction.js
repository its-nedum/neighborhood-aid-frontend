import axios from "axios"


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