import ProfileCard from "./ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useItems } from "../../hooks/useItems";
import { updateSearchName } from "../searchSlice";
import AdBarr from "../advertisement/AdBarr";
import User from "../SellerProfile/User";
import LogInLink from "../authentication/LogInLink";

function NormalUser() {
  const dispatch = useDispatch();
  const { data: items, isLoading } = useItems();

  const searchName = useSelector((state) => state.search.searchName);
  const username = useSelector((state) => state.user.username);

  function handleSearch(e) {
    e.preventDefault();
    dispatch(updateSearchName(e.target.value));
  }

  return (
    <>
      <header className="top-bar2">
        <Link className="logo2" to={"/"}>
          ShopZone
        </Link>
        <div className="search-container">
          <input type="text" onChange={handleSearch} value={searchName} />
          <button className="search-button">🔍</button>
        </div>

        <LogInLink username={username} />
      </header>

      <nav className="nav-bar2">
        <button className="nav-all2">= All</button>
        <div className="nav-items2">Kesi</div>
        <div className="nav-items2">Tripod</div>
        <div className="nav-items2">Bag</div>
        <div className="nav-items2">Speaker</div>
        <div className="nav-items2">Mohmara</div>
        <div className="nav-items2">Badminton</div>
        <div className="nav-items2">Power Bank</div>
        <div className="nav-items2">Items</div>
        <div className="nav-items2">Items</div>
        <div className="nav-items2">Items</div>
        <div className="nav-items2">Items</div>
        <div className="nav-items2">Items</div>
      </nav>
      <AdBarr />

      {isLoading ? (
        "loading..."
      ) : (
        <main className="grid-container2">
          {items.map((item) => (
            <ProfileCard item={item} key={item.id} />
          ))}
        </main>
      )}

      {/* {isLoading ? "loading...." : <ProfileCard data={data} />} */}
    </>
  );
}

export default NormalUser;
