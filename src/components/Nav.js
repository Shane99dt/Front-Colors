/* eslint-disable react-hooks/exhaustive-deps */

// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({length}) => {

//   const [cartQuantity,setCartQuantity] =useState(0)

//   useEffect(() => {
//     Count()
// }, []);

//   const Count = ()=>{
//     if (localStorage.articlesID){
//     setCartQuantity(JSON.parse(localStorage.getItem("articlesID")).length)
//     }
//   }

  return (
    <header>
      <nav className="navbar">
        <Link className="home-link" to={"/"}>COLORS.</Link>
        <div>
        <Link to={"/Articles"}>Shop</Link>
        <Link to={"/Panier"}>Cart({length})</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
