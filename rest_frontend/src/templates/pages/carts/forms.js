import {Link} from "react-router-dom";
import {useEffect, useState} from "react";


const Forms = ({formSubmit, record}) => {
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [fields, setFields] = useState({
        product: record ? record.product : '',
        session: record ? record.session : '',
        quantity: record ? record.quantity : ''
    });

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            formSubmit(fields);
        }
    }, [errors]);

    const validateFields = (values) => {
        let errors = {};
        if (values.product === '') {
            errors.product = "Product should not be Empty";
        }
        if (values.session === '') {
            errors.session = "Product should not be Empty";
        }
        if (values.quantity === '') {
            errors.quantity = "Quantity should not be Empty";
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
                        <label htmlFor="product" className="form-label">Product</label>
                        <input type="text"
                               name="product"
                               value={fields.product}
                               onChange={handleChange}
                               className={`form-control ${errors.product ? 'is-invalid' : ''}`}
                               id="product"/>
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="session" className="form-label">Session</label>
                        <input type="text"
                               name="session"
                               onChange={handleChange}
                               value={fields.session}
                               className={`form-control ${errors.session ? 'is-invalid' : ''}`}
                               id="session"/>
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="quantity" className="form-label">Quantity</label>
                        <input type="text"
                               name="quantity"
                               onChange={handleChange}
                               value={fields.quantity}
                               className={`form-control ${errors.quantity ? 'is-invalid' : ''}`}
                               id="quantity"/>
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