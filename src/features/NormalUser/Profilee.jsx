import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import AdBarr from "../advertisement/AdBarr";
import { useSelector } from "react-redux";

function Profilee() {
  const location = useLocation();
  const username = useSelector((state) => state.user.username);
  const [show, setShowBig] = useState(false);

  const {
    name: itemName,
    img,
    SellerName,
    itemDescription,
    Location,
    discount,
  } = location.state; // here you get the full item passed

  // const itemAtIndex2 = items?.[2];

  function handleToggle() {
    setShowBig((prev) => !prev);
  }

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

      {show ? (
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Image Section */}
          <div style={{ position: "relative" }}>
            <img
              onClick={handleToggle}
              src={img}
              alt="Board"
              style={{
                width: show ? "60vh" : "60vh",
                height: show ? "80vh" : "60vh",
                cursor: "pointer",
                transition: "0.3s ease-in-out",
                zIndex: 2,
                position: "relative",
              }}
            />
          </div>

          {/* Info Section */}
          <div
            style={{
              opacity: show ? 0.3 : 1,
              transition: "0.3s ease-in-out",
              zIndex: 1,
            }}
          >
            <h3>
              <span role="img" aria-label="user">
                👤
              </span>{" "}
              Mrinal
            </h3>
            <p>Item Description: good</p>
            <p>Location: Maligaon</p>
            <strong>Board</strong>
            <div style={{ marginTop: "10px" }}>
              <button
                style={{
                  backgroundColor: "#FFA500",
                  padding: "5px 10px",
                  border: "none",
                  color: "white",
                  borderRadius: "5px",
                  marginRight: "10px",
                }}
              >
                More detail
              </button>
              <button
                style={{
                  backgroundColor: "yellow",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Borrow
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card-container">
          <div className="profile-card2">
            <div className="profile-image-section">
              <img
                onClick={handleToggle}
                src={img}
                alt="Badminton"
                className="profile-img2"
              />
            </div>

            <div className="profile-info2">
              <div className="profile-details">
                <div className="profile-name2">
                  <BsPersonCircle />
                  {SellerName}
                </div>
                <div className="profile-items2">
                  Item Description: {itemDescription}
                </div>
                <div className="profile-items2">Location: {Location}</div>
                <div style={{ fontWeight: "bold" }}>{itemName}</div>
              </div>

              {/* Buttons */}
              <div className="profile-buttons">
                <button className="colorbrw">More detail</button>
                <button className="borrow">Borrow</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profilee;
