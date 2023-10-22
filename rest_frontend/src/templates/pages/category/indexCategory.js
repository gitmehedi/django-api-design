import {useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllCategory, delCategory, fetchAllInventory} from "src/store";
import {Link, Outlet} from "react-router-dom";
import ReactLoading from "src/components/Loader";
import Action from 'src/components/actions';
import {useThunk} from "src/hooks/useThunk";
import CatTable from "./lists";
import {useDispatch} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee, faBars} from '@fortawesome/free-solid-svg-icons';
import styles from "../pages.style.css";


const IndexCategory = () => {
    const dispatch = useDispatch();

    const data = useSelector(state => state.categories.data);
    const isLoading = useSelector(state => state.categories.isLoading);
    const count = useSelector(state => state.categories.count);
    const next = useSelector(state => state.categories.next);
    const previous = useSelector(state => state.categories.previous);

    useEffect(() => {
        dispatch(fetchAllCategory());
    }, [fetchAllCategory]);


    let content;
    if (isLoading)
        content = <ReactLoading type="spin" color="ash" delay="200"/>;
    else
        content = data.map((dt, i) => {
            return (
                <CatTable key={i} rec={dt}/>
            );
        });

    return (
        <>
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Product Category</h1>

                <div className="btn-toolbar mb-2 mb-md-0">
                    <div style={{marginRight: '10px', paddingTop: '5px'}}>Total Records: <strong>{count}</strong></div>

                    <div className="btn-group me-2 ml-1">
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
        </>
    );
};
export default IndexCategory;