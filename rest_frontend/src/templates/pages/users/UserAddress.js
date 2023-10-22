import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllUserAddress} from "src/store";
import Action from "src/components/actions";
import Pagination from "src/templates/snippets/Pagination"
import PageHeader from "src/templates/snippets/PageHeader"

const UserAddress = () => {
    const dispatch = useDispatch();

    const {data} = useSelector((state) => {
        return state.userAddress;
    })


    useEffect(() => {
        dispatch(fetchAllUserAddress());
    }, [fetchAllUserAddress]);


    const renderData = data.map((dt) => {
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
            <PageHeader title={'User Address'} count={200} clink={'user-address'}/>
            <div className='table-responsive small'>
                <table className='table table-striped table-sm'>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>User Name</th>
                        <th>Address 1</th>
                        <th>Address 2</th>
                        <th>City</th>
                        <th>Postal Code</th>
                        <th>Country</th>
                        <th>Mobile</th>
                        <th>Telephone</th>
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
export default UserAddress;