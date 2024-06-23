import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { Toaster } from "react-hot-toast";
import { useUserContext } from "./context/UserContext";
import Footer from "./components/footer/Footer";
import { useMediaQuery } from "react-responsive";

function App() {
  const {user} = useUserContext();
  const isFooter68px = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <>
    {/* when screen width is <768px, footer automatically wraps into two lines having 132px height, so adjusted accordingly*/}
    <div className={`p-4 ${isFooter68px ? `h-[calc(100vh-68px)]` : `h-[calc(100vh-132px)]`}  flex justify-center items-center`}>
      {/* <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full bg-purple-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100"> */}

      <Routes>
        <Route path="/" element={!user ? <Navigate to={"/login"}/> :<HomePage />} />
        <Route path="/login" element={user ? <Navigate to={"/"}/> :<LoginPage />} />
        <Route path="/signup" element={user ? <Navigate to={"/"}/> : <SignupPage />} />
      </Routes>

      {/* </div>
      </div> */}
      <Toaster/>
      
    </div>
      <Footer />
    </>
  );
}

export default App;
