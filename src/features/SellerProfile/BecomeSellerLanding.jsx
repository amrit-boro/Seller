function BecomeSellerLanding({ onCreateProfile }) {
  return (
    <div className="containerStyle">
      <div className="cardStyle">
        <div className="iconStyle">👤</div>
        <h2 style={{ margin: "0 0 0.5rem" }}>Welcome Seller</h2>
        <p style={{ marginBottom: "1rem", color: "#666" }}>
          Build your business with us. Create your seller profile to get
          started.
        </p>
        <button onClick={onCreateProfile} className="buttonStyle">
          Create Your Seller Profile
        </button>
      </div>
    </div>
  );
}

export default BecomeSellerLanding;
