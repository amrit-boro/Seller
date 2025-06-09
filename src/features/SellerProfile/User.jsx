function User({ username }) {
  function handleToggle(e) {
    e.preventDefault();
  }

  return <div onClick={handleToggle}>{username}</div>;
}

export default User;
