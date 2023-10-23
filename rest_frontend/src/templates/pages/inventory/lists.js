import Action from "src/components/actions";
import {useNavigate} from "react-router-dom";
import {deleteInventory} from "src/store";
import {useThunk} from "src/hooks/useThunk";


const TableData = ({rec}) => {
    const navigate = useNavigate();
    const [doDelInventory] = useThunk(deleteInventory);

    const handleDelete = (id) => {
        doDelInventory(id);
        navigate('/inventory');
    }

    return (
        <tr key={rec.id}>
            <td>{rec.id}</td>
            <td>{rec.name}</td>
            <td>{rec.quantity}</td>
            <td>{rec.status}</td>
            <td>
                <Action recId={rec.id} delCallback={handleDelete}/>
            </td>
        </tr>
    );
};

export default TableData;