import { useState } from "react";
import Profile from "./Profile";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import ProfileCreate from "./ProfileCreate";
import BecomeSellerLanding from "./BecomeSellerLanding";

function UserProfile() {
  const [showForm, setShowForm] = useState(false);

  function handleToggle(e) {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  }
  function handleCreate() {
    setIsCreating((prev) => !prev);
  }

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
