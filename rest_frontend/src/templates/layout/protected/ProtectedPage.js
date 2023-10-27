import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const ProtectedPage = ({children}) => {
    const {loggedIn} = useSelector(state => state.auth);

    if (loggedIn) {
        return children;
    } else {
        return <Navigate to='/login' replace/>
    }
}


export default ProtectedPage;