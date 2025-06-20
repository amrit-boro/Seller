import { useLocation } from "react-router-dom";
import AdBarr from "../advertisement/AdBarr";
import { useSelector } from "react-redux";
import ItemDetails from "../Item/ItemDettails";

function Profilee() {
  const location = useLocation();
  const username = useSelector((state) => state.user.username);

  const {
    name: itemName,
    img,
    SellerName,
    itemDescription,
    Location,
    discount,
  } = location.state; // here you get the full item passed

  // const itemAtIndex2 = items?.[2];

  return (
    <>
      <header className="top-bar2">
        <div className="logo2">ShopeZone</div>
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

      {/* Add */}
      <AdBarr itemName={itemName} discount={discount} />

      <ItemDetails
        img={img}
        SellerName={SellerName}
        itemDescription={itemDescription}
        Location={Location}
        itemName={itemName}
      />
    </>
  );
}

export default Profilee;
