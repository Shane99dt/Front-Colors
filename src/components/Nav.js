import { Link } from "react-router-dom"

const Nav = () =>{
    return(
        <header>
            <nav className="flex g-30 p-10 b-b">
                <Link to={'/'}>Home</Link>
                <Link to={'/Articles'}>Articles</Link>
                <Link to={'/Panier'}>Panier</Link>

            </nav>
        </header>
    )
}

export default Nav