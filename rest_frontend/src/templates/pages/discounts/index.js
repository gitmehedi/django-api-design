import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllDiscount} from "src/store";
import Action from "src/components/actions";
import Pagination from "src/templates/snippets/Pagination";
import PageHeader from "src/templates/snippets/PageHeader";

const IndexDiscount = () => {
    const dispatch = useDispatch();

    const {data} = useSelector((state) => {
        return state.discount;
    })


    useEffect(() => {
        dispatch(fetchAllDiscount());
    }, [fetchAllDiscount]);


    const renderData = data.map((dt) => {
        return (
            <tr key={dt.id}>
                <td>{dt.id}</td>
                <td>{dt.name}</td>
                <td>{dt.discount_percent}</td>
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
            <PageHeader title={'Discounts'} count={200} clink={'discounts'}/>
            <div className='table-responsive small'>
                <table className='table table-striped table-sm'>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Discount Percent</th>
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


export {IndexDiscount};
export * from './create';
export * from './update';