import {useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllUserAddress, fetchAllUserPayment} from "src/store";
import Action from "src/components/actions";
import Pagination from "src/templates/snippets/Pagination";
import {NotAvailable, PageHeader} from "src/templates/snippets/PageHeader";
import {useThunk} from "src/hooks/useThunk";

const UserPayments = () => {
    const [doFetchAllUserPayment, isLoading, isErrors] = useThunk(fetchAllUserPayment);
    const {data, count, page} = useSelector(state => state.userPayments);

    useEffect(() => {
        doFetchAllUserPayment();
    }, [doFetchAllUserPayment]);

    const changePage = (page_no) => {
        doFetchAllUserPayment(page_no);
    }

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
            {count ? <Pagination pageChange={changePage} current={page} count={count}/> : ''}
        </div>
    );
};
export default UserPayments;