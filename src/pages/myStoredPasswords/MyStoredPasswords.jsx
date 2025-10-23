import "./MyStoredPasswords.css";
import logo from "../../assets/pictures/Logo.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyStoredPasswords() {
  const [passwords, setPasswords] = useState([]);
  const [selectedPassword, setSelectedPassword] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // ✅ Fetch passwords from backend
  useEffect(() => {
    const fetchPasswords = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const res = await fetch("https://lckd-backend-dev.onrender.com/api/passwords", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch passwords");

        const data = await res.json();
        setPasswords(data);
      } catch (err) {
        console.error(err);
        setMessage("❌ Failed to load passwords.");
      }
    };

    fetchPasswords();
  }, [navigate]);

  const handleViewPassword = (pwd) => {
    setSelectedPassword(pwd);
  };

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

        {passwords.length === 0 ? (
          <p className="noPasswords">No passwords stored yet.</p>
        ) : (
          <div className="passwordList">
            {passwords.map((item) => (
              <div className="passwordItem" key={item.id}>
                <span className="site">{item.site}</span>
                <div className="icons">
                  <button className="editBtn">✏️</button>
                  <button
                    className="viewBtn"
                    onClick={() => handleViewPassword(item.password)}
                  >
                    👁️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Plain sight password */}
      <div className="plainBox">
        <span className="plainLabel">PLAIN SIGHT</span>
        <div className="plainInput">
          <span className="passwordText">
            {selectedPassword || "Click 👁️ to view a password"}
          </span>
          <button
            className="copyBtn"
            onClick={() => {
              if (selectedPassword) {
                navigator.clipboard.writeText(selectedPassword);
                setMessage("✅ Password copied!");
              }
            }}
          >
            📋
          </button>
        </div>
      </div>

      {message && <p className="infoMessage">{message}</p>}

      {/* Button */}
      <button
        className="newLckdBtn"
        onClick={() => navigate("/newlckd")}
      >
        NEW LCKD
      </button>
    </div>
  );
}
