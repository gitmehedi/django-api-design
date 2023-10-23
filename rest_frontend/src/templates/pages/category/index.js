import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useThunk} from "src/hooks/useThunk";
import PageHeader from "src/templates/snippets/PageHeader";
import Pagination from "src/templates/snippets/Pagination";
import {Loader, NotFoundError} from "src/components/Loader";
import {fetchAllCategory} from "src/store";
import TableData from "./lists";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee, faBars} from '@fortawesome/free-solid-svg-icons';


const IndexCategory = () => {
    const [doFetchAllCategory, isLoading, isErrors] = useThunk(fetchAllCategory);

    const data = useSelector(state => state.categories.data);
    const count = useSelector(state => state.categories.count);

    useEffect(() => {
        doFetchAllCategory();
    }, [doFetchAllCategory]);


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


export {IndexCategory};
export * from './create';
export * from './update';