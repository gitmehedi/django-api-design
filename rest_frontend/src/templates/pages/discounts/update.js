import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import {useThunk} from 'src/hooks/useThunk';
import Forms from "./forms";
import {fetchDiscount, putDiscount} from "src/store";
import {getRecId} from 'src/store/utils/urls';
import {Loader, NotFoundError} from "src/components/Loader";

const UpdateDiscount = () => {
    const id = getRecId();
    const navigate = useNavigate();
    const [doFetchDiscount, isLoading, loadingErrors] = useThunk(fetchDiscount);
    const [doPutDiscount] = useThunk(putDiscount);

    const finishSubmit = (fields) => {
        let data = {'id': id, 'record': fields}
        doPutDiscount(data);
        navigate('/discount');
    }

    useEffect(() => {
        if (id) {
            doFetchDiscount(id);
        }
    }, [doFetchDiscount]);

    const record = useSelector((state) => state.discounts.record);

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
                <h1 className="h2">Modify Discounts</h1>
            </div>
            <div>
                {content}
            </div>
        </>
    );
};

export {UpdateDiscount};