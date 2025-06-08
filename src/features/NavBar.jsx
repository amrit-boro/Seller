import { Link } from "react-router-dom";
import SideBar from "./LeftNavBar";
import RightNavBar from "./RightNavBar";
import { useSelector } from "react-redux";
import User from "./SellerProfile/User";

function NavBar() {
  const username = useSelector((state) => state.user.username);
  console.log(username);

  return (
    <>
      <header>
        <div className="logo">Logo</div>
        <div className="search-container">
          <input type="text" placeholder="SearchBar" />
          <button>🔍</button>
        </div>
        <Link className="login-button-1" to={"/profile"}>
          Become a seller
        </Link>
        <Link className="login-button-1" to={"/login"}>
          {username ? <User username={username} /> : "Login"}
        </Link>
      </header>
      <div className="nav-container">
        <SideBar />
        <RightNavBar />
      </div>
    </>
  );
}

export default NavBar;
