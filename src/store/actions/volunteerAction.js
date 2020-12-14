import axios from "axios"
import { toast } from "react-toastify";
import { setAuthToken } from "../../services/utilities"

const successMsg = (message) => toast.success(message);
const errorMsg = (message) => toast.error(message);

export const makeVolunteer = (volunteer, ownProps) => {
    return (dispatch) => {
        dispatch({type: "PROCESSING"})
        axios({
            method: "POST",
            url: "http://localhost:3001/api/v1/volunteers",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': setAuthToken()
            },
            data: volunteer
        }).then((response) => {
            const { message } = response.data
            dispatch({type: "VOLUNTEER_SUCCESS", message})
            dispatch({type: "DONE"})
            successMsg(message)
            setTimeout(() => {
                ownProps.history.push("/users/activities")
            }, 2000);
        }).catch((error) => {
            const { message } = error.response.data
            errorMsg(message)
            dispatch({type: "VOLUNTEER_ERROR", message})
            dispatch({type: "DONE"})
        })
    }
}