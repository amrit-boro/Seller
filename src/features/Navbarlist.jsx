import { useDispatch } from "react-redux";
import { updateSearchName } from "./searchSlice";
import { useNavigate } from "react-router-dom";

function Navbarlist({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleToggle(e) {
    e.preventDefault();
    dispatch(updateSearchName(name));
    navigate("/normaluser");
  }

  const { name } = item;

  return (
    <>
      <div className="nav-items2" onClick={handleToggle}>
        {name}
      </div>
    </>
  );
}

export default Navbarlist;
