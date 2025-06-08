import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateName } from "./user/userSlice";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  useEffect(() => {
    // Add class to body only for login
    document.body.classList.add("login-body");

    // Cleanup when unmounting
    return () => {
      document.body.classList.remove("login-body");
    };
  }, []);

  const [fullName, SetfullName] = useState("Amrit");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName) return null;
    dispatch(updateName(fullName));

    navigate("/");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            value={fullName}
            onChange={(e) => SetfullName(e.target.value)}
            type="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      <div className="footer-text">
        Don't have an account? <Link to={"/signup"}>Sign up</Link>
      </div>
    </div>
  );
}

export default Login;
