import { useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

function VisitProfile() {
  const [show, setShow] = useState();

  function handleToggle() {
    setShow((prev) => !prev);
  }

  const products = [
    {
      id: 1,
      name: "Electric Kettle",
      price: "₹1499",
      image: "https://source.unsplash.com/200x200/?kettle",
    },
    {
      id: 2,
      name: "LED Desk Lamp",
      price: "₹899",
      image: "https://source.unsplash.com/200x200/?lamp",
    },
    {
      id: 3,
      name: "Smart Watch",
      price: "₹2999",
      image: "https://source.unsplash.com/200x200/?smartwatch",
    },
    {
      id: 2,
      name: "LED Desk Lamp",
      price: "₹899",
      image: "https://source.unsplash.com/200x200/?lamp",
    },
    {
      id: 2,
      name: "LED Desk Lamp",
      price: "₹899",
      image: "https://source.unsplash.com/200x200/?lamp",
    },
    {
      id: 2,
      name: "LED Desk Lamp",
      price: "₹899",
      image: "https://source.unsplash.com/200x200/?lamp",
    },
    {
      id: 2,
      name: "LED Desk Lamp",
      price: "₹899",
      image: "https://source.unsplash.com/200x200/?lamp",
    },
    {
      id: 2,
      name: "LED Desk Lamp",
      price: "₹899",
      image: "https://source.unsplash.com/200x200/?lamp",
    },
    {
      id: 2,
      name: "LED Desk Lamp",
      price: "₹899",
      image: "https://source.unsplash.com/200x200/?lamp",
    },
    {
      id: 2,
      name: "LED Desk Lamp",
      price: "₹899",
      image: "https://source.unsplash.com/200x200/?lamp",
    },
    {
      id: 2,
      name: "LED Desk Lamp",
      price: "₹899",
      image: "https://source.unsplash.com/200x200/?lamp",
    },
    {
      id: 2,
      name: "LED Desk Lamp",
      price: "₹899",
      image: "https://source.unsplash.com/200x200/?lamp",
    },
    {
      id: 2,
      name: "LED Desk Lamp",
      price: "₹899",
      image: "https://source.unsplash.com/200x200/?lamp",
    },
    {
      id: 2,
      name: "LED Desk Lamp",
      price: "₹899",
      image: "https://source.unsplash.com/200x200/?lamp",
    },
    {
      id: 2,
      name: "LED Desk Lamp",
      price: "₹899",
      image: "https://source.unsplash.com/200x200/?lamp",
    },

    // Add more products...
  ];
  return (
    <>
      <div className="visit-page">
        <header className="visit-navbar">
          <span role="img" aria-label="cart">
            🛒
          </span>
          <h2>ShopZone</h2>
        </header>

        <div className="visit-main-content">
          <div className="visit-profile-card">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="visit-profile-img"
            />
            <h2>Jane Doe</h2>
            <p>
              I sell beautiful handmade crafts, kitchenware, and home
              accessories.
            </p>
            <p className="visit-location">
              Guwahati Amingaon Kalipahar jayguru
            </p>
            <p className="visit-rating">
              ⭐ 4.7 <span>(128 reviews)</span>
            </p>

            <p>
              <strong>Email:</strong> jane@example.com
            </p>
            <p>
              <strong>Phone:</strong> +91 98765 43210
            </p>

            <div>
              <div className="visit-social-icons">
                <div style={{ display: "flex", gap: "18px" }}>
                  <FaInstagram />
                  <FaFacebook />
                  <FaWhatsapp />
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>

          <div className="visit-product-section">
            <div className="visit-section-header">Products</div>
            <div className="visit-product-grid">
              {products.map((product) => (
                <div className="visit-product-card" key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p className="price">{product.price}</p>
                  <button>View Product</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisitProfile;
