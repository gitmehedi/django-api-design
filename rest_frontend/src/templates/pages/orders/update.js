import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useThunk} from "src/hooks/useThunk";
import {fetchOrder, putOrder} from "src/store";
import {Loader, NotFoundError} from "src/components/Loader";
import Forms from "./forms";
import {getRecId} from "src/store/utils/urls";


const UpdateOrder = () => {
    const navigate = useNavigate();
    const [doFetchOrder, isLoading, isError] = useThunk(fetchOrder)
    const [doPutOrder] = useThunk(putOrder)
    const record = useSelector(state => state.orders.record);
    const id = getRecId();

    useEffect(() => {
        doFetchOrder(id);
    }, [doFetchOrder]);

    const finishSubmit = (fields) => {
        let data = {'id': id, 'record': fields};
        doPutOrder(data)
        navigate('/orders');
    }

    let content;
    if (isLoading)
        content = <Loader/>
    else if (isError)
        content = <NotFoundError/>
    else
        content = <Forms record={record} formSubmit={finishSubmit}/>


    return (
        <>
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
                <h1 className="h2">New Order</h1>
            </div>
            <div>
                {content}
            </div>
        </>
    );
}

export {UpdateOrder};