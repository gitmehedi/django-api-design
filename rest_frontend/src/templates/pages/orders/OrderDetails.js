import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllOrders} from "src/store";
import Action from "src/components/actions";
import Pagination from "src/templates/snippets/Pagination"
import PageHeader from "src/templates/snippets/PageHeader"

const Orders = () => {
    const dispatch = useDispatch();

    const {data} = useSelector((state) => {
        return state.orders;
    })


    useEffect(() => {
        dispatch(fetchAllOrders());
    }, [fetchAllOrders]);


    const renderData = data.map((dt) => {
        return (
            <tr key={dt.id}>
                <td>{dt.id}</td>
                <td>{dt.user}</td>
                <td>{dt.total_price}</td>
                <td>{dt.payment}</td>
                <td>
                    <Action recId={dt.id}/>
                </td>
            </tr>
        );
    });


    return (
        <>
            <PageHeader title={'Orders'} count={200} clink={'orders'}/>
            <div className='table-responsive small'>
                <table className='table table-striped table-sm'>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>User</th>
                        <th>Total Price</th>
                        <th>Payment</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderData}
                    </tbody>
                </table>
            </div>
            <Pagination/>
        </>
    );
};
export default Orders;