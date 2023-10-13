import {Link} from 'react-router-dom';

const Action = ({recId}) => {
    return (
        <>
            <Link to={`update/${recId}`} className="btn btn-primary">Edit</Link>
            <Link to={`delete/${recId}`} className="btn btn-danger">Delete</Link>
        </>
    )
}
export default Action;