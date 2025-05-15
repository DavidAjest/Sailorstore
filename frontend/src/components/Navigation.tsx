import { Link } from "react-router-dom";
import "../styles/Navigation.css";

export default function Navigation() {
  return (
    <nav className="topnav">
      <Link className="active" to="/">
        Home
      </Link>
      <Link to="/news">News</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/add-vessel">Add New Vessel</Link>
    </nav>
  );
}
