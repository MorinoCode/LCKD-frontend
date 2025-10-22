import "./MyStoredPasswords.css";
import logo from '../../assets/pictures/Logo.svg'

export default function MyStoredPasswords() {
  const passwords = [
    "www.google.com",
    "www.facebook.com",
    "www.twitter.com",
    "www.kommunikar.se",
    "www.illuminati.org",
  ];

  return (
    <div className="storedPage">
      {/* Logo */}
      <div className="topLogo">
        <img src={logo} alt="LCKD logo" className="logo" />
        <span className="logoText">LCKD</span>
      </div>

      {/* Stored passwords */}
      <div className="storedPasswords">
        <span className="sectionTitle">STORED PASSWORDS</span>

        <div className="passwordList">
          {passwords.map((site, index) => (
            <div className="passwordItem" key={index}>
              <span className="site">{site}</span>
              <div className="icons">
                <button className="editBtn">✏️</button>
                <button className="viewBtn">👁️</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Plain sight password */}
      <div className="plainBox">
        <span className="plainLabel">PLAIN SIGHT</span>
        <div className="plainInput">
          <span className="passwordText">Abv34$]dff4s@ff</span>
          <button className="copyBtn">📋</button>
        </div>
      </div>

      {/* Button */}
      <button className="newLckdBtn">NEW LCKD</button>
    </div>
  );
}
