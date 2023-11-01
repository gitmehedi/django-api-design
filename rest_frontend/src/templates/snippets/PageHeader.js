import {Link} from "react-router-dom";

const PageHeader = ({title, count, clink}) => {
    return (
        <div
            className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">{title}</h1>

            <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2 ml-1">
                    <Link to={`/${clink}/create`} className="btn btn-sm btn-success">Add + </Link>
                </div>
            </div>
        </div>
    );
}

const SearchHeader = ({count, onsearch}) => {
    const handleEvent = (evt) => {
        evt.preventDefault();
        if (evt.key === 'Enter') {
            onsearch(evt.target.value);
        }
    }

    return (
        <div
            className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3" >
            <div>Total Records: <strong>{count}</strong></div>

            <div className="btn-toolbar mb-2 mb-md-0 input-group-sm">
                <div className="input-group">
                <span className="input-group-text" id="basic-addon1" style={{backgroundColor: 'lightgray'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green"
                       className="bi bi-search" viewBox="0 0 16 16">
  <path
      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
</svg>
                </span>
                    <input type="search" className="form-control" onKeyUp={handleEvent} aria-describedby="search" placeholder="Search"/>
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

export {
    PageHeader, NotAvailable, SearchHeader
};