import { useState } from "react";
import Profile from "./Profile";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import ProfileCreate from "./ProfileCreate";

function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  function handleToggle(e) {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  }
  function handleCreate() {
    setIsCreating((prev) => !prev);
  }

  return (
    <>
      {isOpen ? (
        ""
      ) : (
        <>
          <div className="body-profile">
            <div className="sidebar-profile">
              <div style={{ fontSize: "50px", color: "#555" }}>
                <BsPersonCircle />
              </div>
              <p>Username</p>
              <h3
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "blue",
                }}
                onClick={handleCreate}
              >
                {isCreating ? "" : "Create your own profile"}
              </h3>

              {isCreating ? <ProfileCreate /> : ""}

              <div className="details-profile">
                <hr
                  style={{ width: "66vh", border: "1px solid rgb(73, 70, 70)" }}
                />
                <p>All about location, behaviour</p>
                <p>dkjlfjlkdsfjsdjfl</p>
                <p>kdfjlksdfjldskfjsd</p>
                <p>jkldsjlfkj</p>
              </div>
              <button onClick={handleToggle}>Submit</button>
            </div>
          </div>
        </>
      )}{" "}
      {isOpen ? <Profile /> : ""}
    </>
  );
}

export default UserProfile;
