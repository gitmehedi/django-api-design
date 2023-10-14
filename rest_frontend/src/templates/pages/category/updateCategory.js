import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect} from "react";
import {useNavigate, useParams, useLocation, useSearchParams} from 'react-router-dom';
import {postCategory, fetchCategory} from "src/store";
import {getRecId} from 'src/store/utils/urls';

const UpdateCategory = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const id = getRecId();

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            finishSubmit();
        }
    }, [errors]);

    useEffect(() => {
        dispatch(fetchCategory(id));
    }, [fetchCategory]);

    const {record} = useSelector((state) => {
        return state.categories;
    });

    if (record.length === 0) {
        return (<div>Loading...</div>);
    }
    console.log(record);

    const [fields, setFields] = useState({
        name: record.name || '',
        code: record.code || '',
        description: record.description || '',
        status: record.status || ''
    });


    const finishSubmit = () => {
        dispatch(postCategory(id));
        navigate('/category');
    }

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

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                    <button className="btn btn-danger">Cancel</button>
                </div>

            </form>
        </div>
    );
};
export default UpdateCategory;