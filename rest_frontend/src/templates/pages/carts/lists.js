import {useNavigate} from "react-router-dom";
import Action from 'src/components/actions';
import {useThunk} from "src/hooks/useThunk";
import {delCart} from "src/store";


const TableData = ({rec}) => {
    const navigate = useNavigate();
    const [doDelCart] = useThunk(delCart);
    const handleDelete = (id) => {
        doDelCart(id);
        navigate("/carts/");
    }

    return (
        <tr>
            <td>{rec.id}</td>
            <td>{rec.product_name}</td>
            <td>{rec.session_total}</td>
            <td>{rec.quantity}</td>
            <td>{rec.status}</td>
            <td>
                <Action recId={rec.id} delCallback={handleDelete}/>
            </td>
        </tr>
    );
};
export default TableData;