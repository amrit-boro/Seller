import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateName } from "./user/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/apiAuth";
import { Uselogin } from "../features/user/useLogin";

function Login() {
  useEffect(() => {
    // Add class to body only for login
    document.body.classList.add("login-body");

    // Cleanup when unmounting
    return () => {
      document.body.classList.remove("login-body");
    };
  }, []);

  const [fullName, SetfullName] = useState("amrit");
  const [email, setEmail] = useState("amrit@example.com");
  const [password, setPassword] = useState("amrit196");
  const dispatch = useDispatch();

  const { login, isLoading } = Uselogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName) return null;
    dispatch(updateName(fullName));

    if (!email || !password) return;
    login({ email, password });

    // navigate("/");
  };

  return (
    <div className="login-container">
      <h2>ShopZone</h2>
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
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            required
          />
        </div>

        <button type="submit" disabled={isLoading} className="login-button">
          {!isLoading ? "Log in " : "......"}
        </button>
      </form>

      <div className="footer-text">
        Don't have an account? <Link to={"/signup"}>Sign up</Link>
      </div>
    </div>
  );
}

export default Login;
