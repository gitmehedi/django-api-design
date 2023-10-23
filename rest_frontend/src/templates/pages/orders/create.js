import Forms from './forms';
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useThunk} from "src/hooks/useThunk";
import {postOrder} from "src/store";
import {Loader, NotFoundError} from "src/components/Loader";

const CreateOrder = () => {
    const navigate = useNavigate();
    const [doPostOrder, isLoading, isError] = useThunk(postOrder);

    const finishSubmit = (fields) => {
        let data = {'record': fields}
        doPostOrder(data);
        navigate('/orders');

    }

    let content;
    if (isLoading)
        content = <Loader/>;
    else if (isError)
        content = <NotFoundError/>;
    else
        content = <Forms formSubmit={finishSubmit}/>


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

export {CreateOrder};