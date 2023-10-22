import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect} from "react";
import {useNavigate, Link} from 'react-router-dom';
import {fetchCategory, postCategory} from "src/store";
import Forms from './forms';
import {useThunk} from 'src/hooks/useThunk';
import Loader from "../../../components/Loader";

const CreateCategory = () => {
    const navigate = useNavigate();
    const [doPostCategory, isLoading, loadingErrors] = useThunk(postCategory);

    const finishSubmit = (data) => {
        doPostCategory(data);
        navigate('/category');
    }

    let content;
    if (isLoading) {
        content = <Loader/>;
    } else if (loadingErrors) {
        content = <div>Error fetching data...</div>;
    } else {
        content = <Forms formSubmit={finishSubmit}/>;
    }

    return (
        <>
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
                <h1 className="h2">New Category</h1>
            </div>
            <div>
                {content}
            </div>
        </>
    );
};
export default CreateCategory;