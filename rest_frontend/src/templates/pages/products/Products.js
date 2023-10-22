import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllProducts} from "src/store";
import Action from "src/components/actions";
import Pagination from "src/templates/snippets/Pagination"
import PageHeader from "src/templates/snippets/PageHeader"

const Products = () => {
    const dispatch = useDispatch();

    const {data} = useSelector((state) => {
        return state.products;
    })


    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [fetchAllProducts]);


    const renderData = data.map((dt) => {
        return (
            <tr key={dt.id}>
                <td>{dt.id}</td>
                <td>{dt.name}</td>
                <td>{dt.sku}</td>
                <td>{dt.price}</td>
                <td>{dt.category}</td>
                <td>{dt.inventory}</td>
                <td>{dt.discount}</td>
                <td>{dt.description}</td>
                <td>{dt.status}</td>
                <td>
                    <Action recId={dt.id}/>
                </td>
            </tr>
        );
    });


    return (
        <>
            <PageHeader title={'Products'} count={200} clink={'products'}/>
            <div className='table-responsive small'>
                <table className='table table-striped table-sm'>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>SKU</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Inventory</th>
                        <th>Discount</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderData}
                    </tbody>
                </table>
            </div>
            <Pagination/>
        </>
    );
};
export default Products;