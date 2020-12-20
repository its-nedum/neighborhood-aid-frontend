import React, {useEffect, Suspense, lazy} from 'react'
import "../../../styles/dashboard.css"
import Navbar from '../../layouts/navbar'
import { isLoggedIn } from "../../../services/utilities"
import {Redirect} from 'react-router-dom'
import Spinner from "../../maps/spinner"
import { connect } from "react-redux"
import { getRequest, createRequest } from "../../../store/actions/requestAction"
import Loader from "./loader"
import Footer from "../../layouts/footer"

const Map = lazy(() => import("../../maps/map"))
const Form = lazy(() => import("./reqForm"))

const Dashboard = (props) => {
    const { getRequest, requests, loading, processing, createRequest } = props

    useEffect(() => {
        getRequest()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(!isLoggedIn()) return <Redirect to='/' />
    if(loading) return <Loader />
    
    return (
        <div>
            <Navbar ownProps={props}/>
            <div className="dashboard">
                <div className="row d-flex">
                    <Suspense fallback={<Spinner />}>
                        <div className="col-12 col-md-5 order-2 order-md-1">
                            <Form createRequest={createRequest} processing={processing} />
                        </div>
                        <div className="col-12 col-md-7 order-1 order-md-2">
                            { requests && <Map requests={requests} /> }
                        </div>
                    </Suspense>
                </div>
            </div>
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        requests: state.request.requests,
        loading: state.request.loading,
        processing: state.request.processing,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRequest: () => dispatch(getRequest()),
        createRequest: (request) => dispatch(createRequest(request))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
