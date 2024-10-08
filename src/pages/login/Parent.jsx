import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setIsLoggedIn, setIsSigningUp }) => {
  const [form, setForm] = useState({ name: "", password: "", checkbox: true });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.password) {
      setError("Please enter both name and password.");
      toast.error("Please enter both name and password.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      return;
    } else {
      setError(null);
      toast.success("Welcome back!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div>
      <div className="login--page">
        <div className="login--text">
          <h2>Welcome Back Parent!</h2>
          <p>Please login to your account</p>
        </div>
        <br />
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Username <span>*</span>
            </label>
            <br />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <label>
              Password: <span>*</span>
            </label>
            <br />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
        <br />
          <button type="submit" className="login--btn">Login</button>
        </form>
        <br />
        <div className="recover--container">
          <div className="remember">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              checked={form.checkbox}
              onChange={handleChange}
            />
            <label htmlFor="checkbox">Remember Me</label>
          </div>
          <Link to="/recover">Forgot Password?</Link>
        </div>
        <br />
        <p className="sign--up">
          Don't have an account? <Link>sign up</Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
