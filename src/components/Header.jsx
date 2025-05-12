import { NavLink } from "react-router-dom";

const Header = () => {

    return <>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Lista film</NavLink>
                </li>
            </ul>
        </nav>
    </>
};

export default Header;