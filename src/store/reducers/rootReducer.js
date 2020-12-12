import messageReducer from "../reducers/messageReducer";
import requestReducer from "../reducers/requestReducer";
import userReducer from "../reducers/userReducer";
import volunteerReducer from "../reducers/volunteerReducer";

import { combineReducers } from "redux"

const rootReducer = combineReducers({
    message: messageReducer,
    request: requestReducer,
    user: userReducer,
    volunteer: volunteerReducer,
})

export default rootReducer;