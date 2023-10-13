import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllCarts} from "src/store";
import Action from "src/components/actions";

const Carts = () => {
    const dispatch = useDispatch();

    const {data} = useSelector((state) => {
        return state.carts;
    })

    useEffect(() => {
        dispatch(fetchAllCarts());
    }, [fetchAllCarts]);


    const renderData = data.map((dt) => {
        return (
            <tr key={dt.id}>
                <td>{dt.id}</td>
                <td>{dt.quantity}</td>
                <td>{dt.product}</td>
                <td>{dt.session}</td>
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
                    <th>Serial</th>
                    <th>Quantity</th>
                    <th>Product</th>
                    <th>Session</th>
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
export default Carts;