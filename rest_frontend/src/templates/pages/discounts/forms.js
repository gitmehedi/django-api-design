import {Link} from "react-router-dom";
import {useEffect, useState} from "react";


const Forms = ({formSubmit, record}) => {
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [fields, setFields] = useState({
        name: record ? record.name : '',
        discount_percent: record ? record.discount_percent : '',
        description: record ? record.description : '',
        status: record ? record.status : true,
    });

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            formSubmit(fields);
        }
    }, [errors]);

    const validateFields = (values) => {
        let errors = {};
        if (values.name === '') {
            errors.name = "Name should not be Empty";
        }
        if (values.discount_percent === '') {
            errors.discount_percent = "Discount Percent should not be Empty";
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
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text"
                               name="name"
                               value={fields.name}
                               onChange={handleChange}
                               className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                               id="name"/>
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="discount_percent" className="form-label">Discount Percent</label>
                        <input type="text"
                               name="discount_percent"
                               onChange={handleChange}
                               value={fields.discount_percent}
                               className={`form-control ${errors.discount_percent ? 'is-invalid' : ''}`}
                               id="discount_percent"/>
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="description" className="form-label">Description </label>
                        <textarea name="description"
                                  onChange={handleChange}
                                  value={fields.description}
                                  className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                                  rows={3}/>
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