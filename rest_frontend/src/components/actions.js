import {Link} from 'react-router-dom';


function useConfirm(message, recId,onConfirm) {
    const confirm = () => {
        if (window.confirm(message))
            onConfirm(recId);
    }
    return confirm
}

const Action = ({recId, delCallback}) => {
    const confirmDelete = useConfirm('Sure?',recId, delCallback);
    return (
        <>
            <Link to={`update/${recId}`} className="btn btn-sm btn-primary">Edit</Link>
            <button onClick={confirmDelete} className="btn btn-sm btn-danger">Delete</button>
        </>
    )
}
export default Action;