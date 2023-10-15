import {Link} from 'react-router-dom';

const Action = ({recId, delCallback}) => {
    return (
        <>
            <Link to={`update/${recId}`} className="btn btn-primary">Edit</Link>
            <button onClick={() => delCallback(recId)} className="btn btn-danger">Delete</button>
        </>
    )
}
export default Action;