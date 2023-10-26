import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useThunk} from "src/hooks/useThunk";
import {NotAvailable, PageHeader} from "src/templates/snippets/PageHeader";
import Pagination from "src/templates/snippets/Pagination";
import {Loader, NotFoundError} from "src/components/Loader";
import {fetchAllDiscount} from "src/store";
import TableData from "./lists";


const IndexDiscount = () => {
    const [doFetchAllDiscount, isLoading, isErrors] = useThunk(fetchAllDiscount);
    const {data, count, page} = useSelector(state => state.discounts);

    useEffect(() => {
        doFetchAllDiscount();
    }, [doFetchAllDiscount]);

    const changePage = (page_no) => {
        doFetchAllDiscount(page_no);
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
            <PageHeader title={'Discounts'} count={count} clink={'discounts'}/>
            <div className='table-responsive small'>
                <table className='table table-striped table-sm'>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Discount Percent</th>
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


export {IndexDiscount};
export * from './create';
export * from './update';