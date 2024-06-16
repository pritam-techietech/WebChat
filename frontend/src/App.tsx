import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { Toaster } from "react-hot-toast";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="p-4 h-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Toaster/>
      
    </div>
  );
}

export default App;
