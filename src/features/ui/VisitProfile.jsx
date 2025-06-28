import { useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
const sellers = [
  {
    name: "Jane Doe",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    location: "Delhi, India",
    email: "jane@example.com",
    phone: "+91 98765 43210",
    website: "https://janestore.com",
    social: {
      instagram: "https://instagram.com/janedoe",
      facebook: "https://facebook.com/janedoe",
      whatsapp: "https://wa.me/919876543210",
      linkedin: "https://linkedin.com/in/janedoe",
    },
    rating: 4.7,
    reviews: 128,
    bio: "I sell beautiful handmade crafts, kitchenware, and home accessories.",
    products: [
      {
        id: 1,
        name: "Electric Kettle",
        price: "₹1499",
        image: "https://via.placeholder.com/200?text=Kettle",
      },
      {
        id: 2,
        name: "LED Desk Lamp",
        price: "₹899",
        image: "https://via.placeholder.com/200?text=Lamp",
      },
      {
        id: 3,
        name: "Smart Watch",
        price: "₹2999",
        image: "https://via.placeholder.com/200?text=Watch",
      },
      {
        id: 3,
        name: "Smart Watch",
        price: "₹2999",
        image: "https://via.placeholder.com/200?text=Watch",
      },
      {
        id: 3,
        name: "Smart Watch",
        price: "₹2999",
        image: "https://via.placeholder.com/200?text=Watch",
      },
      {
        id: 3,
        name: "Smart Watch",
        price: "₹2999",
        image: "https://via.placeholder.com/200?text=Watch",
      },
      {
        id: 3,
        name: "Smart Watch",
        price: "₹2999",
        image: "https://via.placeholder.com/200?text=Watch",
      },
      {
        id: 3,
        name: "Smart Watch",
        price: "₹2999",
        image: "https://via.placeholder.com/200?text=Watch",
      },
      {
        id: 3,
        name: "Smart Watch",
        price: "₹2999",
        image: "https://via.placeholder.com/200?text=Watch",
      },
      {
        id: 3,
        name: "Smart Watch",
        price: "₹2999",
        image: "https://via.placeholder.com/200?text=Watch",
      },
      {
        id: 3,
        name: "Smart Watch",
        price: "₹2999",
        image: "https://via.placeholder.com/200?text=Watch",
      },
      {
        id: 3,
        name: "Smart Watch",
        price: "₹2999",
        image: "https://source.unsplash.com/200x200/?smartwatch",
      },
      {
        id: 3,
        name: "Smart Watch",
        price: "₹2999",
        image: "https://via.placeholder.com/200?text=Watch",
      },
    ],
  },
];

function VisitProfile() {
  const [seller, setSeller] = useState(sellers[0]);

  return (
    <div style={styles.wrapper}>
      <div style={styles.mainLayout}>
        {/* Profile Left */}
        <div style={styles.profileBox}>
          <img src={seller.photo} alt={seller.name} style={styles.profileImg} />
          <div style={styles.infoBox}>
            <h2 style={styles.name}>{seller.name}</h2>
            <p style={styles.bio}>{seller.bio}</p>
            <p style={styles.location}>{seller.location}</p>
            <div style={styles.rating}>
              <span style={styles.star}>★</span>
              <span>{seller.rating}</span>
              <span style={styles.reviewCount}>({seller.reviews} reviews)</span>
            </div>
            <div style={styles.contact}>
              <p>
                <strong>Email:</strong> {seller.email}
              </p>
              <p>
                <strong>Phone:</strong> {seller.phone}
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a
                  href={seller.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  {seller.website}
                </a>
              </p>
            </div>
            <div style={styles.socialLinks}>
              <a
                href={seller.social.instagram}
                target="_blank"
                rel="noreferrer"
                style={styles.iconLink}
              >
                <FaInstagram />
              </a>
              <a
                href={seller.social.facebook}
                target="_blank"
                rel="noreferrer"
                style={styles.iconLink}
              >
                <FaFacebook />
              </a>
              <a
                href={seller.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                style={styles.iconLink}
              >
                <FaWhatsapp />
              </a>
              <a
                href={seller.social.linkedin}
                target="_blank"
                rel="noreferrer"
                style={styles.iconLink}
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Products Right */}
        <div style={styles.productSection}>
          <h3 style={styles.sectionTitle}>Products</h3>
          <div style={styles.productGrid}>
            {seller.products.map((product) => (
              <div key={product.id} style={styles.productCard}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={styles.productImage}
                />
                <h4>{product.name}</h4>
                <p style={styles.price}>{product.price}</p>
                <button style={styles.button}>View Product</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    padding: "40px 20px",
  },
  randomButton: {
    backgroundColor: "#444",
    color: "#fff",
    padding: "10px 20px",
    marginBottom: "20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  mainLayout: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },

  profileBox: {
    width: "100%",
    maxWidth: "800px",
    margin: "auto",
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "20px",
    borderRadius: "12px",
    display: "flex",
    gap: "20px",
  },
  profileImg: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    border: "4px solid #6c63ff",
    objectFit: "cover",
    marginBottom: "10px",
  },
  infoBox: {},
  name: {
    fontSize: "26px",
    marginBottom: "5px",
  },
  bio: {
    fontSize: "15px",
    color: "#555",
  },
  location: {
    color: "#888",
    fontSize: "14px",
    marginBottom: "8px",
  },
  rating: {
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
    gap: "5px",
    marginBottom: "10px",
  },
  star: {
    color: "gold",
    fontSize: "18px",
  },
  reviewCount: {
    color: "#888",
    fontSize: "14px",
  },
  contact: {
    fontSize: "14px",
    lineHeight: "1.6",
    marginBottom: "10px",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
  socialLinks: {
    display: "flex",
    gap: "12px",
    fontSize: "20px",
    marginTop: "10px",
  },
  iconLink: {
    color: "#6c63ff",
    textDecoration: "none",
    transition: "0.3s",
  },
  productSection: {
    width: "100%",
    maxWidth: "1200px",
    margin: "auto",
  },

  sectionTitle: {
    fontSize: "22px",
    marginBottom: "20px",
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  productCard: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  productImage: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  price: {
    fontWeight: "bold",
    color: "#28a745", // ✅ Bootstrap green / clean green
    margin: "8px 0",
  },
  button: {
    backgroundColor: "rgb(255 157 59)",
    color: "#fff",
    padding: "8px 12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default VisitProfile;
