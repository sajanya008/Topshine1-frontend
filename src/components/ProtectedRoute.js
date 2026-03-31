import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.replace("/admin/login"); // replace history
    } else {
      setAuthorized(true);
    }
  }, [location]);

  if (!authorized) return null;
  return children;
};

export default ProtectedRoute;