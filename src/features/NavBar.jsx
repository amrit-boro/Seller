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
      <header className="header1">
        <h1 className="logo1">ShopZone</h1>

        <div className="search-container-1">
          <input
            type="text"
            className="search-1"
            placeholder="Search for products..."
          />
          <span className="search-icon-1">🔍</span>
        </div>
        <div className="header-buttons">
          <Link className="login-button-1" to={"/profile"}>
            Become a seller
          </Link>

          <Link className="login-button-1" to={"/login"}>
            {username ? <User username={username} /> : "Login"}
          </Link>

          <button className="cart-btn-1">🛒 Cart</button>
        </div>
      </header>
      <nav className="nav">
        <ul>
          <li>Electronics</li>
          <li>Fashion</li>
          <li>Books</li>
          <li>Grocery</li>
          <li>Beauty</li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
