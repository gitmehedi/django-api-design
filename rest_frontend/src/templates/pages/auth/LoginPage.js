import {useThunk} from "src/hooks/useThunk";
import {checkAuthUser} from "src/store";
import {Login} from "./Login";
import {useNavigate} from "react-router-dom";
import Register from "./Register";
import SideSection from "./SideSection";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {useState} from "react";


const LoginPage = () => {
    const navigate = useNavigate();
    const [doCheckUser, isLoading, isError] = useThunk(checkAuthUser);
    const {loggedIn} = useSelector(state => state.auth);
    const [register, setRegister] = useState(false)

    const formSubmit = (credential) => {
        doCheckUser(credential);
        navigate('/');
    }

    if (loggedIn) {
        return <Navigate to='/' replace/>;
    }

    const handleRegister = (evt) => {
        evt.preventDefault();
        let value = evt.target.text;
        if (value === 'Login') {
            setRegister(false);
        } else {
            setRegister(true)
        }
    }

    return (
        <>
            <div style={{marginTop: `80px`}}>
                <section className="vh-100">
                    <div className="container-fluid h-custom">
                        <div className="row d-flex justify-content-center h-100">
                            <SideSection/>
                            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <a className={`nav-link  ${register ? 'inactive' : 'active'}`} id="tab-login"
                                           data-mdb-toggle="pill"
                                           href="#pills-login" role="tab" onClick={handleRegister}
                                           aria-controls="pills-login" aria-selected="true">Login</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className={`nav-link  ${register ? 'active' : 'inactive'}`} id="tab-register"
                                           data-mdb-toggle="pill"
                                           href="#pills-register" role="tab" onClick={handleRegister}
                                           aria-controls="pills-register" aria-selected="false">Register</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className={`tab-pane fade  ${register ? '' : 'active show'}`} id="pills-login"
                                         role="tabpanel"
                                         aria-labelledby="tab-login">
                                        <Login loginCheck={formSubmit}/>
                                    </div>
                                    <div className={`tab-pane fade  ${register ? 'active show' : ''}`}
                                         id="pills-register" role="tabpanel"
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