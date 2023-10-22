import Container from './Container';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import RoutePath from './RoutePath';
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header/>
            <Container/>
            <Footer/>
        </>
    );
};

export default Layout;