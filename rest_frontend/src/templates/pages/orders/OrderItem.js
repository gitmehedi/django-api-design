import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchCategory} from "src/store";
import Action from "src/components/actions";

const OrderItems = () => {
    const dispatch = useDispatch();

    const {data} = useSelector((state) => {
        return state.categories;
    })


    useEffect(() => {
        dispatch(fetchCategory());
    }, [fetchCategory]);


    const renderData = data.map((dt) => {
        return (
            <tr key={dt.id}>
                <td>{dt.id}</td>
                <td>{dt.name}</td>
                <td>{dt.code}</td>
                <td>{dt.description}</td>
                <td>{dt.status}</td>
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
                    <th>Name</th>
                    <th>Code</th>
                    <th>Description</th>
                    <th>Status</th>
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
export default OrderItems;