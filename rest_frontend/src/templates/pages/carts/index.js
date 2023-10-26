import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useThunk} from "src/hooks/useThunk";
import {NotAvailable, PageHeader} from "src/templates/snippets/PageHeader";
import Pagination from "src/templates/snippets/Pagination";
import {Loader, NotFoundError} from "src/components/Loader";
import {fetchAllCart} from "src/store";
import TableData from "./lists";


const IndexCart = () => {
    const [doFetchAllCart, isLoading, isErrors] = useThunk(fetchAllCart);
    const {data, count, page} = useSelector(state => state.carts);

    useEffect(() => {
        doFetchAllCart();
    }, [doFetchAllCart]);

    const changePage = (page_no) => {
        doFetchAllCart(page_no);
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