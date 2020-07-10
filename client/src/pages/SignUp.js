import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";
import bike from "../assets/logo1.png"


const SignUp = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = e => {
      e.preventDefault();
      console.log("first name is " + firstName);
      console.log("last name is " + lastName);
      console.log("email is " + email);
      console.log("password is " + password);
    };

  return (
    <div className="row">
        {/* <div className="col s12 m1">
            <img src={bike} alt="Full White Logo"></img>
        </div>
    </div> */}
    <div className="valign-wrapper signUpBackground">
        <div className="col s12 m6 offset-m3">
            <div className="card signIn">
                <h2>Welcome</h2>
                <h6>Already have an <span className="signUpLink">
                    <Link className="signInPageLink" to="/signin">account?</Link>
                    </span></h6>
                <div className="row">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="input-field col s6">
                                <input 
                                id="first_name" 
                                type="text" 
                                className="validate"
                                placeholder="First Name"
                                name="firstName"
                                onChange={e => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="input-field col s6">
                                <input 
                                id="last_name" 
                                type="text" 
                                className="validate"
                                placeholder="Last Name"
                                name="lastName"
                                onChange={e => setLastName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row">
                                <div className="input-field col s12">
                                    <input 
                                    id="email" 
                                    type="email" 
                                    className="validate"
                                    placeholder="Email Address"
                                    name="email"
                                    onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input 
                                id="password"
                                type="password" 
                                className="validate"
                                placeholder="Password"
                                name="password"
                                onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                            <button className="btn signInBtn" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </div>
    );
}

export default SignUp;