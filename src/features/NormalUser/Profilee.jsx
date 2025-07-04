import { Link, useLocation, useParams } from "react-router-dom";
import AdBarr from "../advertisement/AdBarr";
import { useDispatch, useSelector } from "react-redux";
import ItemDetails from "../Item/ItemDettails";
import Navbarlist from "../Navbarlist";
import { useItems } from "../../hooks/useItems";
import { useEffect, useState } from "react";
import { updateSearchName } from "../searchSlice";
// import axios from "axios";

function Profilee() {
  const location = useLocation();
  const dispatch = useDispatch();
  const searchName = useSelector((state) => state.search.searchName);
  // const { data: items, isLoading } = useItems();
  const navlist = ["Badminton", "Bag", "Power Bank", "Scissor"];

  const username = useSelector((state) => state.user.username);
  const { itemName, images, SellerName, description, Location, id } =
    location.state;

  return (
    <>
      <header className="top-bar2">
        <Link
          className="logo2"
          to={"/"}
          onClick={() => dispatch(updateSearchName(""))}
        >
          ShopeZone
        </Link>
        <div className="search-container">
          <input
            type="text"
            value={searchName}
            onChange={(e) => dispatch(updateSearchName(e.target.value))}
          />
          <button className="search-button">🔍</button>
        </div>
        <div className="account2">
          Hello,{username}
          <br />
        </div>
      </header>

      <nav className="nav-bar2">
        <button className="nav-all2">= All</button>

        {navlist.map((item) => (
          <Navbarlist item={item} key={item.length} />
        ))}
      </nav>

      {/* Add */}
      {/* <AdBarr itemName={itemName} discount={10} /> */}

      <ItemDetails
        images={images}
        SellerName={SellerName}
        description={description}
        Location={Location}
        itemName={itemName}
        id={id}
      />
    </>
  );
}

export default Profilee;
