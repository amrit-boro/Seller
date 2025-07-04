import React from "react";
import SellerProducts from "./SellerProducts";
import { Link } from "react-router-dom";
import LogInLink from "../authentication/LogInLink";
import { BsPersonCircle } from "react-icons/bs";

const categories = ["Electronics", "Clothing", "Home", "Toys", "Books"];

const Profile = ({ seller }) => {
  return (
    <>
      <header className="top-bar2">
        {/* <div className="logo2">ShopeZone</div> */}
        <Link className="logo2" to={"/"}>
          ShopZone
        </Link>

        <div className="header-buttons">
          {/* Seller */}

          <button className="cart-btn-1">🛒 Cart</button>
        </div>
      </header>

      <div style={styles.container}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <div style={styles.profileSection}>
            <div style={styles.avatar}></div>
            <p>{seller?.name || "User Name"}</p>
            <p>⭐ {seller?.rating || "4.5"}</p>
          </div>
          <div style={styles.sidebarButtons}>
            <button>Edit Profile</button>
            <button>Orders</button>
            <button>Add Product</button>
          </div>
        </div>

        {/* Main Content */}
        <div style={styles.mainContent}>
          {/* Navbar */}
          <div style={styles.navbar}>
            {categories.map((cat, index) => (
              <div key={index} style={styles.navItem}>
                {cat}
              </div>
            ))}
            <div style={{ marginLeft: "auto", cursor: "pointer" }}>☰</div>
          </div>

          {/* Product Grid */}
          <SellerProducts />
        </div>
      </div>
    </>
  );
};

// Basic inline styles (for simplicity)
const styles = {
  body: {
    margin: 0,
    padding: 0,
  },
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  sidebar: {
    width: "70vh",
    borderRight: "1px solid #ccc",
    padding: "20px",
    boxSizing: "border-box",
  },
  profileSection: {
    textAlign: "center",
    marginBottom: "20px",
  },
  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "gray",
    margin: "0 auto 10px",
  },
  sidebarButtons: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  mainContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  navbar: {
    display: "flex",
    borderBottom: "1px solid #ccc",
    padding: "10px 20px",
    alignItems: "center",
    gap: "15px",
    backgroundColor: "rgb(231 222 222)",
  },
  navItem: {
    padding: "6px 12px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  productCard: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
  },
  imagePlaceholder: {
    width: "100%",
    height: "120px",
    backgroundColor: "#aaa",
    borderRadius: "4px",
    marginBottom: "10px",
  },
};

export default Profile;
