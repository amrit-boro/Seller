import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function Borrow() {
  const location = useLocation();
  const navigate = useNavigate();
  const username = useSelector((state) => state.user.username);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    returnDate: "",
    remarks: "",
  });
  const x = location.state;
  console.log(x);
  const { name } = location.state || {};

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // onSubmit(formData);
    setShowModal(false);
  };

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Borrow Item</h2>

          <label>Your Name</label>
          <input type="text" name="name" value={username} readOnly />

          <label>Item</label>
          <input type="text" value={name} readOnly />

          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />

          <label>Return Date</label>
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
          />

          <label>Remarks (optional)</label>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
          ></textarea>

          <div className="modal-buttons">
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={() => navigate(-1)}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Borrow;
