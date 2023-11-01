import {TextField, EmailField, SubmitButton} from "src/components/FormField";
import {updateProfile, userProfile} from "src/store";
import {useThunk} from "src/hooks/useThunk";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const Profile = () => {
    const [doUserProfile, isLoading, isError] = useThunk(userProfile);
    const [doChangePassword] = useThunk(updateProfile);
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const {profile} = useSelector(state => state.auth);


    const [fields, setFields] = useState({
        'first_name': profile.first_name || '',
        'last_name': profile.last_name || '',
        'username': profile.username || '',
        'email': profile.email || '',
    });

    useEffect(() => {
        doUserProfile();
    }, []);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            doChangePassword(fields);
        }
    }, [errors])

    const validateFields = (values) => {
        const errors = {};
        if (values.first_name === '') {
            errors['first_name'] = 'Value should not be empty';
        }
        if (values.last_name === '') {
            errors['last_name'] = 'Value should not be empty';
        }
        if (values.username === '') {
            errors['username'] = 'Value should not be empty';
        }
        if (values.email === '') {
            errors['email'] = 'Value should not be empty';
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
            <h1>Update Profile</h1>
            <form onSubmit={handleSubmit} className='row g3'>
                <div className="col-md-6">
                    <div className='col-md-12'>
                        <TextField name='first_name'
                                   event={handleChange}
                                   value={fields.first_name}
                                   error={errors.first_name}
                                   lblText='First Name'/>
                    </div>
                    <div className='col-md-12'>
                        <TextField name='last_name'
                                   event={handleChange}
                                   value={fields.last_name}
                                   error={errors.last_name}
                                   lblText='Last Name'/>
                    </div>
                    <div className='col-md-12'>
                        <TextField name='username'
                                   event={handleChange}
                                   value={fields.username}
                                   error={errors.username}
                                   lblText='Username'/>
                    </div>

                    <div className='col-md-12'>
                        <EmailField name='email'
                                    event={handleChange}
                                    value={fields.email}
                                    error={errors.email}
                                    lblText='Email'/>
                    </div>

                    <SubmitButton name='Submit' clink={'profile'}/>
                </div>
            </form>
        </>
    );
}
export default Profile;