import React, {useEffect, Suspense, lazy} from 'react'
import Navbar from '../../layouts/navbar'
import "../../../styles/singleRequest.css"
import { isLoggedIn } from "../../../services/utilities"
import {Redirect} from 'react-router-dom'
import { connect } from "react-redux"
import { singleRequest } from "../../../store/actions/requestAction"
import moment from "moment"
import Loader from "./loader"

const SingleRequestMap = lazy(() => import("../../maps/singleRequestMap"))

//This page displays the request details
const SingleRequest = (props) => {
    const { singleRequest, request, loading, match:{params:{id}}} = props
    
    useEffect(() => {
        singleRequest(id)
    }, [])

    if(!isLoggedIn()) return <Redirect to='/' />
    if (loading) return <Loader />
    return (
        <div style={{minHeight:'100vh'}}>
            <Navbar ownProps={props}/>
            <Suspense fallback={<div>Loading...</div>} >
                { request && <SingleRequestMap request={request} /> }
            </Suspense>
            <div className="container single-banner mt-5">
                <div className="row">
                    <div className="col-12 col-md-7 mb-3">
                    <div className="card">
                        <form className="submit-help-form pl-2 pr-2">
                            <h5 className="text-left">Do You Want to Volunteer?</h5>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>Message</label>
                                    <textarea className="form-control" placeholder="Type message to the requester here..." aria-label="message" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="btn-group col-12 col-md-4 mb-3">
                                    <button type="button" className="form-control btn btn-success">SEND</button>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>

                    <div className="col-12 col-md-5">
                        <div className="about-volunteers">
                            <div className="card">
                            <h5 className="pl-2">Volunteers For This Request</h5>
                            { request.volunteers.length !== 0 ?
                            <div className="table-responsive pl-2">
                                <table className="table">
                                    <tbody className="pl-2">
                                        {
                                            request.volunteers && request.volunteers.map((volunteer, index) => {
                                                return(
                                                    <tr key={index}>
                                                        <td>{index}</td>
                                                        <td>{`${volunteer.user.firstname} ${volunteer.user.lastname}`}</td>
                                                        <td>{moment(volunteer.created_at).format('LLLL')}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            : 
                            <div className="alert alert-primary" role="alert">
                                No volunteer(s) yet!
                            </div>
                            }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        request: state.request.request,
        loading: state.request.single_loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        singleRequest: (id) => dispatch(singleRequest(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleRequest)
