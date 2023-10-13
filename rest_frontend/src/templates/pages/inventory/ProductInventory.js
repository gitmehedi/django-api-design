import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllInventory} from "src/store";
import Action from "src/components/actions";

const ProductInventory = () => {
    const dispatch = useDispatch();

    const {data} = useSelector((state) => {
        return state.inventory;
    })


    useEffect(() => {
        dispatch(fetchAllInventory());
    }, [fetchAllInventory]);


    const renderData = data.map((dt) => {
        return (
            <tr key={dt.id}>
                <td>{dt.id}</td>
                <td>{dt.name}</td>
                <td>{dt.quantity}</td>
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
                    <th>Quantity</th>
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
export default ProductInventory;