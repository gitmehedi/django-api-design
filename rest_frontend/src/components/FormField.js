const TextField = ({name, event, value, error}) => {
    let label = name.charAt(0).toUpperCase() + name.slice(1);
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

const NumberField = ({name, event, value, error}) => {
    let label = name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <>
            <label htmlFor={name} className="form-label">{label}</label>
            <input type="number"
                   name={name}
                   onChange={event}
                   value={value}
                   id={name}
                   className={`form-control ${error ? 'is-invalid' : ''}`}
            />
        </>
    );
}
const EmailField = ({name, event, value, error}) => {
}
const PasswordField = ({name, event, value, error}) => {
}

const DateField = ({name, event, value, error}) => {
}

const ImageField = ({name, event, value, error}) => {
}
const FileField = ({name, event, value, error}) => {
}

const CheckboxField = ({name, event, value, error}) => {
}
const RadioField = ({name, event, value, error}) => {
}
const DropdownField = ({name, event, value, error}) => {
    let label = name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <>
            <label className="form-label" htmlFor={name}>{label}</label>
            <select onChange={event} id={name} className="form-select">
                <option value="apples">Red Apples</option>
                <option value="oranges">Outrageous Oranges</option>
                <option value="tomatoes">Technically a Fruit Tomatoes</option>
                <option value="bananas">Bodacious Bananas</option>
            </select>
        </>
    );
}
const Button = ({
                    name, event, value, error
                }) => {
}
const SubmitButton = ({
                          name, event, value, error
                      }) => {
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
    DropdownField
};