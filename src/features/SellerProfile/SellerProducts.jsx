function SellerProducts() {
  return (
    <div style={styles.grid}>
      <div style={styles.productCard}>
        <img
          src="https://via.placeholder.com/150"
          alt="Product"
          style={styles.productImg}
        />
        <h4>Wireless Earbuds</h4>
        <p>₹1,299</p>
        <button>View</button>
      </div>

      <div style={styles.productCard}>
        <img
          src="https://via.placeholder.com/150"
          alt="Product"
          style={styles.productImg}
        />
        <h4>Wireless Earbuds</h4>
        <p>₹1,299</p>
        <button>View</button>
      </div>

      <div style={styles.productCard}>
        <img
          src="https://via.placeholder.com/150"
          alt="Product"
          style={styles.productImg}
        />
        <h4>Wireless Earbuds</h4>
        <p>₹1,299</p>
        <button>View</button>
      </div>

      <div style={styles.productCard}>
        <img
          src="https://via.placeholder.com/150"
          alt="Product"
          style={styles.productImg}
        />
        <h4>Wireless Earbuds</h4>
        <p>₹1,299</p>
        <button>View</button>
      </div>

      <div style={styles.productCard}>
        <img
          src="https://via.placeholder.com/150"
          alt="Product"
          style={styles.productImg}
        />
        <h4>Wireless Earbuds</h4>
        <p>₹1,299</p>
        <button>View</button>
      </div>

      <div style={styles.productCard}>
        <img
          src="https://via.placeholder.com/150"
          alt="Product"
          style={styles.productImg}
        />
        <h4>Wireless Earbuds</h4>
        <p>₹1,299</p>
        <button>View</button>
      </div>

      <div style={styles.productCard}>
        <img
          src="https://via.placeholder.com/150"
          alt="Product"
          style={styles.productImg}
        />
        <h4>Wireless Earbuds</h4>
        <p>₹1,299</p>
        <button>View</button>
      </div>
      <div style={styles.productCard}>
        <img
          src="https://via.placeholder.com/150"
          alt="Product"
          style={styles.productImg}
        />
        <h4>Wireless Earbuds</h4>
        <p>₹1,299</p>
        <button>View</button>
      </div>
      <div style={styles.productCard}>
        <img
          src="https://via.placeholder.com/150"
          alt="Product"
          style={styles.productImg}
        />
        <h4>Wireless Earbuds</h4>
        <p>₹1,299</p>
        <button>View</button>
      </div>
      <div style={styles.productCard}>
        <img
          src="https://via.placeholder.com/150"
          alt="Product"
          style={styles.productImg}
        />
        <h4>Wireless Earbuds</h4>
        <p>₹1,299</p>
        <button>View</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  sidebar: {
    width: "60vh",
    borderRight: "1px solid #ccc",
    padding: "20px",
    boxSizing: "border-box",
  },
  profileSection: {
    textAlign: "center",
    marginBottom: "20px",
  },
  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "gray",
    margin: "0 auto 10px",
  },
  sidebarButtons: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  mainContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  navbar: {
    display: "flex",
    borderBottom: "1px solid #ccc",
    padding: "10px 20px",
    alignItems: "center",
    gap: "15px",
    backgroundColor: "#f9f9f9",
  },
  navItem: {
    padding: "6px 12px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  productCard: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
  },
  imagePlaceholder: {
    width: "100%",
    height: "120px",
    backgroundColor: "#aaa",
    borderRadius: "4px",
    marginBottom: "10px",
  },
};

export default SellerProducts;
