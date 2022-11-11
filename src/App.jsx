import "./assets/scss/main.scss";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import { Loader } from "./components";
import { useSelector } from "react-redux";

const App = () => {
  const loader = useSelector((state) => state.loader.loader);
  document.body.style.overflow = "visible";
  return (
    <div className="App">
      {loader.state ? <Loader /> : <></>}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/editor"
            element={
              <ProtectedRoute>
                <Edit />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

export function ProtectedRoute(props) {
  if (localStorage.getItem("user")) {
    return props.children;
  } else {
    return <Navigate to="/" />;
  }
}
