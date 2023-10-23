import {Link, Route} from 'react-router-dom';

const Navigation = () => {

    return (
        <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
            <div className="offcanvas-md offcanvas-end bg-body-tertiary" tabIndex="-1" id="sidebarMenu"
                 aria-labelledby="sidebarMenuLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                            data-bs-target="#sidebarMenu" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to='/dashboard'
                                  className="nav-link d-flex align-items-center gap-2 active">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/orders/' className="nav-link d-flex align-items-center gap-2">Orders</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/carts/' className="nav-link d-flex align-items-center gap-2">Carts</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/session/' className="nav-link d-flex align-items-center gap-2">Sessions</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/products/' className="nav-link d-flex align-items-center gap-2">Products</Link>
                        </li>
                    </ul>

                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                        <span>Saved reports</span>
                        <a className="link-secondary" href="#" aria-label="Add a new report"></a>
                    </h6>
                    <ul className="nav flex-column mb-auto">
                        <li className="nav-item">
                            <Link to='/category/' className="nav-link d-flex align-items-center gap-2">Category</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/inventory/' className="nav-link d-flex align-items-center gap-2">Inventory</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/user/payments/'
                                  className="nav-link d-flex align-items-center gap-2">User Payments</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/user/address/'
                                  className="nav-link d-flex align-items-center gap-2">User Address</Link>
                        </li>
                    </ul>

                    <hr className="my-3"/>

                    <ul className="nav flex-column mb-auto">
                        <li className="nav-item">
                            <Link to='/discounts/' className="nav-link d-flex align-items-center gap-2">Discounts</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/payments/' className="nav-link d-flex align-items-center gap-2">Payments</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        //     <span className="navbar-brand" href="#"><Link to='/' className="nav-link">Lean Exam</Link></span>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        //             aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarNavDropdown">
        //         <ul className="navbar-nav">
        //             <li className="nav-item active">
        //
        //             </li>
        //             <li className="nav-item">
        //                 <Link to='/category/' className="nav-link" replace>Category</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to='/inventory/' className="nav-link">Inventory</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to='/session/' className="nav-link">Sessions</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to='/products/' className="nav-link">Products</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to='/payments/' className="nav-link">Payments</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to='/orders/' className="nav-link">Orders</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to='/discounts/' className="nav-link">Discounts</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to='/carts/' className="nav-link">Carts</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to='/user-payment/' className="nav-link">User Payments</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to='/user-address/' className="nav-link">User Address</Link>
        //             </li>
        //
        //         </ul>
        //     </div>
        // </nav>
    );
};

export default Navigation;