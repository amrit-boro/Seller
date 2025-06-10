import { Link } from "react-router-dom";
import SideBar from "./LeftNavBar";
import RightNavBar from "./RightNavBar";
import { useSelector } from "react-redux";
import User from "./SellerProfile/User";
import { useState } from "react";

function NavBar() {
  const username = useSelector((state) => state.user.username);
  const searName = useSelector((state) => state.search.searName);
  console.log(username);

  const [searchValue, setSearchValue] = useState("oo");
  function handleSearch(e) {
    e.preventDefault();

    setSearchValue(e.target.value);
  }

  return (
    <>
      <header className="top-bar2">
        <div className="logo2">Logo</div>
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            value={searName}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="SearchBar"
          />
          <button className="search-button">🔍</button>
        </div>
        <Link className="login-button-1" to={"/profile"}>
          Become a seller
        </Link>
        <Link className="login-button-1" to={"/login"}>
          {username ? <User username={username} /> : "Login"}
        </Link>
      </header>
      <div className="nav-bar2">
        <SideBar />
        <RightNavBar />
      </div>
    </>
  );
}

export default NavBar;
