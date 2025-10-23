import "./LoginPage.css";
import logo from "../../assets/pictures/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://lckd-backend-dev.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        // ✅ ذخیره توکن در localStorage
        localStorage.setItem("token", data.token);
        setMessage("✅ Logged in successfully!");
        setUsername("");
        setPassword("");

        // 🧭 بعد از ورود موفق، انتقال به صفحه‌ی محافظت‌شده
        setTimeout(() => navigate("/mystoredpasswords"), 1000);
      } else {
        setMessage(`❌ ${data.message || "Invalid credentials"}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Network error, try again.");
    }
  };

  return (
    <div className="loginPage">
      <div className="signUp">
        <Link to="/signup" className="signupBtn">
          Sign up
        </Link>
      </div>

      <div className="logoSection">
        <img src={logo} alt="LCKD logo" className="logo" />
        <h1>LCKD</h1>
        <p>KEEPING YOUR PASSWORDS SAFE</p>
      </div>

      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="username">USERNAME</label>
        <input
          type="text"
          id="username"
          placeholder="sixten.svensson"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">PASSWORD</label>
        <div className="passwordBox">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="eyeIcon">👁️</span>
        </div>

        <button type="submit" className="loginBtn">
          LET ME IN
        </button>

        {message && <p className="loginMessage">{message}</p>}
      </form>
    </div>
  );
}
