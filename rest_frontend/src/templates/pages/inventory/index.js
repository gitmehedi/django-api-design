import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchAllInventory, setSearch} from "src/store";
import {useThunk} from "src/hooks/useThunk";
import TableData from "./lists";
import Pagination from "src/templates/snippets/Pagination";
import {NotAvailable, PageHeader, SearchHeader} from "src/templates/snippets/PageHeader";
import {Loader, NotFoundError} from "src/components/Loader";

const IndexInventory = () => {
    const dispatch = useDispatch();
    const [doAllInventory, isLoading, isError] = useThunk(fetchAllInventory);
    const {data, count, page, search} = useSelector(state => state.inventory);

    useEffect(() => {
        let params = {page: null, search: null}
        doAllInventory(params);
    }, [doAllInventory]);

    const changePage = (page_no) => {
        let params = {page: page_no, search: search}
        doAllInventory(params);
    }
    const searchChange = (value) => {
        if (value !== search) {
            let params = {page: null, search: value}
            dispatch(setSearch(value));
            doAllInventory(params);
        }
    }

    let content;
    if (isLoading)
        content = <Loader/>;
    else if (isError)
        content = <NotFoundError/>;
    else
        content = data.map((dt) => {
            return <TableData key={dt.id} rec={dt}/>
        });

    return (
        <>
            <PageHeader title={'Product Inventory'} count={count} clink={'inventory'}/>
            <div className='table-responsive small'>
                <SearchHeader count={count} onsearch={searchChange}/>
                <table className='table table-striped table-sm'>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
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

export {IndexInventory};
export * from './create';
export * from './update';
