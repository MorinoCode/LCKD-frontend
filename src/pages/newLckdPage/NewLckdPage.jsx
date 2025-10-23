import "./NewLckdPage.css";
import logo from "../../assets/pictures/Logo.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewLckdPage() {
  const [site, setSite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // ✅ ایجاد رمز تصادفی
  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let newPass = "";
    for (let i = 0; i < 12; i++) {
      newPass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPass);
  };

  // ✅ ارسال فرم به backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("❌ You must be logged in to save a password.");
      navigate("/login");
      return;
    }

    try {
      const res = await fetch("https://lckd-backend-dev.onrender.com/api/passwords", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ site, username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Password saved successfully!");
        // پاک کردن فرم بعد از ذخیره
        setSite("");
        setUsername("");
        setPassword("");
        // بعد از 2 ثانیه کاربر را به لیست پسوردها ببر
        setTimeout(() => navigate("/mystoredpasswords"), 1500);
      } else {
        setMessage(`❌ ${data.message || "Something went wrong"}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Network error. Please try again.");
    }
  };

  return (
    <div className="newLckdPage">
      {/* Logo */}
      <div className="topLogo">
        <img src={logo} alt="LCKD logo" className="logo" />
        <span className="logoText">LCKD</span>
      </div>

      {/* Title */}
      <div className="titleSection">
        <h2>NEW SECURE</h2>
        <h2>CREDENTIALS</h2>
      </div>

      {/* Form */}
      <form className="newLckdForm" onSubmit={handleSubmit}>
        {/* WWW */}
        <label htmlFor="site">WWW</label>
        <input
          type="text"
          id="site"
          placeholder="www.tickster.com"
          className="inputField"
          value={site}
          onChange={(e) => setSite(e.target.value)}
        />

        {/* USERNAME */}
        <label htmlFor="username">USERNAME</label>
        <input
          type="text"
          id="username"
          placeholder="sixten.svensson"
          className="inputField"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* PASSWORD */}
        <label htmlFor="password">SECURE PASSWORD</label>
        <div className="passwordBox">
          <input
            type="text"
            id="password"
            placeholder="H4kunam4t4t4!"
            className="inputField passwordInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" className="refreshBtn" onClick={generatePassword}>
            🔄
          </button>
        </div>

        <div className="passwordHint">
          <span>#</span>
          <span>@</span>
          <span>123</span>
          <span>Aa</span>
          <span className="pwnd">pwnd</span>
        </div>

        <button type="submit" className="createBtn">
          CREATE LCKD
        </button>

        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}
