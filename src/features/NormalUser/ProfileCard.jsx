import { useState } from "react";

const ProfileCard = ({ item }) => {
  const { name, img } = item;

  return (
    <div className="profile-card2">
      <img className="profile-img2" src={img} />
      <div className="profile-info2">
        <div className="profile-name2">Profile 1</div>
        <div className="profile-items2">Borrow / Item:- </div>
        <div>{name}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
