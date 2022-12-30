import { NavLink } from 'react-router-dom';

export default function Menu() {
    return <>
        <div className="container-md">
            <ul className="nav d-flex justify-content-between shadow-sm">
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">
                        HOME
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/log">
                        LOG
                    </NavLink>
                </li>
            </ul>
        </div>
    </>;
}