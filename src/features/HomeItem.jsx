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
    <div className="grid-container">
      <div className="grid-item">
        <img onClick={handleClick} src={img} alt="" />
        <p onClick={handleClick}>{name}</p>
      </div>
    </div>
  );
}

export default HomeItem;
