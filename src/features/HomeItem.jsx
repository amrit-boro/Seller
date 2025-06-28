import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSearchName } from "./searchSlice";

function HomeItem({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log("actual data coming from the databbase: ", data);

  const { name, img, id } = item;

  function handleClick() {
    dispatch(updateSearchName(name));

    navigate(`/${encodeURIComponent(name)}/${id}`);
  }

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p className="rating">{"⭐".repeat(4)}</p>
      <p className="price">$200</p>
      <button className="add-btn">Add to Cart</button>
    </div>
  );
}

export default HomeItem;
