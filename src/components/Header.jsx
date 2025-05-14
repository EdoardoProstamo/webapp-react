import { NavLink } from "react-router-dom";

const Header = () => {

    return <>

        <nav>
            <ul>
                <li>
                    <NavLink to="/">IMDb(oolean)</NavLink>
                </li>
            </ul>
        </nav>
    </>
};

export default Header;