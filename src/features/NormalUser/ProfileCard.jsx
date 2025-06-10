import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";

const ProfileCard = ({ item }) => {
  const { name, img, SellerName } = item;

  return (
    <div className="profile-card2">
      <img className="profile-img2" src={img} />
      <div className="profile-info2">
        <div className="profile-name2">
          {<BsPersonCircle />} {SellerName}
        </div>
        <div className="profile-items2">Borrow / Item:- </div>
        <div className="profile-items2">Borrow / Item:- </div>

        <div style={{ fontWeight: "bold" }}>{name}</div>
        <div className="borrow">Borrow</div>
      </div>
    </div>
  );
};

export default ProfileCard;
