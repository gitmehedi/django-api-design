import {useEffect} from "react";
import {useSelector} from "react-redux";
import {fetchAllInventory} from "src/store";
import {useThunk} from "src/hooks/useThunk";
import ListTable from "./lists";
import ReactLoading from "src/components/Loader";
import Pagination from "src/templates/snippets/Pagination"
import PageHeader from "src/templates/snippets/PageHeader"

const IndexInventory = () => {
    const [doAllInventory, isLoading, isErrors] = useThunk(fetchAllInventory);
    const data = useSelector(state => state.inventory.data);

    useEffect(() => {
        doAllInventory();
    }, [doAllInventory]);


    let content;
    if (isLoading)
        content = <ReactLoading type="spin" color="ash" delay="200"/>;
    else if (isErrors)
        content = <div>Errors in Page</div>
    else
        content = data.map((dt) => {
            return <ListTable key={dt.id} rec={dt}/>
        });

    return (
        <>
            <PageHeader title={'Product Inventory'} count={200} clink={'inventory'}/>
            <div className='table-responsive small'>
                <table className='table table-striped table-sm'>
                    <thead>
                    <tr>
                        <th>No</th>
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
export default IndexInventory;