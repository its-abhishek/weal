import React from 'react'; // Ensure React is imported
import { GoogleLogin } from 'react-google-login';
import Navbar from '../Navbar'; // Assuming you're using Navbar somewhere in your app

const clientId = "621502591747-tv1n3c8cak0vs485r1iosdv2u1d2aags.apps.googleusercontent.com";

function Login() {
    const onSuccess = (res) => {
        console.log("Successful login:", res.profileObj);
    };

    const onFailure = (res) => {
        console.log("Unsuccessful login:", res);
    };

    return (
        <div id="SignIn">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true} // Keeps the user signed in
            />
        </div>
    );
}

export default Login;
