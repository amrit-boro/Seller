import { Link, useLocation } from "react-router-dom";
import AdBarr from "../advertisement/AdBarr";
import { useSelector } from "react-redux";
import ItemDetails from "../Item/ItemDettails";
import Navbarlist from "../Navbarlist";
import { useItems } from "../../hooks/useItems";

function Profilee() {
  const location = useLocation();
  const { data: items, isLoading } = useItems();
  const username = useSelector((state) => state.user.username);
  const { itemName, img, SellerName, itemDescription, Location, id } =
    location.state;

  // const {
  //   name: itemName,
  //   img,
  //   SellerName,
  //   itemDescription,
  //   Location,
  //   discount,
  // } = location.state;
  // here you get the full item passed

  // const itemAtIndex2 = items?.[2];

  return (
    <>
      <header className="top-bar2">
        <Link className="logo2" to={"/"}>
          ShopeZone
        </Link>
        <div className="search-container">
          <input type="text" />
          <button className="search-button">🔍</button>
        </div>
        <div className="account2">
          Hello,{username}
          <br />
        </div>
      </header>

      <nav className="nav-bar2">
        <button className="nav-all2">= All</button>

        {isLoading
          ? "loading"
          : items.map((item) => <Navbarlist item={item} key={item.id} />)}
      </nav>

      {/* Add */}
      {/* <AdBarr itemName={itemName} discount={10} /> */}

      <ItemDetails
        img={img}
        SellerName={SellerName}
        itemDescription={itemDescription}
        Location={Location}
        itemName={itemName}
        id={id}
      />
    </>
  );
}

export default Profilee;
