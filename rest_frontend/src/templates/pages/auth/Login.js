import {useEffect, useState} from 'react';
import {useThunk} from "src/hooks/useThunk";
import {checkAuthUser} from "src/store";

const Login = ({loginCheck}) => {
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [fields, setFields] = useState({
        username: '',
        password: ''
    });

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            loginCheck(fields);
        }
    }, [errors]);

    const handleChange = (evt) => {
        setFields({...fields, [evt.target.name]: evt.target.value});
    }

    const validateFields = (values) => {
        let errors = {};
        if (values.username === '') {
            errors.username = 'Username is required';
        }
        if (values.password === '') {
            errors.password = 'Password is required';
        }
        return errors;

    }

    const handleLogin = (evt) => {
        evt.preventDefault();
        setErrors(validateFields(fields));
        setSubmitting(true);
    }

    return (<>
        <>
            <form onSubmit={handleLogin} className="pt-5">
                <div className="form-outline mb-4">
                    <input type="text"
                           name="username"
                           value={fields.username}
                           onChange={handleChange}
                           placeholder="username"
                           className={`form-control ${errors.username ? 'is-invalid' : ''}`}/>
                    {errors && errors.username}
                </div>


                <div className="form-outline mb-3">
                    <input type="password"
                           name="password"
                           value={fields.password}
                           onChange={handleChange}
                           placeholder="password"
                           className={`form-control ${errors.password ? 'is-invalid' : ''}`}/>
                    {errors && errors.password}
                </div>


                <div className="d-flex justify-content-between align-items-center">

                    <div className="form-check mb-0">
                        <input className="form-check-input me-2" type="checkbox" value=""
                               id="form2Example3"/>
                        <label className="form-check-label" htmlFor="form2Example3">
                            Remember me
                        </label>
                    </div>
                    <a href="#!" className="text-body">Forgot password?</a>
                </div>


                <div className="form-outline text-center mb-3 pt-4">
                    <button type="submit" className="btn btn-success btn-block"
                            style={{paddingLeft: '12rem', paddingRight: '11rem'}}>Login
                    </button>
                </div>
            </form>
        </>
    </>);
}
export {Login};