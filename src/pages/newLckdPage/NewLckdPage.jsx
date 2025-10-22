import "./NewLckdPage.css";
import logo from '../../assets/pictures/Logo.svg'


export default function NewLckdPage() {
  return (
    <div className="newLckdPage">
      {/* Logo */}
      <div className="topLogo">
        <img src={logo} alt="LCKD logo" className="logo" />
        <span className="logoText">LCKD</span>
      </div>

      {/* Titel */}
      <div className="titleSection">
        <h2>NEW SECURE</h2>
        <h2>CREDENTIALS</h2>
      </div>

      {/* Form */}
      <form className="newLckdForm">
        {/* WWW */}
        <label htmlFor="site">WWW</label>
        <input
          type="text"
          id="site"
          placeholder="www.tickster.com"
          className="inputField"
        />

        {/* USERNAME */}
        <label htmlFor="username">USERNAME</label>
        <input
          type="text"
          id="username"
          placeholder="sixten.svensson"
          className="inputField"
        />

        {/* PASSWORD */}
        <label htmlFor="password">SECURE PASSWORD</label>
        <div className="passwordBox">
          <input
            type="text"
            id="password"
            placeholder="H4kunam4t4t4!"
            className="inputField passwordInput"
          />
          <button type="button" className="refreshBtn">🔄</button>
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
      </form>
    </div>
  );
}
