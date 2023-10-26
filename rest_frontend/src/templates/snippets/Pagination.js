import styles from "src/templates/static/css/pages.style.css";


const Pagination = () => {
    return (
        <div className={styles.pagination}>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item ">
                        <a className="page-link" href="#" tabIndex="-1">Previous</a>
                    </li>
                    <li className="page-item disabled"><a className="page-link" href="#">..</a></li>
                    <li className="page-item"><a className="page-link" href="#">8</a></li>
                    <li className="page-item"><a className="page-link" href="#">9</a></li>
                    <li className="page-item active"><a className="page-link" href="#">10</a></li>
                    <li className="page-item"><a className="page-link" href="#">11</a></li>
                    <li className="page-item"><a className="page-link" href="#">12</a></li>
                    <li className="page-item disabled"><a className="page-link" href="#">...</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;