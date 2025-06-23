import { useDispatch } from "react-redux";
import { updateSearchName } from "./searchSlice";
import { useNavigate } from "react-router-dom";

function Navbarlist({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, id } = item;

  function handleToggle(e) {
    e.preventDefault();
    dispatch(updateSearchName(name));
    navigate(`/${encodeURIComponent(name)}/${id}`);
  }

  return (
    <>
      <div className="nav-items2" onClick={handleToggle}>
        {name}
      </div>
    </>
  );
}

export default Navbarlist;
