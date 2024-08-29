import React, { Component } from "react";
import '../style/SignIn.css';

function SignUp() {
        return (
            <form className="form">
                <h3 className="h3">Sign Up</h3>

                <div className="form-group">
                    <label className="label">Your User ID: </label>
                    <input type="text" className="UserID" placeholder="#" disabled />
                </div>


                <div className="form-group">
                    <label className="label">Enter Password:</label>
                    <input type="password" className="Password" placeholder="Enter Password" />
                </div>

                <div className="form-group">
                    <label className="label">Re-Enter Password:</label>
                    <input type="password" className="Password" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">SIGN UP</button>
                <p className="forgot-password text-right">
                    <a href="#">Already registered sign in?</a>
                </p>
            </form>
        );
    }

export default SignUp;