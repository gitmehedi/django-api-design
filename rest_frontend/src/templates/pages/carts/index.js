import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {useThunk} from "src/hooks/useThunk";
import {NotAvailable, PageHeader, SearchHeader} from "src/templates/snippets/PageHeader";
import Pagination from "src/templates/snippets/Pagination";
import {Loader, NotFoundError} from "src/components/Loader";
import {fetchAllCart, setSearch} from "src/store";
import TableData from "./lists";

const IndexCart = () => {
    const dispatch = useDispatch();
    const [doFetchAllCart, isLoading, isErrors] = useThunk(fetchAllCart);
    const {data, count, page, search} = useSelector(state => state.carts);

    useEffect(() => {
        let params = {page: null, search: null}
        doFetchAllCart(params);
    }, [doFetchAllCart]);

    const changePage = (page_no) => {
        let params = {page: page_no, search: search}
        doFetchAllCart(params);
    }

    const searchChange = (value) => {
        if (value !== search) {
            let params = {page: null, search: value}
            dispatch(setSearch(value));
            doFetchAllCart(params);
        }
    }

    let content;
    if (isLoading)
        content = <Loader/>;
    else if (isErrors)
        content = <NotFoundError/>;
    else
        content = data.map((dt, i) => {
            return (
                <TableData key={i} rec={dt}/>
            );
        });

    return (
        <>
            <PageHeader title={'Carts'} count={count} clink={'carts'}/>
            <div className='table-responsive small'>
                <SearchHeader count={count} onsearch={searchChange}/>
                <table className='table table-striped table-sm'>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Session</th>
                        <th>Quantity</th>
                        <th>Status</th>
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


export {IndexCart};
export * from './create';
export * from './update';