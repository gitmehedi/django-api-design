import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import {useThunk} from 'src/hooks/useThunk';
import Forms from "./forms";
import {fetchCategory, putCategory} from "src/store";
import {getRecId} from 'src/store/utils/urls';
import {Loader, NotFoundError} from "src/components/Loader";

const UpdateCategory = () => {
    const id = getRecId();
    const navigate = useNavigate();
    const [doFetchCategory, isLoading, loadingErrors] = useThunk(fetchCategory);
    const [doPutCategory] = useThunk(putCategory);

    const finishSubmit = (fields) => {
        let data = {'recId': id, 'data': fields}
        doPutCategory(data);
        navigate('/category');
    }

    useEffect(() => {
        if (id) {
            doFetchCategory(id);
        }
    }, [doFetchCategory]);

    const record = useSelector((state) => state.categories.record);

    let content;
    if (isLoading) {
        content = <Loader/>;
    } else if (loadingErrors) {
        content = <NotFoundError/>;
    } else {
        content = <Forms formSubmit={finishSubmit} record={record}/>;
    }

    return (
        <>
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
                <h1 className="h2">Modify Category</h1>
            </div>
            <div>
                {content}
            </div>
        </>
    );
};
export default UpdateCategory;