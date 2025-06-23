import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ProfileCard = ({ item }) => {
  const {
    name: itemName,
    img,
    id,
    SellerName,
    itemDescription,
    Location,
  } = item;
  console.log("item Name: ", itemName);
  const [showBig, setShowBig] = useState(false);
  const navigate = useNavigate();

  function handleToggle() {
    setShowBig((prev) => !prev);
    navigate(`/${id}`, { state: item });
  }

  return (
    <div className="card-container">
      {/* Card Outer Wrapper */}
      <div className="profile-card2">
        {/* Image Secion */}
        <div>
          <img src={img} alt={itemName} className="profile-img2" />
        </div>

        {/* Info Section */}
        <div className="profile-info2">
          {/* Seller & Item Details */}
          <div>
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
            <button className="colorbrw" onClick={handleToggle}>
              More detail
            </button>
            <button className="borrow">Borrow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
