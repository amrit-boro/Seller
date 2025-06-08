import { useNavigate } from "react-router-dom";

function User({ username }) {
  const navigate = useNavigate();

  function handleToggle(e) {
    e.preventDefault();
    navigate("/normaluser");
  }

  return <div onClick={handleToggle}>{username}</div>;
}

export default User;
