import ProfileCard from "./ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { useItems } from "../../hooks/useItems";
import { updateSearchName } from "../searchSlice";
import AdBarr from "../advertisement/AdBarr";
import LogInLink from "../authentication/LogInLink";
import Navbarlist from "../Navbarlist";
import CardSkeleton from "./CardSkeleton";
import { useProducts, useSeeProducts } from "../user/useProduct";

function NormalUser() {
  const dispatch = useDispatch();
  const searchname = useSelector((state) => state.search.searchName);
  const { data, isLoading, isError } = useProducts();
  // const { name } = useParams();
  // console.log(name);
  // const searchTerm = location.state;
  const { data: searchProductsRaw } = useSeeProducts(searchname);
  console.log("searchTerm: ", searchname);
  const searchProducts = searchProductsRaw?.data?.products || [];
  const navlist = ["Badminton", "Bag", "Power Bank", "Scissor"];

  const products = data?.data?.products || [];
  console.log(searchProducts);

  // const { data: items, isLoading } = useItems();

  const searchName = useSelector((state) => state.search.searchName);
  const username = useSelector((state) => state.user.username);
  function handleSearch(e) {
    e.preventDefault();
    dispatch(updateSearchName(e.target.value));
  }

  return (
    <>
      <header className="top-bar2">
        <Link
          className="logo2"
          to={"/"}
          onClick={() => dispatch(updateSearchName(""))}
        >
          ShopZone
        </Link>
        <div className="search-container">
          <input type="text" onChange={handleSearch} value={searchName} />
          <button className="search-button">🔍</button>
        </div>

        <Link className="login-button-1" to={"/profile"}>
          Become a seller
        </Link>

        <LogInLink username={username} />
      </header>

      <nav className="nav-bar2">
        <button className="nav-all2">= All</button>

        {navlist.map((item) => (
          <Navbarlist item={item} key={item.length} />
        ))}
      </nav>

      <AdBarr />

      <main className="grid-container2">
        {isLoading ? (
          <CardSkeleton card={9} key={9} />
        ) : (
          searchProducts.map((item) => (
            <ProfileCard item={item} key={item._id} />
          ))
        )}
      </main>
    </>
  );
}

export default NormalUser;
