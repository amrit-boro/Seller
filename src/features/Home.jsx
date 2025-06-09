import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/normaluser");
  }
  return (
    <>
      <div className="main-content">
        <div className="grid-container">
          <div className="grid-item">
            <img
              onClick={handleClick}
              src="https://gwapiwzfmrxxdvfysqbo.supabase.co/storage/v1/object/sign/item-images/badminton.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84MzdmZWRhMy00Y2QzLTQ0ZGMtYWE4OC01MTNmYWU4ZDNiZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpdGVtLWltYWdlcy9iYWRtaW50b24uanBlZyIsImlhdCI6MTc0OTM5NDk3NSwiZXhwIjoxNzgwOTMwOTc1fQ.4UEvCVcJ1QNT59VdXZf3ailBGREoH1f8IOWaGty-oCg"
              alt=""
            />
            <p>BADMINTON</p>
          </div>
          <div className="grid-item">
            <img src="/src/assets/None.png" alt="" />
            <p>FootBall</p>
          </div>
          <div className="grid-item">
            <img src="/src/assets/None.png" alt="" />
            <p>Tools</p>
          </div>
          <div className="grid-item">
            <img src="/src/assets/None.png" alt="" />
            <p>Shuttle</p>
          </div>
          <div className="grid-item">
            <img src="/src/assets/None.png" alt="" />
            <p>Piano</p>
          </div>
          <div className="grid-item">
            <img src="/src/assets/None.png" alt="" />
            <p>Bag</p>
          </div>
          <div className="grid-item">
            <img src="/src/assets/None.png" alt="" />
            <p>Watch</p>
          </div>
          <div className="grid-item">
            <img src="/src/assets/None.png" alt="" />
            <p>Dumble</p>
          </div>
          <div className="grid-item">
            <img src="/src/assets/None.png" alt="" />
            <p>Mechanical Tools</p>
          </div>
          <div className="grid-item">
            <img src="/src/assets/None.png" alt="" />
            <p>Camera</p>
          </div>
          <div className="grid-item">
            <img src="/src/assets/None.png" alt="" />
            <p>Kneif</p>
          </div>
          <div className="grid-item">
            <img src="/src/assets/None.png" alt="" />
            <p>Stand</p>
          </div>
          <div className="grid-item">
            <img src="/src/assets/None.png" alt="" />
            <p>Books</p>
          </div>
          <div className="grid-item">
            <img src="/src/assets/None.png" alt="" />
            <p>Mouse</p>
          </div>
          <div className="grid-item">
            <img src="/src/assets/None.png" alt="" />
            <p>Charger</p>
          </div>
          <div className="grid-item">
            <img src="/src/assets/None.png" alt="" />
            <p>Charger</p>
          </div>
          <div className="grid-item">
            <img src="/src/assets/None.png" alt="" />
            <p>Charger</p>
          </div>
          <div className="grid-item">
            <img src="/src/assets/None.png" alt="" />
            <p>Charger</p>
          </div>{" "}
          <div className="grid-item">
            <img src="/src/assets/None.png" alt="" />
            <p>Charger</p>
          </div>{" "}
          <div className="grid-item">
            <img src="/src/assets/None.png" alt="" />
            <p>Charger</p>
          </div>{" "}
          <div className="grid-item">
            <img src="/src/assets/None.png" alt="" />
            <p>Charger</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
