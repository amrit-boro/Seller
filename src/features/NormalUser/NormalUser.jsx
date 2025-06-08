import { useEffect } from "react";
import { getItems } from "../../services/apiItems";

function NormalUser() {
  useEffect(function () {
    getItems().then((data) => console.log(data));
  }, []);

  return <div>normal</div>;
}

export default NormalUser;
