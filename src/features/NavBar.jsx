import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useItems } from "../hooks/useItems";
import Navbarlist from "./Navbarlist";
import { updateSearchName } from "./searchSlice";
import { BsPersonCircle } from "react-icons/bs";
import LogInLink from "./authentication/LogInLink";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
        {/* <div className="logo2">ShopeZone</div> */}
        <Link className="logo2" to={"/"}>
          ShopZone
        </Link>
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
          {/* Seller */}
          <Link className="login-button-1" to={"/profile"}>
            Become a seller
          </Link>

          <div style={{ display: "flex" }}>
            <div style={{ paddingTop: "3px" }}>
              <BsPersonCircle size={25} color="#555" />
            </div>
            <LogInLink username={username} />
          </div>

          <button className="cart-btn-1">🛒 Cart</button>
        </div>
      </header>

      <nav className="nav-bar2">
        <button className="nav-all2">= All</button>

        {isLoading ? (
          <Skeleton width={80} height={20} />
        ) : (
          items.map((item) => <Navbarlist item={item} key={item.id} />)
        )}
      </nav>
    </>
  );
}

export default NavBar;
