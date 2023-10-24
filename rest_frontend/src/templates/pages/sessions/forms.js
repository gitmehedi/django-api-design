import {Link} from "react-router-dom";
import {useEffect, useState} from "react";


const Forms = ({formSubmit, record}) => {
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [fields, setFields] = useState({
        user: record ? record.user : '',
        total: record ? record.total : '',
        status: record ? record.status : true,
    });

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            formSubmit(fields);
        }
    }, [errors]);

    const validateFields = (values) => {
        let errors = {};
        if (values.user === '') {
            errors.user = "User should not be Empty";
        }
        if (values.total === '') {
            errors.total = "Total should not be Empty";
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
                        <label htmlFor="user" className="form-label">User</label>
                        <input type="text"
                               name="user"
                               value={fields.user}
                               onChange={handleChange}
                               className={`form-control ${errors.user ? 'is-invalid' : ''}`}
                               id="user"/>
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="total" className="form-label">Total</label>
                        <input type="number"
                               name="total"
                               onChange={handleChange}
                               value={fields.total}
                               className={`form-control ${errors.total ? 'is-invalid' : ''}`}
                               id="total"/>
                    </div>

                    <div className="col-12">
                        <div className="form-check">
                            <input type="checkbox"
                                   className="form-check-input"
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
                    <Link to='/session/' style={{marginLeft: '5px'}} className="btn btn-sm btn-danger">Cancel</Link>
                </div>
            </form>

        </>
    );
}

export default Forms;