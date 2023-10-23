import {useNavigate} from 'react-router-dom';
import {postPayment} from "src/store";
import {useThunk} from 'src/hooks/useThunk';
import Forms from './forms';
import {Loader, NotFoundError} from "src/components/Loader";

const CreatePayment = () => {
    const navigate = useNavigate();
    const [doPostPayment, isLoading, loadingErrors] = useThunk(postPayment);

    const finishSubmit = (fields) => {
        let data = {'record': fields}
        doPostPayment(data);
        navigate('/payments');
    }

    let content;
    if (isLoading) {
        content = <Loader/>;
    } else if (loadingErrors) {
        content = <NotFoundError/>;
    } else {
        content = <Forms formSubmit={finishSubmit}/>;
    }

    return (
        <>
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
                <h1 className="h2">New Payment</h1>
            </div>
            <div>
                {content}
            </div>
        </>
    );
};
export {CreatePayment};

