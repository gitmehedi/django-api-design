import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useThunk} from "src/hooks/useThunk";
import {NotAvailable, PageHeader, SearchHeader} from "src/templates/snippets/PageHeader";
import Pagination from "src/templates/snippets/Pagination";
import {Loader, NotFoundError} from "src/components/Loader";
import {fetchAllProduct, setSearch} from "src/store";
import TableData from "./lists";


const IndexProduct = () => {
    const dispatch = useDispatch();
    const [doFetchAllProduct, isLoading, isErrors] = useThunk(fetchAllProduct);
    const {data, count, page,search} = useSelector(state => state.products);

    useEffect(() => {
        let params = {page: null, search: null}
        doFetchAllProduct(params);
    }, [doFetchAllProduct]);

    const changePage = (page_no) => {
        let params = {page: page_no, search: search}
        doFetchAllProduct(params);
    }
    const searchChange = (value) => {
        if (value !== search) {
            let params = {page: null, search: value}
            dispatch(setSearch(value));
            doFetchAllProduct(params);
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
            <PageHeader title={'Products'} count={count} clink={'products'}/>
            <div className='table-responsive small'>
                <SearchHeader count={count} onsearch={searchChange}/>
                <table className='table table-striped table-sm'>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>SKU</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Inventory</th>
                        <th>Discount</th>
                        <th>Description</th>
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


export {IndexProduct};
export * from './create';
export * from './update';