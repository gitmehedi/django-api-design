import {useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllOrders} from "src/store";
import Pagination from "src/templates/snippets/Pagination";
import {NotAvailable, PageHeader} from "src/templates/snippets/PageHeader";
import {useThunk} from "src/hooks/useThunk";
import {Loader, NotFoundError} from "src/components/Loader";
import TableData from "./lists";

const IndexOrder = () => {
    const [doFetchAllOrders, isLoading, isError] = useThunk(fetchAllOrders);
    const {data, count, page} = useSelector(state => state.orders);

    useEffect(() => {
        doFetchAllOrders();
    }, [doFetchAllOrders]);

    const changePage = (page_no) => {
        doFetchAllOrders(page_no);
    }

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


export {IndexOrder};
export * from './create';
export * from './update';