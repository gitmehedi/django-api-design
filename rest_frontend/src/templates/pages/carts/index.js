import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useThunk} from "src/hooks/useThunk";
import PageHeader from "src/templates/snippets/PageHeader";
import Pagination from "src/templates/snippets/Pagination";
import {Loader, NotFoundError} from "src/components/Loader";
import {fetchAllCart} from "src/store";
import TableData from "./lists";


const IndexCart = () => {
    const [doFetchAllCart, isLoading, isErrors] = useThunk(fetchAllCart);

    const data = useSelector(state => state.categories.data);
    const count = useSelector(state => state.categories.count);

    useEffect(() => {
        doFetchAllCart();
    }, [doFetchAllCart]);


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
                <table className='table table-striped table-sm'>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Description</th>
                        <th>Status</th>
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


export {IndexCart};
export * from './create';
export * from './update';