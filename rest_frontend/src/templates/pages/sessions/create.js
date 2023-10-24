import {useNavigate, Link} from 'react-router-dom';
import {postSession} from "src/store";
import {useThunk} from 'src/hooks/useThunk';
import {Loader, NotFoundError} from "src/components/Loader";
import Forms from './forms';


const CreateSession = () => {
    const navigate = useNavigate();
    const [doPostSession, isLoading, isError] = useThunk(postSession);

    const finishSubmit = (fields) => {
        let data = {'record': fields};
        doPostSession(data);
        navigate('/session');
    }

    let content;
    if (isLoading) {
        content = <Loader/>;
    } else if (isError) {
        content = <NotFoundError/>;
    } else {
        content = <Forms formSubmit={finishSubmit}/>;
    }

    return (
        <>
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
                <h1 className="h2">New Session</h1>
            </div>
            <div>
                {content}
            </div>
        </>
    );
};

export {CreateSession};

