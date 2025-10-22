import "./LoginPage.css";
import logo from '../../assets/pictures/Logo.svg'
export default function LoginPage() {
  return (
    <div className="loginPage">
      <div className="signUp">
        <button className="signupBtn">Sign up</button>
      </div>

      <div className="logoSection">
        <img src={logo} alt="LCKD logo" className="logo" />
        <h1>LCKD</h1>
        <p>KEEPING YOUR PASSWORDS SAFE</p>
      </div>

      <form className="loginForm">
        <label htmlFor="username">USERNAME</label>
        <input type="text" id="username" placeholder="sixten.svensson" />

        <label htmlFor="password">PASSWORD</label>
        <div className="passwordBox">
          <input type="password" id="password" />
          <span className="eyeIcon">👁️</span>
        </div>

        <button type="submit" className="loginBtn">
          LET ME IN
        </button>
      </form>
    </div>
  );
}
