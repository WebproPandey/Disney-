import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, user, isLoading } = useAuth0();
  if (isLoading) {
    return (
      <div className="h-screen  w-full text-white  text-[10vw]">Loading...</div>
    );
  }

  return (
    <>
      <div className="relative">
        <Header />

        <Routes>
          <Route path="/"  element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />
          <Route path="/home"  element={isAuthenticated ? <Home /> : <Navigate to="/" />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
