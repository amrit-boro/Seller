import { BsPersonCircle } from "react-icons/bs";
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
    <div className="product-preview-container">
      {/* Left: Image carousel */}
      <div className="carousel">
        <button className="nav-arrow left">◀</button>
        <img src={img} alt="product" className="carousel-image" />
        <button className="nav-arrow right">▶</button>
      </div>

      {/* Right: Product details */}
      <div className="product-details-panel">
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
      </div>
    </div>
  );
}

export default ItemDetails;
