import React from 'react'
import "../../styles/request.css"
import Navbar from '../layouts/navbar'


const Request = () => {
    return (
        <div>
        <Navbar />
        <div className="container-fluid mb-3">
                <div className="row pl-3">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form className="card mt-5 pl-3 request-form">
                            <h3 className="">Create a request</h3>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>Title<span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" placeholder="title" aria-label="title" />
                                </div>
                            </div>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>Type<span className="text-danger">*</span></label>
                                    <select type="text" className="form-control">
                                        <option>select request type...</option>
                                        <option></option>
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>Description<span className="text-danger">*</span></label>  
                                    <textarea className="form-control" rows="5"/>
                                </div>
                            </div>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>Location<span className="text-danger">*</span></label>  
                                    <input type="text" className="form-control" placeholder="Location" aria-label="location" />
                                </div>
                            </div>
                            <div className="row btn-group pr-4">
                                <div className="col-12 col-md-4 mb-3">
                                    <button type="button" className="form-control btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    )
}

export default Request
