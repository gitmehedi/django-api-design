import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {TextField, NumberField, SelectField, SubmitButton, RadioField} from "src/components/FormField";


const Forms = ({formSubmit, record}) => {
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [fields, setFields] = useState({
        provider: record ? record.provider : '',
        amount: record ? record.amount : '',
        status: !record ? true : record.status,
    });

    const options = [
        {value: true, label: 'True'},
        {value: false, label: 'False'},
    ];


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
                        <RadioField name='status'
                                    event={handleChange}
                                    value={fields.status}
                                    error={errors.status}
                                    options={options}/>
                    </div>
                </div>

                <SubmitButton clink='payments'/>
            </form>

        </>
    );
}

export default Forms;