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

import PageHeader from "src/templates/snippets/PageHeader";
import Pagination from "src/templates/snippets/Pagination";
import Loader from "src/components/Loader";


const Index = () => {
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
        content = <Loader/>;
    else
        content = data.map((dt, i) => {
            return (
                <CatTable key={i} rec={dt}/>
            );
        });

    return (
        <>
            <PageHeader title={'Product Category'} count={count} clink={'category'}/>
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
            <Pagination/>
        </>
    );
};
export default Index;