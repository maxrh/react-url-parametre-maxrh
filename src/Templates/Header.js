import { Link } from "react-router-dom";

const Header = () => {

    return (

        <header>
            <nav className="navigation">
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/destinations"}>Destinations</Link>
            </nav>
        </header>

     );
}

export default Header;