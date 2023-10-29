import React, {useState, useEffect} from "react";
import {registerUser} from "src/store";
import {TextField, EmailField, PasswordField} from "src/components/FormField";
import {useThunk} from "src/hooks/useThunk";
import {Link} from "react-router-dom";


function Register() {
    const [doRegisterUser, isLoading, isError] = useThunk(registerUser);
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [fields, setFields] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        repeat_password: ''
    });

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            doRegisterUser(fields);
        }
    }, [errors]);

    const validateFields = (values) => {
        let errors = {};
        if (values.first_name === '') {
            errors.first_name = 'Value should not be empty';
        }
        if (values.last_name === '') {
            errors.last_name = 'Value should not be empty';
        }
        if (values.username === '') {
            errors.username = 'Value should not be empty';
        }
        if (values.email === '') {
            errors.email = 'Value should not be empty';
        }
        if (values.password === '') {
            errors.password = 'Value should not be empty';
        }
        if (values.repeat_password === '') {
            errors.repeat_password = 'Value should not be empty';
        }
        return errors;
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setErrors(validateFields(fields));
        setSubmitting(true);
    }

    const handleChange = (evt) => {
        evt.preventDefault();
        setFields({...fields, [evt.target.name]: evt.target.value});
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="text-center mb-3">
                    <p>Sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                    </button>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                    </div>
                </div>

                <p className="text-center">OR:</p>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <TextField name='first_name'
                                   event={handleChange}
                                   value={fields.first_name}
                                   error={errors.first_name}
                                   lblText='First Name'/>
                    </div>
                    <div className="form-group col-md-6">
                        <TextField name='last_name'
                                   event={handleChange}
                                   value={fields.last_name}
                                   error={errors.last_name}
                                   lblText='Last Name'/>
                    </div>

                </div>

                <div className="form-outline mb-4">
                    <TextField name='username'
                               event={handleChange}
                               value={fields.username}
                               error={errors.username}/>
                </div>

                <div className="form-outline mb-4">
                    <EmailField name='email'
                                event={handleChange}
                                value={fields.email}
                                error={errors.email}/>
                </div>

                <div className="form-outline mb-4">
                    <PasswordField name='password'
                                   event={handleChange}
                                   value={fields.password}
                                   error={errors.password}/>
                </div>

                <div className="form-outline mb-4">
                    <PasswordField name='repeat_password'
                                   event={handleChange}
                                   value={fields.repeat_password}
                                   error={errors.repeat_password}
                                   lblText="Repeat Password"/>
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                    <input className="form-check-input me-2" type="checkbox" value=""
                           id="registerCheck" checked aria-describedby="registerCheckHelpText"/>
                    <label className="form-check-label" htmlFor="registerCheck">
                        I have read and agree to the terms
                    </label>
                </div>

                <div className="d-grid gap-4 d-md-block">
                    <button className="btn btn-sm btn-success">Register</button>
                    <Link to='/login/' style={{marginLeft: '5px'}} className="btn btn-sm btn-danger">Cancel</Link>
                </div>
            </form>
        </>
);
}

export default Register;