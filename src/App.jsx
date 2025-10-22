import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import LoginPage from "./pages/loginPage/LoginPage";
import SignupPage from "./pages/signupPage/SignupPage";
import MyStoredPasswords from "./pages/myStoredPasswords/MyStoredPasswords";
import NewLckdPage from "./pages/newLckdPage/NewLckdPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/mystoredpasswords" element={<MyStoredPasswords />} />
          <Route path="/newlckd" element={<NewLckdPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
