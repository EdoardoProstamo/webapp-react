import { NavLink } from "react-router-dom";

const Header = () => {

    return <>

        <nav>
            <ul>
                <li>
                    <NavLink to="/">Logo sito</NavLink>
                </li>
                <li>
                    <NavLink to="/movies/:id">Movies</NavLink>
                </li>
            </ul>
        </nav>
    </>
};

export default Header;