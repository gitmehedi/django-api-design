import {useEffect} from "react";
import {useSelector} from "react-redux";
import {fetchAllInventory} from "src/store";
import {useThunk} from "src/hooks/useThunk";
import TableData from "./lists";
import Pagination from "src/templates/snippets/Pagination";
import PageHeader from "src/templates/snippets/PageHeader";
import {Loader, NotFoundError} from "src/components/Loader";

const IndexInventory = () => {
    const [doAllInventory, isLoading, isError] = useThunk(fetchAllInventory);
    const data = useSelector(state => state.inventory.data);
    const count = useSelector(state => state.inventory.count);

    useEffect(() => {
        doAllInventory();
    }, [doAllInventory]);


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
                <table className='table table-striped table-sm'>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Quantity</th>
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

export {IndexInventory};
export * from './create';
export * from './update';
