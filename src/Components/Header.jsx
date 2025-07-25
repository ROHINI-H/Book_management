import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

function Header() {
    const data = useContext(userContext);
    const cartItems = useSelector(store => store.cart.items);

    return (
        <div className="header">
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
                <li>{data.loggedInUser}</li>
                <li>{cartItems.length} items in cart</li>
            </ul>
        </div>
    )
}

export default Header;