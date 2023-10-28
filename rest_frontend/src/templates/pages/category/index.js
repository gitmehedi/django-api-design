import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useThunk} from "src/hooks/useThunk";
import {NotAvailable, PageHeader, SearchHeader} from "src/templates/snippets/PageHeader";
import Pagination from "src/templates/snippets/Pagination";
import {Loader, NotFoundError} from "src/components/Loader";
import {fetchAllCategory, setSearch} from "src/store";
import TableData from "./lists";


const IndexCategory = () => {
    const dispatch = useDispatch();
    const [doFetchAllCategory, isLoading, isErrors] = useThunk(fetchAllCategory);
    const {data, count, page, search} = useSelector(state => state.categories);

    useEffect(() => {
        let params = {page: null, search: null}
        doFetchAllCategory(params);
    }, [doFetchAllCategory]);

    const changePage = (page_no) => {
        let params = {page: page_no, search: search}
        doFetchAllCategory(params);
    }

    const searchChange = (value) => {
        if (value !== search) {
            let params = {page: null, search: value}
            dispatch(setSearch(value));
            doFetchAllCategory(params);
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
            <PageHeader title={'Product Category'} count={count} clink={'category'}/>
            <div className='table-responsive small'>
                <SearchHeader count={count} onsearch={searchChange}/>
                <table className='table table-striped table-sm'>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Code</th>
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


export {
    IndexCategory
};
export * from './create';
export * from './update';