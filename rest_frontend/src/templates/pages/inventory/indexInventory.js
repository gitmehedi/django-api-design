import {useEffect} from "react";
import {useSelector} from "react-redux";
import {fetchAllInventory} from "src/store";

import {useThunk} from "src/hooks/useThunk";
import ListTable from "./lists";
import ReactLoading from "src/components/Loader";
import styles from '../pages.style.css';
import {Link} from "react-router-dom";

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
        <div>
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Product Inventory</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link to='/category/create' className="btn btn-sm btn-success">Add + </Link>
                    </div>
                </div>
            </div>
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
            <div className={styles.pagination}>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex="-1">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};
export default IndexInventory;