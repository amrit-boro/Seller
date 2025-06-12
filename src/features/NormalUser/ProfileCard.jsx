import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";

const ProfileCard = ({ item }) => {
  const { name: itemName, img, SellerName, itemDescription, Location } = item;

  return (
    <div className="card-container">
      <div className="profile-card2">
        <img src={img} alt="Badminton" className="profile-img2" />
        <div className="profile-info2">
          <div>
            <div className="profile-name2">
              <BsPersonCircle />
              {SellerName}
            </div>
            <div className="profile-items2">
              Item Description: {itemDescription}
            </div>
            <div className="profile-items2">Location:{Location}</div>
            <div className="profile-items2">{itemName}</div>
          </div>
          <div className="profile-buttons">
            <button className="colorbrw">More detail</button>
            <button className="borrow">Borrow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
