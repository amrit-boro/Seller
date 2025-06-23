import ProfileCard from "./ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useItems } from "../../hooks/useItems";
import { updateSearchName } from "../searchSlice";
import AdBarr from "../advertisement/AdBarr";
import LogInLink from "../authentication/LogInLink";
import Navbarlist from "../Navbarlist";
import CardSkeleton from "./CardSkeleton";

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

        {isLoading
          ? "loading"
          : items.map((item) => <Navbarlist item={item} key={item.id} />)}
      </nav>

      <AdBarr />

      <main className="grid-container2">
        {isLoading ? (
          <CardSkeleton card={9} />
        ) : (
          items.map((item) => <ProfileCard item={item} key={item.id} />)
        )}
      </main>
    </>
  );
}

export default NormalUser;
