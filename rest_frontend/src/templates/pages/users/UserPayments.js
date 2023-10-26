import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllUserPayment} from "src/store";
import Action from "src/components/actions";
import Pagination from "src/templates/snippets/Pagination";
import {NotAvailable, PageHeader} from "src/templates/snippets/PageHeader";

const UserPayments = () => {
    const dispatch = useDispatch();

    const data = useSelector(state => state.userAddress.data);
    const count = useSelector(state => state.userAddress.count);

    useEffect(() => {
        dispatch(fetchAllUserPayment());
    }, [fetchAllUserPayment]);


    const content = data.map((dt) => {
        return (
            <tr key={dt.id}>
                <td>{dt.id}</td>
                <td>{dt.provider}</td>
                <td>{dt.payment_type}</td>
                <td>{dt.account_no}</td>
                <td>{dt.expires_at}</td>
                <td>{dt.user}</td>
                <td>
                    <Action recId={dt.id}/>
                </td>
            </tr>
        );
    });


    return (
        <div>
            <PageHeader title={'User Payments'} count={count} clink={'user-payments'}/>
            <div className='table-responsive small'>
                <table className='table table-striped table-sm'>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Provider</th>
                        <th>Payment Type</th>
                        <th>Account No</th>
                        <th>Expires At</th>
                        <th>User</th>
                        <th className="action-width">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {count ? content : <NotAvailable/>}
                    </tbody>
                </table>
            </div>
            {count ? <Pagination/> : ''}
        </div>
    );
};
export default UserPayments;