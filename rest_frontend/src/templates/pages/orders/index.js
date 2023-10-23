import {useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllOrders} from "src/store";
import Pagination from "src/templates/snippets/Pagination";
import PageHeader from "src/templates/snippets/PageHeader";
import {useThunk} from "src/hooks/useThunk";
import {Loader, NotFoundError} from "src/components/Loader";
import TableData from "./lists";

const IndexOrder = () => {
    const [doFetchAllOrders, isLoading, isError] = useThunk(fetchAllOrders);
    const data = useSelector(state => state.orders.data);
    const count = useSelector(state => state.orders.count);

    useEffect(() => {
        doFetchAllOrders();
    }, [doFetchAllOrders]);


    let content;
    if (isLoading)
        content = <Loader/>;
    else if (isError)
        content = <NotFoundError/>;
    else
        content = data.map((dt) => {
            return <TableData rec={dt}/>;
        });


    return (
        <>
            <PageHeader title={'Orders'} count={count} clink={'orders'}/>
            <div className='table-responsive small'>
                <table className='table table-striped table-sm'>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>User</th>
                        <th>Total Price</th>
                        <th>Payment</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {content}
                    </tbody>
                </table>
            </div>
            <Pagination/>
        </>
    );
};


export {IndexOrder};
export * from './create';
export * from './update';