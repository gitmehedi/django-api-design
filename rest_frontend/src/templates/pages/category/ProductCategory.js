import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllCategory} from "src/store";
import {Link, Outlet} from "react-router-dom";
import Action from 'src/components/actions';

const ProductCategory = () => {
    const dispatch = useDispatch();

    const {data} = useSelector((state) => {
        return state.categories;
    })


    useEffect(() => {
        dispatch(fetchAllCategory());
    }, [fetchAllCategory]);

    const renderData = data.map((dt) => {
        return (
            <tr key={dt.id}>
                <td>{dt.id}</td>
                <td>{dt.name}</td>
                <td>{dt.code}</td>
                <td>{dt.description}</td>
                <td>{dt.status}</td>
                <td>
                    <Action recId={dt.id}/>
                </td>
            </tr>
        );
    });

    const handleCreate = (event) => {
        console.log(event);
        return (
            <div>Bangladesh</div>
        );
    }

    return (
        <div>
            <Link to='/category/create' className="btn btn-success">Create</Link>
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
                {renderData}
                </tbody>
            </table>
            <Outlet/>
        </div>
    );
};
export default ProductCategory;