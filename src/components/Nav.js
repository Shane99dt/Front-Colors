import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav className="navbar">
        <Link className="home-link" to={"/"}>COLORS.</Link>
        <div>
        <Link to={"/Articles"}>Shop</Link>
        <Link to={"/Panier"}>Cart(1)</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
