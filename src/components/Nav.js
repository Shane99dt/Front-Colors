import { Link } from "react-router-dom"

const Nav = () =>{
    return(
        <header>
            <nav className="flex g-30 p-10 b-b">
                <Link to={'/'}>Home</Link>
                <Link to={'/Articles'}>Shop</Link>
                <Link to={'/Panier'}>Cart(1)</Link>

            </nav>
        </header>
    )
}

export default Nav