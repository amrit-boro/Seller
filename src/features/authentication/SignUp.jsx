import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  function handleToggle(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Sign Up</h2>

        <label>Name</label>
        <input name="name" type="text" />

        <label>Email</label>
        <input name="email" type="email" />

        <label>Password</label>
        <input name="password" type="password" />

        <button type="submit" onClick={handleToggle}>
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignUp;
