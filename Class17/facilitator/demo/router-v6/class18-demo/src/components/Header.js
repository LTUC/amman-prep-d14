import { Link } from "react-router-dom";


function Header() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </>
    )
}

export default Header;