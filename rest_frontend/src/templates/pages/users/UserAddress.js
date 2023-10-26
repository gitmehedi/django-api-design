import {useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllDiscount, fetchAllUserAddress} from "src/store";
import Action from "src/components/actions";
import Pagination from "src/templates/snippets/Pagination";
import {NotAvailable, PageHeader} from "src/templates/snippets/PageHeader";
import {useThunk} from "src/hooks/useThunk";

const UserAddress = () => {
    const [doFetchAllUserAddress, isLoading, isErrors] = useThunk(fetchAllUserAddress);

    const {data, count, page} = useSelector(state => state.userAddress);

    useEffect(() => {
        doFetchAllUserAddress();
    }, [doFetchAllUserAddress]);

    const changePage = (page_no) => {
        doFetchAllUserAddress(page_no);
    }

    const content = data.map((dt) => {
        return (
            <tr key={dt.id}>
                <td>{dt.id}</td>
                <td>{dt.user}</td>
                <td>{dt.address_line1}</td>
                <td>{dt.address_line}</td>
                <td>{dt.city}</td>
                <td>{dt.postal_code}</td>
                <td>{dt.country}</td>
                <td>{dt.mobile}</td>
                <td>{dt.telephone}</td>
                <td>
                    <Action recId={dt.id}/>
                </td>
            </tr>
        );
    });


    return (
        <>
            <PageHeader title={'User Address'} count={count} clink={'user-address'}/>
            <div className='table-responsive small'>
                <table className='table table-striped table-sm'>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>Address 1</th>
                        <th>Address 2</th>
                        <th>City</th>
                        <th>Postal Code</th>
                        <th>Country</th>
                        <th>Mobile</th>
                        <th>Telephone</th>
                        <th className="action-width">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {count ? content : <NotAvailable/>}
                    </tbody>
                </table>
            </div>
            {count ? <Pagination pageChange={changePage} current={page} count={count}/> : ''}
        </>
    );
};
export default UserAddress;