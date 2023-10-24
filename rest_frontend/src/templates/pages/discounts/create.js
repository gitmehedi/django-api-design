import {useNavigate, Link} from 'react-router-dom';
import {postDiscount} from "src/store";
import {useThunk} from 'src/hooks/useThunk';
import Forms from './forms';
import {Loader, NotFoundError} from "src/components/Loader";

const CreateDiscount = () => {
    const navigate = useNavigate();
    const [doPostDiscount, isLoading, loadingErrors] = useThunk(postDiscount);

    const finishSubmit = (fields) => {
        let data = {'record': fields}
        doPostDiscount(data);
        navigate('/discount');
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
                <h1 className="h2">New Discount</h1>
            </div>
            <div>
                {content}
            </div>
        </>
    );
};


export {CreateDiscount};

