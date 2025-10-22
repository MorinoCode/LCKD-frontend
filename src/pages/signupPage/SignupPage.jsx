import "./SignupPage.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pictures/Logo.svg";

export default function SignupPage() {
  return (
    <div className="signupPage">
      <div className="loginLink">
        <Link to="/login" className="loginBtnTop">
          Log in
        </Link>
      </div>

      {/* Logotyp och text */}
      <div className="logoSection">
        <img src={logo} alt="LCKD logo" className="logo" />
        <h1>LCKD</h1>
        <p>CREATE YOUR ACCOUNT</p>
      </div>

      {/* Formulär */}
      <form className="signupForm">
        <label htmlFor="username">USERNAME</label>
        <input type="text" id="username" placeholder="choose a username" />

        <label htmlFor="password">PASSWORD</label>
        <div className="passwordBox">
          <input type="password" id="password" placeholder="enter password" />
          <span className="eyeIcon">👁️</span>
        </div>

        <button type="submit" className="signupBtnMain">
          CREATE ACCOUNT
        </button>
      </form>
    </div>
  );
}
