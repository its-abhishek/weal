import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";
import { BsGoogle } from "react-icons/bs";
import '../style/SignIn.css'; // Ensure this path is correct

const Signin = () => {
  const { data: session, status } = useSession();
  const { push } = useRouter();
  const [email, setEmail] = useState("");

  // Handle OAuth Sign-In with Google
  const handleGoogleSignIn = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  // Handle email-based sign-in
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return false;
    signIn("email", { email, redirect: false });
  };

  useEffect(() => {
    if (status === "loading") return; // Avoid unnecessary render during loading
    if (session) {
      setTimeout(() => {
        push("/");
      }, 1000);
    }
  }, [status, session, push]);

  if (status === "loading") return <div>Checking Authentication...</div>;

  return (
    <div className="signin-container">
      <div
        className="Logintext"
        style={{
          position: "absolute",
          width: "363px",
          height: "55px",
          left: "66px",
          top: "201px",
          fontFamily: "'Poppins'",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "24px",
          lineHeight: "72px",
          color: "#646464",
        }}
      >
        Please Login to your account
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="h3">Sign In</h3>
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        <p className="forgot-password text-right">
          <a href="#">Forgot Password?</a>
        </p>
        <h4>OR</h4>
        <hr />
        <div onClick={handleGoogleSignIn} className="custom-control-label">
          <BsGoogle /> Sign in with Google
        </div>
      </form>
    </div>
  );
};

export default Signin;
