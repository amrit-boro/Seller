import { useState } from "react";

function Home() {
  const [isBig, setIsBig] = useState(false);

  function handleClick() {
    setIsBig((prev) => !prev);
  }

  return (
    <>
      {isBig ? (
        <>
          <div onClick={handleClick} className="big-img-container">
            <img className="img" src="/src/assets/badminton.jpeg" />
            <p className="cross">✖</p>
          </div>
        </>
      ) : (
        <div className="main-content">
          <div className="grid-container">
            <div className="grid-item">
              <img
                onClick={handleClick}
                src="/src/assets/badminton.jpeg"
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
      )}
    </>
  );
}

export default Home;
