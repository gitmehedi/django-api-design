import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import {useThunk} from 'src/hooks/useThunk';
import Forms from "./forms";
import {fetchProduct, putProduct} from "src/store";
import {getRecId} from 'src/store/utils/urls';
import {Loader, NotFoundError} from "src/components/Loader";

const UpdateProduct = () => {
    const id = getRecId();
    const navigate = useNavigate();
    const [doFetchProduct, isLoading, loadingErrors] = useThunk(fetchProduct);
    const [doPutProduct] = useThunk(putProduct);

    const finishSubmit = (fields) => {
        let data = {'id': id, 'record': fields}
        doPutProduct(data);
        navigate('/product');
    }

    useEffect(() => {
        if (id) {
            doFetchProduct(id);
        }
    }, [doFetchProduct]);

    const record = useSelector(state => state.products.record);

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
                <h1 className="h2">Modify Products</h1>
            </div>
            <div>
                {content}
            </div>
        </>
    );
};

export {UpdateProduct};


