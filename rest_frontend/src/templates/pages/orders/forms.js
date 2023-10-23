import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Forms = ({formSubmit, record}) => {
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [fields, setFields] = useState({
        user: record ? record.user : '',
        total_price: record ? record.total_price : '',
        payment: record ? record.payment : '',
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
        if (values.total_price === '') {
            errors.total_price = "Total Price should not be Empty";
        }
        if (values.payment === '') {
            errors.payment = "Payment Provider should not be Empty";
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
                               id="title"/>
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="total_price" className="form-label">Total Price</label>
                        <input type="text"
                               name="total_price"
                               onChange={handleChange}
                               value={fields.total_price}
                               className={`form-control ${errors.total_price ? 'is-invalid' : ''}`}
                               id="code"/>
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="payment" className="form-label">Payment Provider</label>
                        <input type="text"
                               name="payment"
                               onChange={handleChange}
                               value={fields.payment}
                               className={`form-control ${errors.payment ? 'is-invalid' : ''}`}
                               id="code"/>
                    </div>


                </div>
                <div className="d-grid gap-4 d-md-block">
                    <button className="btn btn-sm btn-success">Save</button>
                    <Link to='/orders/' style={{marginLeft: '5px'}} className="btn btn-sm btn-danger">Cancel</Link>
                </div>
            </form>

        </>
    );
}

export default Forms;