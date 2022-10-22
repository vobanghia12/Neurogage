import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";


const Layout = () => {
  return (
    <>
      <Header/>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/User">User</Link>
          </li>
          <li>
            <Link to="/Admin">Admin</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;