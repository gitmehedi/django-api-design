import {useEffect} from "react";
import {useSelector} from "react-redux";
import {fetchAllInventory} from "src/store";

import {useThunk} from "src/hooks/useThunk";
import Skeleton from "src/components/Skeleton";
import ListTable from "./lists";

const IndexInventory = () => {
    const [doAllInventory, isLoading, isErrors] = useThunk(fetchAllInventory);
    const data = useSelector(state => state.inventory.data);

    useEffect(() => {
        doAllInventory();
    }, [doAllInventory]);


    let content;
    if (isLoading)
        content = <Skeleton/>
    else if (isErrors)
        content = <div>Errors in Page</div>
    else
        content = data.map((dt) => {
            return <ListTable key={dt.id} rec={dt}/>
        });


    return (
        <div>
            <table className='table table-striped'>
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
    );
};
export default IndexInventory;