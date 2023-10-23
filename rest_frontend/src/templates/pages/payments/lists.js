import {useNavigate} from "react-router-dom";
import Action from 'src/components/actions';
import {useThunk} from "src/hooks/useThunk";
import {delPayment} from "src/store";


const TableData = ({rec}) => {
    const navigate = useNavigate();
    const [doDelPayment] = useThunk(delPayment);
    const handleDelete = (id) => {
        doDelPayment(id);
        navigate("/payment");
    }

    return (
        <tr>
            <td>{rec.id}</td>
            <td>{rec.provider}</td>
            <td>{rec.amount}</td>
            <td>{rec.status}</td>
            <td>
                <Action recId={rec.id} delCallback={handleDelete}/>
            </td>
        </tr>
    );
};
export default TableData;