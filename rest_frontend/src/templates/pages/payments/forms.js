import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {TextField, NumberField,DropdownField} from "src/components/FormField";


const Forms = ({formSubmit, record}) => {
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [fields, setFields] = useState({
        provider: record ? record.provider : '',
        amount: record ? record.amount : '',
        status: record ? record.status : true,
    });

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            formSubmit(fields);
        }
    }, [errors]);

    const validateFields = (values) => {
        let errors = {};
        if (values.provider === '') {
            errors.provider = "Provider should not be Empty";
        }
        if (values.amount === '') {
            errors.amount = "Code should not be Empty";
        }
        return errors;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateFields(fields));
        setSubmitting(true);
    }

    const handleChange = (e) => {
        setFields({...fields, [e.target.name]: e.target.value});
    };

    return (
        <>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className='col-md-6'>
                    <div className="col-md-12">
                        <TextField name="provider"
                                   event={handleChange}
                                   value={fields.provider}
                                   error={errors.provider}/>
                    </div>

                    <div className="col-md-12">
                        <NumberField name="amount"
                                     event={handleChange}
                                     value={fields.amount}
                                     error={errors.amount}/>
                    </div>
                    <div className="col-md-12">
                        <DropdownField name="user"
                                     event={handleChange}
                                     value={fields.user}
                                     error={errors.user}/>
                    </div>

                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="status"
                                   name="status"
                                   value={fields.status}
                                   onClick={handleChange}
                            />
                            <label className="form-check-label" htmlFor="status">Status</label>
                        </div>
                    </div>
                </div>
                <div className="d-grid gap-4 d-md-block">
                    <button className="btn btn-sm btn-success">Save</button>
                    <Link to='/category/' style={{marginLeft: '5px'}} className="btn btn-sm btn-danger">Cancel</Link>
                </div>
            </form>

        </>
    );
}

export default Forms;