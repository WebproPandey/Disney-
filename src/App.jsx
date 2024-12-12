import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import { useAuth0 } from "@auth0/auth0-react";
import Details from "./components/Details";
import WatchList from "./components/WatchList";

function App() {
  const { isAuthenticated, user, isLoading } = useAuth0();
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen ">
      <div className="w-16 h-16 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
    </div>    );
  }

  return (
    <>
      <div className="relative">
        <Header />

        <Routes>
          <Route path="/"  element={isAuthenticated ? <Navigate to="/home" /> : <Login />}/>
          <Route path="/home"  element={isAuthenticated ? <Home /> : <Navigate to="/" />}/>
          <Route path="/detail/:id" element={<Details/>}/>
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
