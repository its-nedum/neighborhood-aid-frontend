import React, {useEffect} from 'react'
import Navbar from '../../layouts/navbar'
import { isLoggedIn } from "../../../services/utilities"
import {Redirect} from 'react-router-dom'
import "../../../styles/myActivities.css"
import MyRequests from "./myRequests"
import MyVolunteering from "./myVolunteering"
import { getMyVolunteerings } from "../../../store/actions/volunteerAction"
import { getMyRequests } from "../../../store/actions/requestAction"
import { connect } from "react-redux"
import Loader from "./loader"

const MyActivities = (props) => {
    const {getMyRequests, my_requests, getMyVolunteerings, my_volunteerings, loading} = props

    useEffect(() => {
        getMyRequests();
        getMyVolunteerings();
    }, [])

    if(!isLoggedIn()) return <Redirect to='/' />
    if(loading) return <Loader />
    return (
        <div>
            <Navbar ownProps={props}/>
            <div className="container mt-3 mb-5 myRequests">
                <div className="row">
                   <div className="col-12 col-md-6">
                        <MyRequests my_requests={my_requests} />
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMyRequests: () => dispatch(getMyRequests()),
        getMyVolunteerings: () => dispatch(getMyVolunteerings())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyActivities)
