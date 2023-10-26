import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useThunk} from "src/hooks/useThunk";
import {NotAvailable, PageHeader} from "src/templates/snippets/PageHeader";
import Pagination from "src/templates/snippets/Pagination";
import {Loader, NotFoundError} from "src/components/Loader";
import {fetchAllSession} from "src/store";
import TableData from "./lists";


const IndexSession = () => {
    const [doFetchAllSession, isLoading, isErrors] = useThunk(fetchAllSession);
    const {data, count, page} = useSelector(state => state.sessions);

    useEffect(() => {
        doFetchAllSession();
    }, [doFetchAllSession]);

    const changePage = (page_no) => {
        doFetchAllSession(page_no);
    }

    let content;
    if (isLoading)
        content = <Loader/>;
    else if (isErrors)
        content = <NotFoundError/>;
    else
        content = data.map((dt, i) => {
            return (
                <TableData key={i} rec={dt}/>
            );
        });

    return (
        <>
            <PageHeader title={'Sessions'} count={count} clink={'session'}/>
            <div className='table-responsive small'>
                <table className='table table-striped table-sm'>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>User</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th className="action-width">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {count ? content : <NotAvailable/>}
                    </tbody>
                </table>
            </div>
            {count ? <Pagination pageChange={changePage} current={page} count={count}/> : ''}
        </>
    );
};


export {IndexSession};
export * from './create';
export * from './update';