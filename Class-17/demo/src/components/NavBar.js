import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <h1>NavBar</h1>
      <Link to="/">Home</Link><br />
      <Link to="/about">About</Link><br />
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
export default NavBar;
