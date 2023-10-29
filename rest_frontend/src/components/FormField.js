import {Link} from "react-router-dom";

const TextField = ({name, event, value, error, lblText = false}) => {
    let label = lblText ? lblText : name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <>
            <label htmlFor={name} className="form-label">{label}</label>
            <input type="text"
                   name={name}
                   onChange={event}
                   value={value}
                   id={name}
                   className={`form-control ${error ? 'is-invalid' : ''}`}
            />
        </>
    );
}

const NumberField = ({name, event, value, error, lblText = false}) => {
    let label = lblText ? lblText : name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <div className="mt-2">
            <label htmlFor={name} className="form-label">{label}</label>
            <input type="number"
                   name={name}
                   onChange={event}
                   value={value}
                   id={name}
                   pattern='^[0-9]*$'
                   className={`form-control ${error ? 'is-invalid' : ''}`}
            />
        </div>
    );
}
const EmailField = ({name, event, value, error, lblText = false}) => {
    let label = lblText ? lblText : name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <div className="mt-2">
            <label htmlFor={name} className="form-label">{label}</label>
            <input type="email"
                   name={name}
                   onChange={event}
                   value={value}
                   id={name}
                   pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
                   className={`form-control ${error ? 'is-invalid' : ''}`}
            />
        </div>
    );
}
const PasswordField = ({name, event, value, error, lblText = false}) => {
    let label = lblText ? lblText : name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <div className="mt-2">
            <label htmlFor={name} className="form-label">{label}</label>
            <input type="password"
                   name={name}
                   onChange={event}
                   value={value}
                   id={name}
                   // pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
                   className={`form-control ${error ? 'is-invalid' : ''}`}
            />
        </div>
    );
}

const DateField = ({name, event, value, error, lblText = false}) => {
}

const ImageField = ({name, event, value, error, lblText = false}) => {
}
const FileField = ({name, event, value, error, lblText = false}) => {
}

const CheckboxField = ({name, event, value, error, lblText = false}) => {
}
const RadioField = ({name, event, value, error, options}) => {
    let label = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <div className="mt-2">
            <label className="form-label" htmlFor={name}>{label}</label>
            <div>
                {options.map((option, index) => (
                    <div className="form-check form-check-inline" key={option.value}>
                        <input className="form-check-input"
                               type="radio"
                               name={name}
                               id={option.label}
                               value={option.value}
                               checked={value === option.value}
                               onChange={event}
                               key={index}/>
                        <label className="form-check-label" htmlFor={option.value}>{option.label}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}
const SelectField = ({name, event, value, error}) => {
    let label = name.charAt(0).toUpperCase() + name.slice(1);
    const options = [
        {label: 1, value: 'Mango'},
        {label: 2, value: 'Banana'},
        {label: 3, value: 'Guava'},
        {label: 4, value: 'Nuts'},
    ];


    return (
        <div className="mt-2">
            <label className="form-label" htmlFor={name}>{label}</label>
            <select onChange={event} id={name} className="form-select" name={name} value={value}>
                <option value=''>----Please Choose----</option>
                {options.map(opt => (
                    <option value={opt.label}>{opt.value}</option>
                ))}
            </select>
        </div>
    )
        ;
}
const Button = ({name, event, value, error}) => {
}
const SubmitButton = ({name}) => {
    return (
        <>
            <div className="d-grid gap-4 d-md-block">
                <button className="btn btn-sm btn-success">Save</button>
                <Link to={`/${name}/`} style={{marginLeft: '5px'}} className="btn btn-sm btn-danger">Cancel</Link>
            </div>
        </>
    );
}


export {
    TextField,
    NumberField,
    DateField,
    RadioField,
    PasswordField,
    ImageField,
    FileField,
    EmailField,
    CheckboxField,
    Button,
    SubmitButton,
    SelectField
};