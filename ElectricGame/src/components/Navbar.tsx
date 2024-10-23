// import react router
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>EG</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/games">Games</Link>
      </div>
    </nav>
  );
};

export default Navbar;
