import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSearchName } from "./searchSlice";

function HomeItem({ item }) {
  const { name, img } = item;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick() {
    navigate("/normaluser");
    dispatch(updateSearchName(name));
  }

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={img} alt="img" />
      <h3>{name}</h3>
      <p className="rating">{"⭐".repeat(4)}</p>
      <p className="price">$200</p>
      <button className="add-btn">Add to Cart</button>
    </div>
  );
}

export default HomeItem;
