import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchCategory} from "src/store";

const CreateCategory = () => {
    // const dispatch = useDispatch();
    //
    // const {data} = useSelector((state) => {
    //     return state.categories;
    // })
    //
    //
    // useEffect(() => {
    //     dispatch(fetchCategory());
    // }, [fetchCategory]);
    //
    // const renderData = data.map((dt) => {
    //     return (
    //         <tr key={dt.id}>
    //             <td>{dt.id}</td>
    //             <td>{dt.name}</td>
    //             <td>{dt.code}</td>
    //             <td>{dt.description}</td>
    //             <td>{dt.status}</td>
    //             <td>
    //                 <button className="btn btn-primary">Edit</button>
    //                 <button className="btn btn-danger">Delete</button>
    //             </td>
    //         </tr>
    //     );
    // });
    //
    // const handleCreate = (event) => {
    //     console.log(event);
    //     return (
    //         <div>Bangladesh</div>
    //     );
    // }

    return (
        <div>
            <h1>No Language</h1>

        </div>
    );
};
export default CreateCategory;