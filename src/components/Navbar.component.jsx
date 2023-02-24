import { Link, Outlet } from 'react-router-dom';
import './Navbar.styles.scss';

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="bar">
        <h1>Bookstore CMS</h1>
        <div className="links">
          <Link className="link" to="/">Book</Link>
          <Link className="link" to="categories">Categories</Link>
        </div>
      </div>
      <Outlet />
    </nav>
  );
}

export default Navbar;
