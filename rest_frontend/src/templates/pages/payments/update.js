import {useNavigate} from 'react-router-dom';
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {putPayment, fetchPayment} from "src/store";
import {useThunk} from 'src/hooks/useThunk';
import Forms from './forms';
import {Loader, NotFoundError} from "src/components/Loader";
import {getRecId} from "src/store/utils/urls";


const UpdatePayment = () => {
    const navigate = useNavigate();
    const id = getRecId();
    const [doFetchPayment, isLoading, loadingErrors] = useThunk(fetchPayment);
    const [doPutPayment] = useThunk(putPayment);


    const finishSubmit = (fields) => {
        let data = {'id': id, 'record': fields}
        doPutPayment(data);
        navigate('/payments');
    }

    const record = useSelector(state => state.payments.record);

    useEffect(() => {
        if (id) {
            doFetchPayment(id);
        }
    }, [doFetchPayment]);


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
                <h1 className="h2">Update Payment</h1>
            </div>
            <div>
                {content}
            </div>
        </>
    );
};

export {UpdatePayment};