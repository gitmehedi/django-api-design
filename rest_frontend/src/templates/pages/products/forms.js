import {Link} from "react-router-dom";
import {useEffect, useState} from "react";


const Forms = ({formSubmit, record}) => {
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [fields, setFields] = useState({
        name: record ? record.name : '',
        sku: record ? record.sku : '',
        price: record ? record.price : '',
        category: record ? record.category : '',
        inventory: record ? record.inventory : '',
        discount: record ? record.discount : '',
        description: record ? record.description : '',
        status: record ? record.status : ''
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

        if (values.sku === '') {
            errors.sku = "SKU should not be Empty";
        }

        if (values.price === '') {
            errors.price = "Price should not be Empty";
        }

        if (values.category === '') {
            errors.category = "Category should not be Empty";
        }

        if (values.inventory === '') {
            errors.inventory = "Inventory should not be Empty";
        }

        if (values.discount === '') {
            errors.discount = "Discount should not be Empty";
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
                        <label htmlFor="sku" className="form-label">SKU</label>
                        <input type="text"
                               name="sku"
                               value={fields.sku}
                               onChange={handleChange}
                               className={`form-control ${errors.sku ? 'is-invalid' : ''}`}
                               id="name"/>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="text"
                               name="price"
                               value={fields.price}
                               onChange={handleChange}
                               className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                               id="price"/>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="category" className="form-label">category</label>
                        <input type="text"
                               name="category"
                               value={fields.category}
                               onChange={handleChange}
                               className={`form-control ${errors.category ? 'is-invalid' : ''}`}
                               id="category"/>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="inventory" className="form-label">inventory</label>
                        <input type="text"
                               name="inventory"
                               value={fields.inventory}
                               onChange={handleChange}
                               className={`form-control ${errors.inventory ? 'is-invalid' : ''}`}
                               id="inventory"/>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="discount" className="form-label">discount</label>
                        <input type="text"
                               name="discount"
                               value={fields.discount}
                               onChange={handleChange}
                               className={`form-control ${errors.discount ? 'is-invalid' : ''}`}
                               id="discount"/>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="description" className="form-label">Description</label>
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