import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Implement your sign-in logic here
    console.log("Signing in with email:", email, "and password:", password);
  };

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log("Signing up with email:", email, "and password:", password);
  };

  return (
    <div className="sign-in-sign-up-page">
      <h2>Sign In / Sign Up</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleSignIn}>
          Sign In
        </button>
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Signin;
