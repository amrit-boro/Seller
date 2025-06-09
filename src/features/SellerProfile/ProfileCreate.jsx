import { useState } from "react";

function ProfileCreate() {
  const [gender, setGender] = useState("");

  function handleGender(e) {
    e.preventDefault();
    setGender(e.target.value);
  }
  return (
    <div>
      <form>
        <div>
          <label style={{ fontWeight: "bold" }}>Name: </label>
          <input className="input-box" type="text" />
        </div>
        <div>
          <label style={{ fontWeight: "bold" }}>Email </label>
          <input className="input-box" type="text" />
        </div>
        <div>
          <label style={{ fontWeight: "bold" }}>Phone Number: </label>
          <input className="input-box" type="tel" />
        </div>
        <div>
          <label style={{ fontWeight: "bold" }}>Address1: </label>
          <input className="input-box" type="text" />
        </div>
        <div>
          <label style={{ fontWeight: "bold" }}>Alt ph no: </label>
          <input className="input-box" type="text" />
        </div>

        <div>
          <span style={{ fontWeight: "bold" }}>Gender: </span>
          <label>
            <input
              type="radio"
              value="Male"
              onChange={handleGender}
              checked={gender == "Male"}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="Female"
              onChange={handleGender}
              checked={gender == "Female"}
            />
            Female
          </label>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default ProfileCreate;
