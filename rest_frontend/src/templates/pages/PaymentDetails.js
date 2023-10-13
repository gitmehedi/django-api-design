import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllPayments} from "src/store";

const PaymentDetails = () => {
    const dispatch = useDispatch();

    const {data} = useSelector((state) => {
        return state.payments;
    })


    useEffect(() => {
        dispatch(fetchAllPayments());
    }, [fetchAllPayments]);


    const renderData = data.map((dt) => {
        return (
            <tr key={dt.id}>
                <td>{dt.id}</td>
                <td>{dt.provider}</td>
                <td>{dt.amount}</td>
                <td>{dt.status}</td>
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
                    <th>Provider Name</th>
                    <th>Amount</th>
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
export default PaymentDetails;