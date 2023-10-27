import {useSelector} from "react-redux";
import Protected from "./protected/Protected";
import Public from "./public/Public";

const Layout = () => {
    const {loggedIn} = useSelector(state => state.auth);

    return (
        <>
            {loggedIn ? <Protected/> : <Public/>}
        </>
    );
};

export default Layout;