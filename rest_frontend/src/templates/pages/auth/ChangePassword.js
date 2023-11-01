import {PasswordField, SubmitButton} from "src/components/FormField";
import {changePassword} from "src/store";
import {useThunk} from "src/hooks/useThunk";
import {useEffect, useState} from "react";

const ChangePassword = () => {
    const [doChangePassword, isLoading, isError] = useThunk(changePassword);
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [fields, setFields] = useState({
        'password': '',
        'repeat_password': '',
        'old_password': '',
    });

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            doChangePassword(fields);
        }
    }, [errors])

    const validateFields = (values) => {
        const errors = {};
        if (values.password.length < 8) {
            errors['password'] = 'Password must be at least 8 characters';
        }
        if (values.repeat_password === '') {
            errors['repeat_password'] = 'Value should not be empty';
        }
        if (values.old_password === '') {
            errors['old_password'] = 'Value should not be empty';
        }

        return errors;
    }

    const handleChange = (evt) => {
        evt.preventDefault();
        setFields({...fields, [evt.target.name]: evt.target.value});
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setErrors(validateFields(fields));
        setSubmitting(true);
    }


    return (
        <>
            <h1>Change Password</h1>
            <form onSubmit={handleSubmit} className='row g3'>
                <div className="col-md-6">
                    <div className='col-md-12'>
                        <PasswordField name='password'
                                       event={handleChange}
                                       value={fields.password}
                                       error={errors.password}
                                       lblText='Password'/>
                    </div>
                    {errors.password}
                    <div className="progress" style={{marginTop: `10px`, display: `none`}}>
                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar"
                             style={{width: `100%`}}
                             aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <div className='col-md-12'>
                        <PasswordField name='repeat_password'
                                       event={handleChange}
                                       value={fields.repeat_password}
                                       error={errors.repeat_password}
                                       lblText='Repeat Password'/>
                    </div>

                    <div className='col-md-12'>
                        <PasswordField name='old_password'
                                       event={handleChange}
                                       value={fields.old_password}
                                       error={errors.old_password}
                                       lblText='Old Password'/>
                    </div>

                    <SubmitButton name='Submit' clink={'profile'}/>
                </div>
            </form>
        </>
    );
}
export default ChangePassword;