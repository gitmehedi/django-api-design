import {useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllCategory, delCategory, fetchAllInventory} from "src/store";
import {Link, Outlet} from "react-router-dom";
import Action from 'src/components/actions';
import {useThunk} from "src/hooks/useThunk";
import CatTable from "./lists";
import {useDispatch} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee, faBars} from '@fortawesome/free-solid-svg-icons';


const ListCategory = () => {
    const dispatch = useDispatch();

    const data = useSelector(state => state.categories.data);
    const isLoading = useSelector(state => state.categories.isLoading);

    useEffect(() => {
        dispatch(fetchAllCategory());
    }, [fetchAllCategory]);


    let content;
    if (isLoading)
        content = <div>Data is loading....</div>;
    else
        content = data.map((dt, i) => {
            return (
                <CatTable key={i} rec={dt}/>
            );
        });

    return (
        <div>
            <div className="mb-4 mt-4 px-0">
                <div className="float-left">
                    <Link to='/category/create' className="btn btn-success">Add + </Link>
                </div>
                {/*<div className="btn-group btn-group-sm " role="group">*/}
                {/*    <button type="button" className="btn btn-info">*/}
                {/*        <FontAwesomeIcon icon={faCoffee}/>*/}
                {/*    </button>*/}
                {/*    <button type="button" className="btn btn-warning">*/}
                {/*        <FontAwesomeIcon icon={faBars}/>*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
            <table className='table table-striped'>
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
            <Outlet/>
        </div>
    );
};
export default ListCategory;