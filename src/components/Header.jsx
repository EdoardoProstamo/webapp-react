import { NavLink } from "react-router-dom";

const Header = () => {

    return <>
        <nav>
            <ul>
                <li>
                    <NavLink to="/movies/:id">Recensioni</NavLink>
                </li>
            </ul>
        </nav>
    </>
};

export default Header;