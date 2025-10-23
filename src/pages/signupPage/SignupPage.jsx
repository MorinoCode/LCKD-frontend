import "./SignupPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/pictures/Logo.svg";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ جلوگیری از reload

    try {
      const res = await fetch("https://lckd-backend-dev.onrender.com/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      // 🧠 گاهی response خالیه (مثلاً 204)، برای اطمینان try-catch بذاریم
      let data = {};
      try {
        data = await res.json();
      } catch {}

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

      {/* لوگو و تیتر */}
      <div className="logoSection">
        <img src={logo} alt="LCKD logo" className="logo" />
        <h1>LCKD</h1>
        <p>CREATE YOUR ACCOUNT</p>
      </div>

      {/* فرم */}
      <form className="signupForm" onSubmit={handleSubmit}>
        <label htmlFor="username">USERNAME</label>
        <input
          type="text"
          id="username"
          placeholder="choose a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">PASSWORD</label>
        <div className="passwordBox">
          <input
            type="password"
            id="password"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
