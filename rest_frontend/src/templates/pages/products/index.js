import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useThunk} from "src/hooks/useThunk";
import {NotAvailable, PageHeader} from "src/templates/snippets/PageHeader";
import Pagination from "src/templates/snippets/Pagination";
import {Loader, NotFoundError} from "src/components/Loader";
import {fetchAllProduct} from "src/store";
import TableData from "./lists";


const IndexProduct = () => {
    const [doFetchAllProduct, isLoading, isErrors] = useThunk(fetchAllProduct);

    const data = useSelector(state => state.products.data);
    const count = useSelector(state => state.products.count);

    useEffect(() => {
        doFetchAllProduct();
    }, [doFetchAllProduct]);


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
            {count ? <Pagination/> : ''}
        </>
    );
};


export {IndexProduct};
export * from './create';
export * from './update';