import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchAllOrders, setSearch} from "src/store";
import Pagination from "src/templates/snippets/Pagination";
import {NotAvailable, PageHeader, SearchHeader} from "src/templates/snippets/PageHeader";
import {useThunk} from "src/hooks/useThunk";
import {Loader, NotFoundError} from "src/components/Loader";
import TableData from "./lists";

const IndexOrder = () => {
    const dispatch = useDispatch();
    const [doFetchAllOrders, isLoading, isError] = useThunk(fetchAllOrders);
    const {data, count, page, search} = useSelector(state => state.orders);

    useEffect(() => {
        let params = {page: null, search: null}
        doFetchAllOrders(params);
    }, [doFetchAllOrders]);

    const changePage = (page_no) => {
        let params = {page: page_no, search: search}
        doFetchAllOrders(params);
    }

    const searchChange = (value) => {
        if (value !== search) {
            let params = {page: null, search: value}
            dispatch(setSearch(value));
            doFetchAllOrders(params);
        }
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
                <SearchHeader count={count} onsearch={searchChange}/>
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