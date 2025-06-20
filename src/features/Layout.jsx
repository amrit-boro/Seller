import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import AdBarr from "./advertisement/AdBarr";

function Layout() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <AdBarr />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
