import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // 🔥 import css

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://topshine-backend.onrender.com/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) return setError(data.message || "Login failed");

      localStorage.setItem("token", data.token);

      // 🔥 back button safe
      window.location.replace("/dashboard");

    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">

        <h2>Admin Login</h2>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>

          {error && <p className="error-text">{error}</p>}

        </form>

      </div>
    </div>
  );
};

export default AdminLogin;