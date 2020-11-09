import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../layouts/navbar'

const Signup = (props) => {
    //setup our states using hooks
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [image, setImage] = useState("");
    const [btnValue] = useState("Sign Up")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        // check if all fields are filled
        if (!firstname || !lastname || !image || !email || !password){
            setError("*All fields are required")
            return false;
        }

        // if all data is provided
        if (email && password && firstname && lastname && image){
            setError("")

            // prepare the data
            const user = {
                firstname,
                lastname,
                image,
                email,
                password
            }

            // send details to be processed
            console.log(user)

            // redirect
            setTimeout(() => {
                localStorage.setItem('NeighborhoodToken', 'vcvBNnBAIzaSyb4KBnMCyFK-P0Xnbl9f_NX09YhDc')
                props.history.push("/me/dashboard")
                }, 2000);

            // clear fields
            setEmail("")
            setPassword("")
            setFirstname("")
            setLastname("")
            setImage("")
        }
    }
    return (
        <div>
            <Navbar ownProps={props}/>
            <div className="container-fluid signup-banner">
                <div className="row pl-3">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form className="card mt-5 pl-3">
                            <h1 className="auth-heading">Create Your Account</h1>
                            <p className="auth-text">Welcome to a better way to exchange acts of kindness</p>
                            <p className="float-left text-danger">{error}</p>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>First Name</label>
                                    <input type="text" className="form-control" placeholder="First Name" value={firstname} onChange={e => setFirstname(e.target.value)} aria-label="firstname" />
                                </div>
                            </div>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control" placeholder="Last Name" value={lastname} onChange={e => setLastname(e.target.value)} aria-label="lastname" />
                                </div>
                            </div>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>Email</label>  
                                    <input type="email" className="form-control" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} aria-label="email" />
                                </div>
                            </div>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>Government Approved ID</label>
                                    <input type="file" className="form-control" onChange={e => setImage(e.target.files[0])} accept="image/png,image/jpeg,application/pdf" />
                                </div>
                            </div>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>Password</label>  
                                    <input type="password" className="form-control" placeholder="Passowrd" value={password} onChange={e => setPassword(e.target.value)} aria-label="password" />
                                </div>
                            </div>
                            <div className="row btn-group pr-4">
                                <div className="col-12 mb-3">
                                    <button type="button" className="form-control btn btn-primary" onClick={handleSubmit}>{btnValue}</button>
                                </div>
                            </div>
                            <div className="row input-group pl-3 mb-3">
                                <p>Already have an account? <Link to="/sign-in" className="">Log In</Link></p>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    )
}

export default Signup
