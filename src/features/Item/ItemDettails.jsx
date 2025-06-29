import { BsPersonCircle } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ItemDetails({
  img,
  SellerName,
  itemDescription,
  Location,
  itemName,
  id,
}) {
  const navigate = useNavigate();
  console.log("id: ", id);
  const isAuthenticate = useSelector((state) => state.user.isAuthenticate);

  function handleBorrow() {
    if (!isAuthenticate) {
      navigate("/login");
    } else {
      navigate(`/borrow/${id}`);
    }
  }

  function handleToggle() {
    navigate(`/profile/${SellerName}/${id}`, { state: SellerName });
  }

  return (
    <>
      <div className="product-preview-container">
        {/* Left: Image carousel */}

        <div style={{ display: "flex", gap: "3px" }}>
          <div className="carousel">
            <button className="nav-arrow left">◀</button>
            <img src={img} alt="product" className="carousel-image" />
            <button className="nav-arrow right">▶</button>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "43vh",
            }}
          >
            <div className="visit-profile-card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flex: "grow",
                }}
              >
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Profile"
                  className="visit-profile-img"
                />
                <h2
                  onClick={handleToggle}
                  style={{
                    backgroundColor: "#6c63ff",
                    color: "#fff",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    display: "inline-block",
                    fontSize: "18px",
                    height: "18px",
                    fontWeight: "bold",
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                    transition: "background 0.3s",
                  }}
                >
                  Profile
                </h2>
              </div>
              <h2>Jane Doe</h2>

              <p>
                I sell beautiful handmade crafts, kitchenware, and home
                accessories.
              </p>
              <p className="visit-location">
                Guwahati Amingoan kalipahar India
              </p>
              <p className="visit-rating">
                ⭐ 4.7 <span>(128 reviews)</span>
              </p>

              <p>
                <strong>Email:</strong> jane@example.com
              </p>
              <p>
                <strong>Phone:</strong> +91 98765 43210
              </p>

              <div className="visit-social-icons">
                <div style={{ display: "flex", gap: "10px" }}>
                  <FaInstagram />
                  <FaFacebook />
                  <FaWhatsapp />
                  <FaLinkedin />
                </div>
                {/* Borrow */}
                <div
                  style={{
                    backgroundColor: "#ffe600",
                    padding: "10px 20px",
                    fontWeight: "bold",
                    border: "4px",
                    color: "#676060",
                    fontSize: "18px",
                    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
                    borderRadius: "5px",
                    transition: "transform 0.2s ease",
                    cursor: "pointer",
                  }}
                  onClick={handleBorrow}
                >
                  Borrow
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-about">
          <h2>About this product</h2>
          <p>
            This sleek mechanical keyboard is designed for both gaming and
            productivity. Featuring tactile switches, customizable keycaps, and
            durable build quality, it's perfect for extended use. The braided
            cable ensures longevity, and the minimal design fits into any setup.
          </p>
        </div>
      </div>
    </>
  );
}

export default ItemDetails;
