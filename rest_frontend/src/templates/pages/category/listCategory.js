import {useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllCategory, delCategory} from "src/store";
import {Link} from "react-router-dom";
import Action from 'src/components/actions';
import {useThunk} from "src/hooks/useThunk";

const ListCategory = () => {
    const [doFetchAllCategory, isLoading, isError] = useThunk(fetchAllCategory);
    const [doDelCategory, isDelLoading, isDelError] = useThunk(delCategory);

    const {data} = useSelector((state) => {
        return state.categories;
    })

    useEffect(() => {
        doFetchAllCategory();
    }, [doFetchAllCategory]);

    const handleDelete = (id) => {
        doDelCategory(id);
        doFetchAllCategory();
    }

    const renderData = data.map((dt) => {
        return (
            <tr key={dt.id}>
                <td>{dt.id}</td>
                <td>{dt.name}</td>
                <td>{dt.code}</td>
                <td>{dt.description}</td>
                <td>{dt.status}</td>
                <td>
                    <Action recId={dt.id} delCallback={handleDelete}/>
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
        </div>
    );
};
export default ListCategory;