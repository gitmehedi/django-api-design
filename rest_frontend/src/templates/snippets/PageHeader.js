import {Link} from "react-router-dom";


const PageHeader = ({title, count, clink}) => {
    return (

        <div
            className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">{title}</h1>

            <div className="btn-toolbar mb-2 mb-md-0">
                <div style={{marginRight: '10px', paddingTop: '5px'}}>Total Records: <strong>{count}</strong></div>

                <div className="btn-group me-2 ml-1">
                    <Link to={`/${clink}/create`} className="btn btn-sm btn-success">Add + </Link>
                </div>
            </div>
        </div>

    );
}

const NotAvailable = () => {
    return (
        <tr>
            <td colSpan='10' className="h6 text-success">No Record Available</td>
        </tr>
    );
}

export {PageHeader, NotAvailable};