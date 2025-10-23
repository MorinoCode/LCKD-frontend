import "./SignupPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/pictures/Logo.svg";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://lckd-backend-dev.onrender.com/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Account created successfully!");
        setUsername("");
        setPassword("");
      } else {
        setMessage(`❌ ${data.message || "Something went wrong"}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Network error, try again.");
    }
  };

  return (
    <div className="signupPage">
      <div className="loginLink">
        <Link to="/login" className="loginBtnTop">
          Log in
        </Link>
      </div>

      <div className="logoSection">
        <img src={logo} alt="LCKD logo" className="logo" />
        <h1>LCKD</h1>
        <p>CREATE YOUR ACCOUNT</p>
      </div>

      <form className="signupForm" onSubmit={handleSubmit}>
        <label htmlFor="username">USERNAME</label>
        <input
          type="text"
          id="username"
          placeholder="choose a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">PASSWORD</label>
        <div className="passwordBox">
          <input
            type="password"
            id="password"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="eyeIcon">👁️</span>
        </div>

        <button type="submit" className="signupBtnMain">
          CREATE ACCOUNT
        </button>

        {message && <p className="signupMessage">{message}</p>}
      </form>
    </div>
  );
}
