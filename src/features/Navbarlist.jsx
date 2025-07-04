import { useDispatch, useSelector } from "react-redux";
import { updateSearchName } from "./searchSlice";
import { useNavigate } from "react-router-dom";

function Navbarlist({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchname = useSelector((state) => state.search.searchName);

  function handleToggle() {
    dispatch(updateSearchName(item));
    navigate(`/search?name=${item}`);
  }

  return (
    <>
      <div className="nav-items2" onClick={handleToggle}>
        {item}
      </div>
    </>
  );
}

export default Navbarlist;
