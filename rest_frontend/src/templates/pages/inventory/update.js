import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import {fetchInventory, putInventory} from "src/store";
import {getRecId} from 'src/store/utils/urls';
import {useThunk} from 'src/hooks/useThunk';
import {Loader, NotFoundError} from "src/components/Loader";
import Forms from "./forms";


const UpdateInventory = () => {
    const id = getRecId();
    const navigate = useNavigate();
    const [doFetchInventory, isLoading, loadingErrors] = useThunk(fetchInventory);
    const [doPutInventory] = useThunk(putInventory);

    const finishSubmit = (fields) => {
        let data = {'id': id, 'record': fields}
        doPutInventory(data);
        navigate('/inventory');
    }

    useEffect(() => {
        if (id) {
            doFetchInventory(id);
        }
    }, [doFetchInventory]);

    const record = useSelector((state) => state.inventory.record);

    let content;
    if (isLoading) {
        content = <Loader/>;
    } else if (loadingErrors) {
        content = <NotFoundError/>;
    } else {
        content = <Forms record={record} formSubmit={finishSubmit}/>;
    }

    return (
        <>
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
                <h1 className="h2">Modify Inventory</h1>
            </div>
            <div>
                {content}
            </div>
        </>
    );
};
export {UpdateInventory};