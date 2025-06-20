import { useState } from "react";
import Profile from "./Profile";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import ProfileCreate from "./ProfileCreate";
import BecomeSellerLanding from "./BecomeSellerLanding";

function UserProfile() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm ? (
        <ProfileCreate />
      ) : (
        <BecomeSellerLanding onCreateProfile={() => setShowForm(true)} />
      )}
    </>
  );
}

export default UserProfile;
