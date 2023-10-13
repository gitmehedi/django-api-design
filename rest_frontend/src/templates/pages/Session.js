import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllSessions} from "src/store";

const Sessions = () => {
    const dispatch = useDispatch();

    const {data} = useSelector((state) => {
        return state.sessions;
    })


    useEffect(() => {
        dispatch(fetchAllSessions());
    }, [fetchAllSessions]);


    const renderData = data.map((dt) => {
        return (
            <tr key={dt.id}>
                <td>{dt.id}</td>
                <td>{dt.user}</td>
                <td>{dt.total}</td>
                <td>
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    });


    return (
        <div>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>No</th>
                    <th>User</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {renderData}
                </tbody>
            </table>

        </div>
    );
};
export default Sessions;