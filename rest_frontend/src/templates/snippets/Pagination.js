import styles from "src/templates/static/css/pages.style.css";

const Pagination = ({pageChange, current, count}) => {
    let page_size = 20;
    let last = Math.ceil(count / page_size);
    let previous = current === 1 ? null : current - 1;
    let next = current === last ? null : current + 1;
    let items = [current];

    for (let i = current-1; i >= current - 2; i--) {
        if (i > 0)
            items = [i, ...items];
    }

    for (let j = current + 1; j <= current + 2; j++) {
        if (j < last)
            items = [...items, j];
    }
    const handlePage = (evt) => {
        evt.preventDefault();
        let page_no = evt.target.attributes['page'].value;
        pageChange(page_no);
    }


    return (
        <div className={styles.pagination}>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className={`${previous ? "page-item" : "disabled"}`}>
                        <span className="page-link" page={previous} onClick={handlePage} tabIndex="-1">Previous</span>
                    </li>

                    {items.map(item => (
                        <li className={`page-item ${item === current ? 'active' : ''}`}>
                            <a className="page-link" onClick={handlePage} page={item}>{item}</a>
                        </li>
                    ))}

                    <li className={`${next ? "page-item" : "disabled"}`}>
                        <a className="page-link" page={next} onClick={handlePage} href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;