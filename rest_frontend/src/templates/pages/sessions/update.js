import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import {fetchSession, putSession} from "src/store";
import {getRecId} from 'src/store/utils/urls';
import {useThunk} from 'src/hooks/useThunk';
import {Loader, NotFoundError} from "src/components/Loader";
import Forms from "./forms";


const UpdateSession = () => {
    const id = getRecId();
    const navigate = useNavigate();
    const [doFetchSession, isLoading, loadingErrors] = useThunk(fetchSession);
    const [doPutSession] = useThunk(putSession);

    const finishSubmit = (fields) => {
        let data = {'id': id, 'record': fields}
        doPutSession(data);
        navigate('/session');
    }

    useEffect(() => {
        if (id) {
            doFetchSession(id);
        }
    }, [doFetchSession]);

    const record = useSelector((state) => state.sessions.record);

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
                <h1 className="h2">Modify Session</h1>
            </div>
            <div>
                {content}
            </div>
        </>
    );
};
export {UpdateSession};