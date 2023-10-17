import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect} from "react";
import {useNavigate, Navigate} from 'react-router-dom';
import {postCategory} from "src/store";

const CreateCategory = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [fields, setFields] = useState({
        name: '',
        code: '',
        description: '',
        status: true
    });

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const finishSubmit = () => {
        dispatch(postCategory(fields));
        navigate('/category');
    }
    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            finishSubmit();
        }
    }, [errors]);
    const validateFields = (values) => {
        let errors = {};
        if (values.name === '') {
            errors.name = "Name should not be Empty";
        }
        if (values.code === '') {
            errors.code = "Code Should be Empty";
        }
        if (values.description === '') {
            errors.description = "Description should not be Empty";
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
        <div className='row'>
            <h1>Create Category</h1>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className='col-md-6'>
                    <div className="col-md-12">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text"
                               name="name"
                               value={fields.name}
                               onChange={handleChange}
                               className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                               id="title"/>
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="code" className="form-label">Code</label>
                        <input type="text"
                               name="code"
                               onChange={handleChange}
                               value={fields.code}
                               className={`form-control ${errors.code ? 'is-invalid' : ''}`}
                               id="code"/>
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
                    <button className="btn btn-primary">Create</button>
                    <button className="btn btn-danger">Cancel</button>
                </div>

            </form>
        </div>
    );
};
export default CreateCategory;