import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSearchName } from "./searchSlice";

function HomeItem({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log("actual data coming from the databbase: ", data);

  const { name, price, images, _id } = item;

  function handleClick() {
    dispatch(updateSearchName(name));

    navigate(`/${encodeURIComponent(name)}/${_id}`);
  }

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={images} alt={name} />
      <h3>{name}</h3>
      <p className="rating">{"⭐".repeat(4)}</p>
      <p className="price">${price}</p>
      <button className="add-btn">Add to Cart</button>
    </div>
  );
}

export default HomeItem;
