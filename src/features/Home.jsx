import { useNavigate } from "react-router-dom";
import { useItems } from "../hooks/useItems";
import { useDispatch } from "react-redux";
import { updateSearchName } from "./searchSlice";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick() {
    navigate("/normaluser");
    dispatch(updateSearchName(thirdItem.name));
  }

  const { data, isLoading } = useItems();
  const thirdItem = data?.[2];

  return (
    <>
      <div className="main-content">
        <div className="grid-container">
          <div className="grid-item">
            <img
              onClick={handleClick}
              src={isLoading ? "loading...." : thirdItem.img}
              alt=""
            />
            <p onClick={handleClick}>
              {isLoading ? "loading...." : thirdItem.name}
            </p>
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
