import { BsPersonCircle } from "react-icons/bs";

function ItemDetails({ img, SellerName, itemDescription, Location, itemName }) {
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
          <div style={{ fontSize: "2rem" }}>
            <BsPersonCircle />
          </div>
          <div className="profile-name-tooltip">{SellerName}</div>
        </div>

        <h2>Bag</h2>
        <p>
          <strong>Seller:</strong> {SellerName}
        </p>
        <p>
          <strong>Description:</strong> {itemDescription}
        </p>
        <p>
          <strong>Location:</strong> {Location}
        </p>
        <button className="borrow-button">Borrow</button>
      </div>
    </div>
  );
}

export default ItemDetails;
