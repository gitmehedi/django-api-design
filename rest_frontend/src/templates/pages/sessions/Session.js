import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllSessions} from "src/store";
import Action from "src/components/actions";

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
                    <Action recId={dt.id}/>
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