import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Layout() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
