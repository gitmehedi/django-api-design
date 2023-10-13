import {Link, Route} from 'react-router-dom';

const Navigation = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand" href="#"><Link to='/' className="nav-link">Lean Exam</Link></span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to='/dashboard' className="nav-link">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/category/' className="nav-link">Category</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/inventory/' className="nav-link">Inventory</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/session/' className="nav-link">Sessions</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/products/' className="nav-link">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/payments/' className="nav-link">Payments</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/orders/' className="nav-link">Orders</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/discounts/' className="nav-link">Discounts</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/carts/' className="nav-link">Carts</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/user-payment/' className="nav-link">User Payments</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/user-address/' className="nav-link">User Address</Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navigation;