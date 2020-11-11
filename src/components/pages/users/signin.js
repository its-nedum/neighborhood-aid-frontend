import React, {useState} from 'react'
import '../../../styles/signin.css'
import {Link} from 'react-router-dom'
import Navbar from '../../layouts/navbar'

const Signin = (props) => {
    //setup our states using hooks
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [btnValue] = useState("Log In")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        // check if all fields are filled
        if ( !email || !password){
            setError("*All fields are required")
            return false;
        }

        // if all data is provided
        if (email && password){
            setError("")

            // prepare the data
            const user = {
                email,
                password
            }

            // send details to be processed
            console.log(user)

            // redirect
            setTimeout(() => {
                localStorage.setItem('NeighborhoodToken', 'vcvBNnBAIzaSyb4K-BnMCyFKP0Xnbl9f_NX09YhDc')
                props.history.push("/me/dashboard")
                }, 2000);

            // clear fields
            setEmail("")
            setPassword("")
        }
    }

    return (
        <div>
        <Navbar ownProps={props}/>
        <div className="container-fluid signin-banner">
                <div className="row pl-3">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form className="card mt-5 pl-3">
                            <h1 className="auth-heading">Login To Your Account</h1>
                            <p className="auth-text">Securely login to your Nieghborhood Aid</p>
                            <p className="float-left text-danger">{error}</p>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>Email</label>  
                                    <input type="email" className="form-control" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} aria-label="email" />
                                </div>
                            </div>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>Password</label>  
                                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} aria-label="password" />
                                </div>
                            </div>
                            <div className="row btn-group pr-4">
                                <div className="col-12 mb-3">
                                    <button type="button" className="form-control btn btn-primary" onClick={handleSubmit}>{btnValue}</button>
                                </div>
                            </div>
                            <div className="row input-group pl-3 mb-3">
                                <p>Don't have an account? <Link to="/sign-up" className="">Sign Up</Link></p>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    )
}

export default Signin
