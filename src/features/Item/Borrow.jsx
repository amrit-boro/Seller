// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";

import { useState } from "react";

// function Borrow() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const username = useSelector((state) => state.user.username);
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     quantity: "",
//     returnDate: "",
//     remarks: "",
//   });
//   const x = location.state;
//   console.log(x);
//   const { name } = location.state || {};

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     // onSubmit(formData);
//     setShowModal(false);
//   };

//   return (
//     <>
//       <div className="modal-overlay">
//         <div className="modal-content">
//           <h2>Borrow Item</h2>

//           <label>Your Name</label>
//           <input type="text" name="name" value={username} readOnly />

//           <label>Item</label>
//           <input type="text" value={name} readOnly />

//           <label>Quantity</label>
//           <input
//             type="number"
//             name="quantity"
//             value={formData.quantity}
//             onChange={handleChange}
//           />

//           <label>Return Date</label>
//           <input
//             type="date"
//             name="returnDate"
//             value={formData.returnDate}
//             onChange={handleChange}
//           />

//           <label>Remarks (optional)</label>
//           <textarea
//             name="remarks"
//             value={formData.remarks}
//             onChange={handleChange}
//           ></textarea>

//           <div className="modal-buttons">
//             <button onClick={handleSubmit}>Submit</button>
//             <button onClick={() => navigate(-1)}>Cancel</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Borrow;

function Borrow() {
  const [formData, setFormData] = useState({
    fullName: "",
    userId: "",
    email: "",
    phoneNumber: "",
    organization: "",
    itemName: "",
    itemId: "",
    category: "",
    borrowDate: "",
    returnDate: "",
    purpose: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Borrow Request Submitted:", formData);
    // You can add validation or send data to a server here
  };

  return (
    <form style={styles.container} onSubmit={handleSubmit}>
      <h2 style={styles.heading}>Borrow Item Request</h2>

      <label style={styles.label}>Full Name</label>
      <input
        style={styles.input}
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        required
      />

      <label style={styles.label}>Email</label>
      <input
        style={styles.input}
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label style={styles.label}>Phone Number</label>
      <input
        style={styles.input}
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />

      <label style={styles.label}>Item Name</label>
      <input
        style={styles.input}
        type="text"
        name="itemName"
        value={formData.itemName}
        onChange={handleChange}
        required
      />

      <label style={styles.label}>Item ID</label>
      <input
        style={styles.input}
        type="text"
        name="itemId"
        value={formData.itemId}
        onChange={handleChange}
        required
      />

      {/* <label style={styles.label}>Category</label>
      <select
        style={styles.input}
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      >
        <option value="">Select Category</option>
        <option value="electronics">Electronics</option>
        <option value="books">Books</option>
        <option value="tools">Tools</option>
        <option value="others">Others</option>
      </select> */}

      <label style={styles.label}>Borrow Date</label>
      <input
        style={styles.input}
        type="date"
        name="borrowDate"
        value={formData.borrowDate}
        onChange={handleChange}
        required
      />

      <label style={styles.label}>Expected Return Date</label>
      <input
        style={styles.input}
        type="date"
        name="returnDate"
        value={formData.returnDate}
        onChange={handleChange}
        required
      />

      <label style={styles.label}>Purpose of Borrowing</label>
      <textarea
        style={styles.input}
        name="purpose"
        rows="3"
        value={formData.purpose}
        onChange={handleChange}
        placeholder="Describe purpose (optional)"
      />

      <div style={styles.checkboxContainer}>
        <input
          type="checkbox"
          name="agreeTerms"
          checked={formData.agreeTerms}
          onChange={handleChange}
          required
        />
        <label>I agree to the terms and conditions</label>
      </div>

      <button type="submit" style={styles.button}>
        Submit Request
      </button>
    </form>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "30px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  label: {
    display: "block",
    marginBottom: "6px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    boxSizing: "border-box",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007BFF",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  heading: {
    textAlign: "center",
    marginBottom: "25px",
  },
};

export default Borrow;
