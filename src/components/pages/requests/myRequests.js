import React from 'react'
import {Link} from 'react-router-dom'
import moment from "moment"
import {getUser} from "../../../services/utilities"

const MyRequests = ({my_requests}) => {

    return (
        <div>
            <h5 className="my-request-heading">My Requests</h5>
                {my_requests && my_requests.length !== 0 ?
                    my_requests.map(request => {
                        return(
                            <div className="row mb-2" key={request.id}>
                                <div className="col-12 mb-2">
                                    <div className="card my-request-card pl-2">
                                        <h5 className="text-left mb-0 mt-2 req-title">{request.title}</h5>
                                        <p className="text-left mb-0"><strong>Request by:</strong> {`${getUser().firstname} ${getUser().lastname}`} (You)</p>
                                        <p className="text-left mb-0"><strong>Type:</strong> {request.reqtype}</p>
                                        {request.status === 0 ?
                                            <p className="text-left mb-0"><strong>Status:</strong><span className="text-danger"> Unfulfilled</span></p>
                                         :
                                            <p className="text-left mb-0"><strong>Status:</strong><span className="text-success"> Fulfilled</span></p>
                                          }
                                        <p className="text-left mb-0 text-truncate"><strong>Description:</strong> <br/>{request.description}</p>
                                        <p className="text-left mb-0"><strong>Created:</strong> {moment(request.created_at).format('LLLL')}</p>
                                        <div className="d-flex mb-2">
                                            <Link to={`/request/${request.id}/${request.title.toLowerCase().split(' ').join('-')}`} className="btn btn-info btn-sm mr-1">View Request</Link>
                                            <Link to="#" className="btn btn-success btn-sm ml-1">Mark as Fulfilled</Link>
                                            <Link to="#" className="btn btn-warning btn-sm ml-1">Re-publish Request</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                : 
                <div className="alert alert-primary" role="alert">You haven't made any request yet!</div>
                }
                
            
        </div>
    )
}

export default MyRequests