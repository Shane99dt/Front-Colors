import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Nav = () => {

  const [cartQuantity,setCartQuantity] = useState(0)

  const Count = () =>{
    let test
    const localArticlesIds= localStorage.getItem("articlesID")
    if(localArticlesIds){
      setCartQuantity(JSON.parse(test).length )
    }
     
  }

  useEffect(()=>{
    Count()
  },[])

  return (
    <header>
      <nav className="navbar">
        <Link className="home-link" to={"/"}>COLORS.</Link>
        <div>
        <Link to={"/Articles"}>Shop</Link>
        <Link to={"/Panier"}>Cart({cartQuantity})</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
