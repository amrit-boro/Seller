import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import User from "./SellerProfile/User";
import { useItems } from "../hooks/useItems";
import Navbarlist from "./Navbarlist";
import { updateSearchName } from "./searchSlice";

function NavBar() {
  const username = useSelector((state) => state.user.username);
  const searchname = useSelector((state) => state.search.searchName);
  console.log(searchname);
  const { data: items, isLoading } = useItems();
  const dispatch = useDispatch();

  function handleSearch(e) {
    e.preventDefault();
    dispatch(updateSearchName(e.target.value));
  }

  return (
    <>
      <header className="top-bar2">
        <div className="logo2">ShopeZone</div>
        <div className="search-container">
          <input
            type="text"
            onChange={handleSearch}
            value={searchname}
            placeholder="Search for products..."
          />
          <button className="search-button">🔍</button>
        </div>

        <div className="header-buttons">
          <Link className="login-button-1" to={"/profile"}>
            Become a seller
          </Link>

          <Link className="login-button-1" to={"/login"}>
            {username ? <User username={username} /> : "Login / SignUp"}
          </Link>

          <button className="cart-btn-1">🛒 Cart</button>
        </div>
      </header>

      <nav className="nav-bar2">
        <button className="nav-all2">= All</button>

        {isLoading
          ? "loading"
          : items.map((item) => <Navbarlist item={item} key={item.id} />)}
      </nav>
    </>
  );
}

export default NavBar;
