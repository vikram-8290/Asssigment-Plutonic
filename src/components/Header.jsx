import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <Link to="/"><img src="https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg" alt="Logo" /></Link>
            </div>
            <div className="nav-bar">
                <ul>
                    <Link to="/" style={{ textDecoration: "none" , color: "white"}}><li>Home</li></Link>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>
                        <Link to="/cart">🛒</Link> {/* Link to Cart component */}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
