import { getItems } from "../../services/apiItems";
import ProfileCard from "./ProfileCard";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

function NormalUser() {
  const { isLoading, data: items } = useQuery({
    queryKey: ["items"],
    queryFn: getItems,
  });

  const username = useSelector((state) => state.user.username);

  return (
    <>
      <header className="top-bar2">
        <div className="logo2">Logo</div>
        <div className="search-container">
          <input type="text" className="search-bar" placeholder="charger" />
          <button className="search-button">🔍</button>
        </div>
        <div className="account2">
          Hello, {username}
          <br />
          <Link to={"/"}>Home</Link>
        </div>
      </header>

      <nav className="nav-bar2">
        <button className="nav-all2">= All</button>
        <div className="nav-items2">Items</div>
      </nav>

      {isLoading ? (
        "loading..."
      ) : (
        <main className="grid-container2">
          {items.map((item) => (
            <ProfileCard item={item} key={item.id} />
          ))}
        </main>
      )}
    </>
  );
}

export default NormalUser;
