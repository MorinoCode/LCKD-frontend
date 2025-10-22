import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import LoginPage from "./pages/loginPage/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
