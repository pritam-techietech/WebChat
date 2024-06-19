import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { Toaster } from "react-hot-toast";
import { useUserContext } from "./context/UserContext";

function App() {
  const {user} = useUserContext();
  return (
    <div className="p-4 h-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={!user ? <Navigate to={"/login"}/> :<HomePage />} />
        <Route path="/login" element={user ? <Navigate to={"/"}/> :<LoginPage />} />
        <Route path="/signup" element={user ? <Navigate to={"/"}/> : <SignupPage />} />
      </Routes>
      <Toaster/>
      
    </div>
  );
}

export default App;
