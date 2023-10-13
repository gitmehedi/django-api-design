import Content from './Content';
import Footer from './Footer';
import Navigation from './Navigation';
import RoutePath from './RoutePath';
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className='container'>
            <Navigation/>
            <RoutePath/>
            <Footer/>

        </div>
    );
};

export default Layout;