import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllCarts} from "src/store";
import Action from "src/components/actions";
import Pagination from "src/templates/snippets/Pagination";
import PageHeader from "src/templates/snippets/PageHeader";

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
        <>
            <PageHeader title={'Carts'} count={200} clink={'carts'}/>
            <div className='table-responsive small'>
                <table className='table table-striped table-sm'>
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
            <Pagination/>
        </>
    );
};
export default Carts;