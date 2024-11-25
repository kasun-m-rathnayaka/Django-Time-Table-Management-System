import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "./api";

function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    auth().catch(() => isAuthenticated(false));
  });

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem("refresh_token");
    try {
      const res = await api.post("/api/token/refresh", {
        refresh: refreshToken,
      });
      if (res.status === 200) {
        localStorage.setItem("access_token", res.data.access);
        setIsAuthenticated(true);
      }
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  const auth = async () => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      setIsAuthenticated(false);
      return;
    }
    const decorded = jwtDecode(token);
    if (decorded.exp * 1000 < Date.now()) {
      await refreshToken();
    } else {
      setIsAuthenticated(true);
    }

    if (isAuthenticated == null) {
      <div>Loading...</div>;
    }

    return isAuthenticated ? children : <Navigate to="/login" />;
  };
}
export default ProtectedRoute;
