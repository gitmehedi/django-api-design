import Action from "src/components/actions";
import {useNavigate} from "react-router-dom";
import {useThunk} from "src/hooks/useThunk";
import {delOrder} from "src/store";


const TableData = ({rec}) => {
    const navigate = useNavigate();
    const [doDelOrder] = useThunk(delOrder);

    const handleDelete = (id) => {
        doDelOrder(id);
        navigate('/orders');
    }

    return (
        <tr key={rec.id}>
            <td>{rec.id}</td>
            <td>{rec.user}</td>
            <td>{rec.total_price}</td>
            <td>{rec.payment}</td>
            <td>
                <Action recId={rec.id} delCallback={handleDelete}/>
            </td>
        </tr>
    );
}

export default TableData;