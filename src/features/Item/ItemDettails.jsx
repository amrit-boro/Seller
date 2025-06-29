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
        <div className="carousel">
          <button className="nav-arrow left">◀</button>
          <img src={img} alt="product" className="carousel-image" />
          <button className="nav-arrow right">▶</button>
        </div>

        {/* Right: Product details */}
        {/* <div className="product-details-panel">
          <div className="profile-avatar-box">
            <div
              style={{ fontSize: "2rem", cursor: "pointer" }}
              onClick={handleToggle}
            >
              <BsPersonCircle />
            </div>
            <div className="profile-name-tooltip">{SellerName}</div>
          </div>

          <h2>{itemName}</h2>
          <p>
            <strong>Seller:</strong> {SellerName}
          </p>
          <p>
            <strong>Description:</strong> {itemDescription}
          </p>
          <p>
            <strong>Location:</strong> {Location}
          </p>
          <button className="borrow-button" onClick={handleBorrow}>
            Borrow
          </button>
        </div> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
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
            <p className="visit-location">Delhi, India</p>
            <p className="visit-rating">
              ⭐ 4.7 <span>(128 reviews)</span>
            </p>

            <p>
              <strong>Email:</strong> jane@example.com
            </p>
            <p>
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p>
              <strong>Website:</strong> <a href="#">https://janestore.com</a>
            </p>

            <div className="visit-social-icons">
              <FaInstagram />
              <FaFacebook />
              <FaWhatsapp />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetails;
