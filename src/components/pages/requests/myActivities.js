import React, {useEffect} from 'react'
import Navbar from '../../layouts/navbar'
import { isLoggedIn } from "../../../services/utilities"
import {Redirect} from 'react-router-dom'
import "../../../styles/myActivities.css"
import MyRequests from "./myRequests"
import MyVolunteering from "./myVolunteering"
import { getMyVolunteerings } from "../../../store/actions/volunteerAction"
import { getMyRequests, markAsFulfilled } from "../../../store/actions/requestAction"
import { connect } from "react-redux"
import Loader from "./loader"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const MyActivities = (props) => {
    const {getMyRequests, my_requests, getMyVolunteerings, my_volunteerings, loading, markAsFulfilled, fulfilled} = props

    useEffect(() => {
        getMyRequests();
        getMyVolunteerings();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const markfulfilled = (id) => {
        markAsFulfilled(id)
    }

    if(!isLoggedIn()) return <Redirect to='/' />
    if(loading) return <Loader />
    if(fulfilled) return <Loader />
    return (
        <div>
            <Navbar ownProps={props}/>
            <div className="container mt-3 mb-5 myRequests">
                <ToastContainer />
                <div className="row">
                   <div className="col-12 col-md-6">
                        <MyRequests my_requests={my_requests} markAsFulfilled={markfulfilled} status={fulfilled} />
                    </div> 
                    <div className="col-12 col-md-6">
                        <MyVolunteering my_volunteerings={my_volunteerings} />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        my_requests: state.request.my_requests,
        my_volunteerings: state.volunteer.my_volunteerings,
        loading: state.volunteer.my_volunteerings_loading,
        fulfilled: state.request.fulfilled,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMyRequests: () => dispatch(getMyRequests()),
        getMyVolunteerings: () => dispatch(getMyVolunteerings()),
        markAsFulfilled: (id) => dispatch(markAsFulfilled(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyActivities)
