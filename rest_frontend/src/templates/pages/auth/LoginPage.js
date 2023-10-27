import {useThunk} from "src/hooks/useThunk";
import {checkAuthUser} from "src/store";
import {Login} from "./Login";
import {useNavigate} from "react-router-dom";
import Register from "./Register";
import SideSection from "./SideSection";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";


const LoginPage = () => {
    const navigate = useNavigate();
    const [doCheckUser, isLoading, isError] = useThunk(checkAuthUser);
    const {loggedIn} = useSelector(state => state.auth);

    const formSubmit = (credential) => {
        doCheckUser(credential);
        navigate('/');
    }

    if (loggedIn) {
        return <Navigate to='/' replace/>;
    }

    return (
        <>
            <div>
                <section className="vh-100">
                    <div className="container-fluid h-custom">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <SideSection/>
                            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link active" id="tab-login" data-mdb-toggle="pill"
                                           href="#pills-login" role="tab"
                                           aria-controls="pills-login" aria-selected="true">Login</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="tab-register" data-mdb-toggle="pill"
                                           href="#pills-register" role="tab"
                                           aria-controls="pills-register" aria-selected="false">Register</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="pills-login" role="tabpanel"
                                         aria-labelledby="tab-login">
                                        <Login loginCheck={formSubmit}/>
                                    </div>
                                    <div className="tab-pane fade" id="pills-register" role="tabpanel"
                                         aria-labelledby="tab-register">
                                        <Register/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>);
}

export default LoginPage;