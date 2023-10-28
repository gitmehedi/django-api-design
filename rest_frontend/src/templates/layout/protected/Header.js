import {Link, useNavigate} from "react-router-dom";
import {logoutUser} from "src/store";
import {useThunk} from "src/hooks/useThunk";
import {useSelector} from "react-redux";
import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js';

const Header = () => {
    const navigate = useNavigate();
    const [doLogoutUser] = useThunk(logoutUser);
    const {loggedIn} = useSelector(state => state.auth);
    const handleLogout = (evt) => {
        evt.preventDefault();
        doLogoutUser();
        if (!loggedIn) {
            navigate('/login');
        }
    }
    return (
        <>
            <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
                <Link to='/dashboard'
                      className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white">LeanMonk</Link>

                <ul className="navbar-nav flex-row d-md-none">
                    <li className="nav-item text-nowrap">
                        <button className="nav-link px-3 text-white" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSearch" aria-controls="navbarSearch" aria-expanded="false"
                                aria-label="Toggle search">
                        </button>
                    </li>
                    <li className="nav-item text-nowrap">
                        <button className="nav-link px-3 text-white" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
                                aria-label="Toggle navigation">
                        </button>
                    </li>
                </ul>

                <div>
                    <div className="dropdown" style={{marginRight: `70px`}}>
                        <a className="dropdown-toggle col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#"
                           id="navbarDropdownMenuLink"
                           role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img
                                src="https://avatars.githubusercontent.com/u/3753206?v=4"
                                width="40" height="40" className="rounded-circle"/>
                        </a>
                        <ul className="">
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link to='/profile' className="dropdown-item">Edit Profile</Link>
                                <Link to='/logout' className="dropdown-item" onClick={handleLogout}>Logout</Link>
                            </div>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;